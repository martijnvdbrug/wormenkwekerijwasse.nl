import {Args, Query, Resolver} from "@nestjs/graphql";
import {Allow, Ctx, RequestContext} from "@vendure/core";
import gql from 'graphql-tag';
import {Permission} from "../generated/generated-admin-types";

@Resolver()
export class OrderExportResolver {

    static schema = gql`
        scalar Date
        extend type Query {
            orderExport(filter: orderExportFilter!): String
        }
        input orderExportFilter {
            placedAtEnd: Date
            placedAtStart: Date
            states: [String]
        }`;

    constructor() {
    }

    @Query()
    @Allow(Permission.ReadOrder)
    orderExport(@Ctx() ctx: RequestContext, @Args() args): string {
        console.log(args);
        console.log('CTX', ctx.channelId);
        return 'bogus';
    }
}
