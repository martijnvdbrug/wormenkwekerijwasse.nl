import {Injectable} from '@nestjs/common';
import {
    ChannelService,
    EventBus,
    FulfillmentStateTransitionError, GraphQLErrorResult,
    Logger,
    Order,
    OrderService, OrderStateTransitionError,
    OrderStateTransitionEvent,
    ProductVariant,
    RequestContext,
    TransactionalConnection
} from '@vendure/core';
import {filter} from 'rxjs/operators';
import {SendcloudClient} from './sendcloud.client';
import {SendcloudPlugin} from './sendcloud.plugin';
import {addNote, addNrOfOrders, toParcelInput} from './sendcloud.adapter';
import {Parcel} from './types/sendcloud-api-response.types';
import {SendcloudParcelStatus} from './types/sendcloud-parcel-status';
import {CancelOrderResult, OrderLineInput} from '@vendure/admin-ui/core';
import {Fulfillment} from '@vendure/core/dist/entity/fulfillment/fulfillment.entity';

@Injectable()
export class SendcloudService {

    client: SendcloudClient;

    constructor(private eventBus: EventBus, private connection: TransactionalConnection, private orderService: OrderService, private channelService: ChannelService) {
        this.client = new SendcloudClient(SendcloudPlugin.options.publicKey, SendcloudPlugin.options.secret);
        this.eventBus.ofType(OrderStateTransitionEvent)
            .pipe(filter(event => {
                const isPickup = !!event.order.shippingLines.find(s => s.shippingMethodId == 11);
                return event.toState === 'PaymentSettled' && !isPickup;
            }))
            .subscribe(event => this.syncToSendloud(event.ctx, event.order)
                .catch(e => Logger.error(`Failed to sync order ${event.order.code} to SendCloud, ${e}`, SendcloudPlugin.context))
            );
    }

    async syncToSendloud(ctx: RequestContext, order: Order): Promise<Parcel> {
        const variantIds = order.lines.map(l => l.productVariant.id);
        const variants = await this.connection.findByIdsInChannel(ctx, ProductVariant, variantIds, ctx.channelId, {relations: ['translations', 'product', 'product.translations']});
        let nrOfOrders = undefined;
        if (order.customer?.id) {
            const orders = await this.connection.getRepository(Order).find({where: {customer: {id: order.customer.id}, state: 'Delivered'}});
            nrOfOrders = orders.length;
        }
        const parcelInput = toParcelInput(order, variants);
        if ((order.customFields as any).customerNote) {
            addNote(parcelInput, (order.customFields as any).customerNote);
        }
        addNrOfOrders(parcelInput, nrOfOrders);
        return this.client.createParcel(parcelInput);
    }

    /**
     * Update order by given orderCode, returns undefined if no action was taken
     * Returns order if transition wa successful
     */
    async updateOrder(sendcloudStatus: SendcloudParcelStatus, orderCode: string): Promise<void> {
        if (!sendcloudStatus.orderState) {
            Logger.debug(`Cannot update order with code ${orderCode}: No orderState is set for SendCloud status "${sendcloudStatus.message} (${sendcloudStatus.id})"`, SendcloudPlugin.context);
            return;
        }
        const ctx = await this.createContext();
        const order = await this.connection.getRepository(ctx, Order).findOne({code: orderCode}, {relations: ['lines', 'lines.items']});
        if (!order) {
            throw Error(`Cannot update status from SendCloud: No order with code ${orderCode} found`);
        }
        if (order.state === sendcloudStatus.orderState) {
            return Logger.debug(`Cannot update order with code ${orderCode}: Order already has state ${order.state}`, SendcloudPlugin.context);
        }
        if (sendcloudStatus.orderState === 'Shipped') {
            await this.shipAll(ctx, order);
            return Logger.info(`Successfully update order ${orderCode} to ${sendcloudStatus.orderState}`, SendcloudPlugin.context);
        }
        if (sendcloudStatus.orderState === 'Delivered') {
            await this.shipAll(ctx, order).catch((e) => {
                Logger.error(e, SendcloudPlugin.context);
            }); // ShipAll in case previous webhook was missed, but catch because it might have been done already
            const fulfillments = await this.orderService.getOrderFulfillments(ctx, order);
            const [result] = await Promise.all(fulfillments.map(f => this.orderService.transitionFulfillmentToState(ctx, f.id, sendcloudStatus.orderState!)));
            if ((result as FulfillmentStateTransitionError)?.errorCode) {
                throw Error(`Cannot transition order ${orderCode} to ${sendcloudStatus.orderState}: ${(result as FulfillmentStateTransitionError).transitionError}`);
            }
            return Logger.info(`Successfully update order ${orderCode} to ${sendcloudStatus.orderState}`, SendcloudPlugin.context);
        }
    }

    /**
     * Fulfill and shipp all items
     */
    async shipAll(ctx: RequestContext, order: Order): Promise<Fulfillment | FulfillmentStateTransitionError> {
        const lines: OrderLineInput[] = order.lines.map(line => ({
            orderLineId: line.id,
            quantity: line.quantity
        } as OrderLineInput));
        const fulfillment = await this.orderService.createFulfillment(ctx, {
            handler: {
                code: 'manual-fulfillment',
                arguments: [{
                    name: "method",
                    value: "Sendcloud"
                }, {
                    name: "trackingCode",
                    value: "-"
                }]
            },
            lines: lines
        });
        return this.orderService.transitionFulfillmentToState(ctx, (fulfillment as any).id, 'Shipped');
    }

    /**
     * Get ctx for DEFAULT channel
     */
    async createContext(): Promise<RequestContext> {
        const channel = await this.channelService.getDefaultChannel();
        return new RequestContext({
            apiType: 'admin',
            isAuthorized: true,
            authorizedAsOwnerOnly: false,
            channel,
        });
    }


}