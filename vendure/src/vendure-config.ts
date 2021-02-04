import {
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    ProductEvent,
    ProductVariantChannelEvent,
    ProductVariantEvent,
    VendureConfig,
} from '@vendure/core';
import {AssetServerPlugin} from '@vendure/asset-server-plugin';
import path from 'path';
import {MolliePlugin} from './mollie-payment/mollie.plugin';
import {AdminUiPlugin} from '@vendure/admin-ui-plugin';
import {WebhookPlugin} from 'vendure-plugin-webhook';
import {ReviewsPlugin} from './reviews/reviews-plugin';
import {GoogleStorageStrategy} from 'vendure-plugin-google-storage-assets';
import {CustomStockAllocationStrategy} from './stock-allocation/custom-stock-allocation.strategy';
import {PublicStockPlugin} from 'vendure-plugin-public-stock';
import {ShippingByWeightPlugin} from './shipping-by-weight';

export const config: VendureConfig = {
    orderOptions: {
        stockAllocationStrategy: new CustomStockAllocationStrategy()
    },
    workerOptions: {
        runInMainProcess: true,
    },
    apiOptions: {
        port: process.env.PORT as unknown as number || 3000,
        adminApiPath: 'admin-api',
        adminApiPlayground: {},// turn this off for production
        adminApiDebug: false, // turn this off for production
        shopApiPath: 'shop-api',
        shopApiPlayground: {},// turn this off for production
        shopApiDebug: false,// turn this off for production
    },
    authOptions: {
        superadminCredentials: {
            identifier: 'admin',
            password: process.env.SUPERADMIN_PASS as string
        },
        tokenMethod: 'bearer',
    },
    dbConnectionOptions: {
        type: 'mysql',
        synchronize: false,
        logging: false,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        migrations: [path.join(__dirname, '../migrations/*.ts')],
    },
    paymentOptions: {
        paymentMethodHandlers: [],
    },
    customFields: {},
    /*    shippingOptions: {
          shippingCalculators
        },*/
    plugins: [
        ReviewsPlugin,
        ShippingByWeightPlugin,
        PublicStockPlugin,
        WebhookPlugin.init({
            httpMethod: 'POST',
            delay: 3000,
            events: [ProductEvent, ProductVariantChannelEvent, ProductVariantEvent]
        }),
        MolliePlugin,
        AssetServerPlugin.init({
            storageStrategyFactory: () => new GoogleStorageStrategy('wassets'),
            route: 'assets',
            assetUploadDir: '/tmp/vendure/assets',
            port: 3001,
        }),
        DefaultJobQueuePlugin,
        DefaultSearchPlugin,
        /*        EmailPlugin.init({
                    transport: {
                        type: 'smtp',
                        host: 'smtp.zoho.eu',
                        port: 587,
                        secure: false,
                        logging: true,
                        debug: true,
                        auth: {
                            user: 'noreply@pinelab.studio',
                            pass: process.env.ZOHO_PASS as string,
                        }
                    },
                    handlers: shopsMailHandlers,
                    templatePath: path.join(__dirname, '../static/email/templates'),
                    globalTemplateVars: {
                        fromAddress: '"Webshop" <noreply@pinelab.studio>',
                    },
                }),*/
        // Production ready, precompiled admin UI
        AdminUiPlugin.init({
            adminUiConfig: {
                brand: 'Wormenkwekerij Wasse',
                hideVendureBranding: false,
                hideVersion: false,
            },
            port: 3002,
            app: {
                path: path.join(__dirname, '__admin-ui/dist'),
            },
        }),
    ],
};
