import {LanguageCode, Product, ShippingEligibilityChecker, TransactionalConnection} from '@vendure/core';
import {ShippingWeightUtil} from './shipping-weight.util';

export const eligibleByWeightChecker = new ShippingEligibilityChecker({
    code: 'max-weight-eligibility-checker',
    description: [{
        languageCode: LanguageCode.en,
        value: 'Shipping by weight and country checker. Order should be between minWeight and maxWeight, and shippingAdress in one of the defined countries.'
    }],
    args: {
        minWeight: {
            type: 'int',
            config: {inputType: 'default'},
            description: [{languageCode: LanguageCode.en, value: 'Minimum weight in KG'}]
        },
        maxWeight: {
            type: 'int',
            config: {inputType: 'default'},
            description: [{languageCode: LanguageCode.en, value: 'Maximum weight in KG'}]
        },
        minOrderValue: {
            type: 'int',
            defaultValue: 0,
            ui: { component: 'currency-form-input' },
            description: [{languageCode: LanguageCode.en, value: 'Minimum order value'}]
        },
        maxOrderValue: {
            type: 'int',
            defaultValue: 0,
            ui: { component: 'currency-form-input' },
            description: [{languageCode: LanguageCode.en, value: 'Maximum order value'}]
        },
        countryCodes: {
            type: 'string',
            config: {inputType: 'default'},
            required: false,
            description: [{
                languageCode: LanguageCode.en,
                value: 'Comma seperated, capitalized country codes. Empty means all countries.'
            }]
        },
        exceptCountries: {
            type: 'string',
            config: {inputType: 'default'},
            required: false,
            description: [{
                languageCode: LanguageCode.en,
                value: 'NOT allowed for these countries'
            }]
        },
    },
    init(injector) {
        this.connection = injector.get(TransactionalConnection);
    },
    async check(ctx, order, args) {
        const countryCodes: string[] | undefined = args.countryCodes?.split(',').filter(c => c.trim() != '');
        const exceptCountries: string[] | undefined = args.exceptCountries?.split(',').filter(c => c.trim() != '');
        let eligibleForCountry = true; // If no countries defined, all countries are allowed
        if (countryCodes?.length > 0) { // if countries defined, then check if adres is in one of these countries
            eligibleForCountry = countryCodes.indexOf(order.shippingAddress?.countryCode) > -1;
        }
        if (exceptCountries?.length > 0 && exceptCountries.indexOf(order.shippingAddress?.countryCode) > -1) {
            // if 'except' defined and order.country is in except list
            eligibleForCountry = false;
        }
        const connection: TransactionalConnection = this.options.connection;
        const productIds = order.lines.map(line => line.productVariant.productId);
        const products = await connection.findByIdsInChannel(ctx, Product, productIds, ctx.channelId, {});
        const totalOrderWeight = ShippingWeightUtil.calculateOrderWeight(order, products);
        const eligibleForWeight = totalOrderWeight >= args.minWeight && totalOrderWeight <= args.maxWeight; // Is between min and max weight
        const eligibleForOrderValue = order.subTotalWithTax >= args.minOrderValue && order.subTotalWithTax < args.maxOrderValue; // Is between min and max value
/*        console.log('----------',this.code);
        console.log('country', order.shippingAddress?.countryCode, countryCodes, countryCodes.indexOf(order.shippingAddress?.countryCode));
        console.log('Except country', order.shippingAddress?.countryCode, exceptCountries, exceptCountries.indexOf(order.shippingAddress?.countryCode));
        console.log('eligibleForOrderValue',eligibleForOrderValue);
        console.log('eligibleForWeight', eligibleForWeight, `${totalOrderWeight} is between ${args.minWeight} and ${args.maxWeight}`);
        console.log('eligibleForCountry', eligibleForCountry);*/
        return eligibleForWeight && eligibleForOrderValue && eligibleForCountry;
    },
});