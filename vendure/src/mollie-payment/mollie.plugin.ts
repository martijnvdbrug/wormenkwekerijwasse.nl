import {PluginCommonModule, RuntimeVendureConfig, VendurePlugin} from '@vendure/core';
import {MollieController} from './mollie.controller';
import {molliePaymentHandler} from './mollie.handler';

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [MollieController],
    configuration: (config: RuntimeVendureConfig) => {
        config.paymentOptions.paymentMethodHandlers.push(molliePaymentHandler);
        return config;
    },
})
export class MolliePlugin {}
