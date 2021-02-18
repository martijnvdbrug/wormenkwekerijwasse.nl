import {LanguageCode, Product, ShippingEligibilityChecker, TransactionalConnection} from '@vendure/core';
import {ShippingWeightUtil} from './shipping-weight.util';

export const eligibleByWeightChecker = new ShippingEligibilityChecker({
    code: 'max-weight-eligibility-checker',
    description: [{languageCode: LanguageCode.en, value: 'Shipping by weight checker'}],
    args: {
        minWeight: {
            type: 'int',
            config: {inputType: 'default'},
            description: [{languageCode: LanguageCode.en, value: 'Minimum weight in grams'}]
        },
        maxWeight: {
            type: 'int',
            config: {inputType: 'default'},
            description: [{languageCode: LanguageCode.en, value: 'Maximum weight in grams'}]
        },
    },
    init(injector) {
        this.connection = injector.get(TransactionalConnection);
    },
    async check(ctx, order, args) {
        const connection: TransactionalConnection = this.options.connection;
        const productIds = order.lines.map(line => line.productVariant.productId);
        const products = await connection.findByIdsInChannel(ctx, Product, productIds, ctx.channelId, {});
        const totalOrderWeight = ShippingWeightUtil.calculateOrderWeight(order, products);
        return totalOrderWeight >= args.minWeight && totalOrderWeight < args.maxWeight;
    },
});