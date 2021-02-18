import {Body, Controller, Param, Post} from '@nestjs/common';
import {ChannelService, LanguageCode, OrderService, Payment, RequestContext} from '@vendure/core';
import {MollieHelper} from './mollie.helper';
import {Connection} from 'typeorm';
import createMollieClient, {PaymentStatus} from '@mollie/api-client';
import {PaymentStateMachine} from '@vendure/core/dist/service/helpers/payment-state-machine/payment-state-machine';

@Controller('payments')
export class MollieController {
    constructor(private orderService: OrderService, private connection: Connection, private channelService: ChannelService, private paymentStateMachine: PaymentStateMachine) {
    }

    @Post('mollie')
    async webhook(@Body() body: any): Promise<void> {
        const ctx = await this.createContext()
        console.log(`Received payment for default channel`);
        const {apiKey} = await MollieHelper.getConfigAsync(this.connection);
        const client = createMollieClient({apiKey});
        const molliePayment = await client.payments.get(body.id);
        console.log(`Payment for orderCode ${molliePayment.metadata.orderCode} has status ${molliePayment.status}`);
        // find payment in DB by id
        const dbPayment = await this.connection.getRepository(Payment).findOneOrFail({where: {transactionId: molliePayment.id}});
        if (molliePayment.status === PaymentStatus.paid) {
            await this.orderService.settlePayment(ctx, dbPayment.id);
            console.log(`Payment for order ${molliePayment.metadata.orderCode} settled`);
        } else {
            const order = await this.orderService.findOneByCode(ctx, molliePayment.metadata.orderCode);
            await this.paymentStateMachine.transition(ctx, order!, dbPayment, 'Declined');
            console.log(`Payment for order ${molliePayment.metadata.orderCode} declined!`);
        }
    }

    private async createContext(): Promise<RequestContext> {
        const channel = await this.channelService.getDefaultChannel();
        return new RequestContext({
            apiType: 'admin',
            isAuthorized: true,
            authorizedAsOwnerOnly: false,
            channel,
            languageCode: LanguageCode.en,
        });
    }
}
