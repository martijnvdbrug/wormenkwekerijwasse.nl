import {
    CollectionModificationEvent,
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
import {SimpleCMSPlugin} from './simple-cms/simple-cms.plugin';
import {SendcloudPlugin} from './sendcloud/sendcloud.plugin';
import {EmailPlugin} from '@vendure/email-plugin';
import {orderConfirmationHandler, passwordResetHandler} from './email/email.handlers';
import {NumericOrderCodeStrategy} from './order/numeric-order-code-strategy';

export const config: VendureConfig = {
    orderOptions: {
        stockAllocationStrategy: new CustomStockAllocationStrategy(),
        orderCodeStrategy: new NumericOrderCodeStrategy(),
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
        requireVerification: false,
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
    customFields: {
        Order: [
            {
                name: 'customerNote',
                public: true,
                nullable: true,
                type: 'string',
            },
            {
                name: 'taxId',
                public: true,
                nullable: true,
                type: 'string',
            }
        ]
    },
    plugins: [
        ReviewsPlugin,
        SimpleCMSPlugin,
        ShippingByWeightPlugin,
        PublicStockPlugin,
        SendcloudPlugin.init({
            publicKey: process.env.SENDCLOUD_API_PUBLIC!,
            secret: process.env.SENDCLOUD_API_SECRET!
        }),
        WebhookPlugin.init({
            httpMethod: 'POST',
            delay: 3000,
            events: [ProductEvent, ProductVariantChannelEvent, ProductVariantEvent, CollectionModificationEvent]
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
        EmailPlugin.init({
            transport: {
                type: 'smtp',
                host: 'smtp02.hostnet.nl',
                port: 587,
                secure: false,
                logging: true,
                debug: true,
                auth: {
                    user: process.env.SMTP_EMAIL,
                    pass: process.env.SMTP_PASS,
                }
            },
            handlers: [orderConfirmationHandler, passwordResetHandler],
            templatePath: path.join(__dirname, '../static/email/templates'),
            globalTemplateVars: {
                fromAddress: `"Wormenkwekerij Wasse" <${process.env.SMTP_EMAIL}>`,
                passwordResetUrl: 'https://wormenkwekerijwasse.nl/reset-wachtwoord',
            },
        }),
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
