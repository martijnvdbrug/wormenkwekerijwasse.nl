import {LanguageCode, PluginCommonModule, VendurePlugin} from '@vendure/core';
import {eligibleByWeightChecker} from './eligible-by-weight-checker';


@VendurePlugin({
    imports: [PluginCommonModule],
    configuration: config => {
        config.shippingOptions.shippingEligibilityCheckers.push(eligibleByWeightChecker)
        config.customFields.Product.push({
            name: 'weight',
            public: true,
            nullable: true,
            type: 'int',
            description: [{ languageCode: LanguageCode.en, value: 'Weight in grams' }],
        });
        return config;
    },
})
export class ShippingByWeightPlugin {
}