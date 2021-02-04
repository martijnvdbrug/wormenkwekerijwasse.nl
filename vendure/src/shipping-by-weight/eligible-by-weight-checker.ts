import {ShippingEligibilityChecker, LanguageCode} from '@vendure/core';
import {ShippingWeightUtil} from './shipping-weight.util';

export const eligibleByWeightChecker = new ShippingEligibilityChecker({
    code: 'max-weight-eligibility-checker',
    description: [{ languageCode: LanguageCode.en, value: 'Shipping by weight checker' }],
    args: {
        minWeight: { type: 'int', config: { inputType: 'default' }, description: [{ languageCode: LanguageCode.en, value: 'Minimum weight in grams' }]},
        maxWeight: { type: 'int', config: { inputType: 'default' }, description: [{ languageCode: LanguageCode.en, value: 'Maximum weight in grams' }]},
    },
    check: (ctx, order, args) => {
        const totalOrderWeight = ShippingWeightUtil.calculateOrderWeight(order);
        return (totalOrderWeight > args.minWeight && totalOrderWeight < args.maxWeight);
    },
});