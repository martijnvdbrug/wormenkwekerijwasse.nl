import {Args, Query, Resolver} from '@nestjs/graphql';
import {Allow, Ctx, Order, RequestContext, TransactionalConnection} from '@vendure/core';
import gql from 'graphql-tag';
import {Permission} from '../generated/generated-admin-types';
import papa = require('papaparse');
import {OrderExportPlugin} from "./order-export.plugin";

@Resolver()
export class OrderExportResolver {

    static schema = gql`
        scalar Date
        extend type Query {
            orderExport(filter: OrderExportFilter!): String
        }
        input OrderExportFilter {
            placedAtEnd: Date
            placedAtStart: Date
            states: [String]
        }`;

    constructor(private connection: TransactionalConnection) {
    }

    @Query()
    @Allow(Permission.ReadOrder)
    async orderExport(@Ctx() ctx: RequestContext, @Args('filter') filter: OrderExportFilter): Promise<string> {
        console.log(`User ${ctx.activeUserId} requested order export with ${filter}`);
        const orders = await this.connection.getRepository(Order).createQueryBuilder('order')
            .leftJoinAndSelect('order.lines', 'lines')
            .leftJoinAndSelect('lines.items', 'items')
            .leftJoinAndSelect('lines.productVariant', 'variant')
            .leftJoinAndSelect('variant.product', 'product')
            .leftJoinAndSelect('order.channel', 'channel')
            .where('channel.id >= :channelId', {channelId: ctx.channelId})
            .where('order.orderPlacedAt >= :placedAtStart', {placedAtStart: filter.placedAtStart})
            .andWhere('order.orderPlacedAt <= :placedAtEnd', {placedAtEnd: filter.placedAtEnd})
            .andWhere('order.state IN (:...states)', {
                states: filter.states,
            })
            .getMany();
        return OrderExportPlugin.strategy.toCsv(orders);
    }
}

export interface OrderExportFilter {
    placedAtEnd: string
    placedAtStart: string
    states: string[]
}
