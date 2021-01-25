import gql from 'graphql-tag';
import { VendurePlugin } from '@vendure/core';
import {PublicStockResolvers} from './public-stock.resolvers';

@VendurePlugin({
    providers: [],
    shopApiExtensions: {
        schema: gql`
            extend type ProductVariant {
                available: Int
            }
        `,
        resolvers: [PublicStockResolvers]
    }
})
export class PublicStockPlugin {}