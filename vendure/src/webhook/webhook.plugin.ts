import {PluginCommonModule, VendurePlugin} from '@vendure/core';
import {AdminUiExtension} from '@vendure/ui-devkit/compiler';
import path from 'path';
import {WebhookPerChannelEntity} from './api/webhook-per-channel.entity';
import {schema} from './api/schema';
import {WebhookPluginOptions} from './api/webhook-plugin-options';
import {WebhookResolver} from './api/webhook.resolver';
import {WebhookService} from './api/webhook.service';


/**
 * Calls a configurable webhook when configured events arise.
 * 1 webhook per channel is configurable
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [WebhookPerChannelEntity],
    providers: [WebhookService],
    adminApiExtensions: {
        schema,
        resolvers: [WebhookResolver]
    }
})
export class WebhookPlugin {

    static options: WebhookPluginOptions;

    static init(options: WebhookPluginOptions): typeof WebhookPlugin {
        this.options = options;
        return WebhookPlugin;
    }

}