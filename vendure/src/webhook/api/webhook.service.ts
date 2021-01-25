import {Injectable, OnModuleInit} from '@nestjs/common';
import {EventBus} from '@vendure/core';
import {Connection} from 'typeorm';
import {WebhookPerChannelEntity} from './webhook-per-channel.entity';
import {WebhookPlugin} from '../webhook.plugin';
import fetch from 'node-fetch';

/**
 * Service for updating and retrieving webhooks from db
 */
@Injectable()
export class WebhookService implements OnModuleInit {

    constructor(private eventBus: EventBus, private connection: Connection) {
    }

    async getWebhook(channelId: string): Promise<WebhookPerChannelEntity | undefined> {
        return this.connection.getRepository(WebhookPerChannelEntity).findOne({channelId});
    }

    async saveWebhook(webhookUrl: string, channelId: string): Promise<WebhookPerChannelEntity | undefined> {
        const existing = await this.connection.getRepository(WebhookPerChannelEntity).findOne({channelId});
        if (existing) {
            await this.connection.getRepository(WebhookPerChannelEntity).update({id: existing.id}, {channelId, url: webhookUrl});
        } else {
            await this.connection.getRepository(WebhookPerChannelEntity).save({channelId, url: webhookUrl});
        }
        return this.getWebhook(channelId);
    }

    /**
     * Subscribe to events specified in config
     */
    async onModuleInit(): Promise<void> {
        if (!WebhookPlugin.options || !WebhookPlugin.options.events) {
            throw Error(`Please specify VendureEvents with Webhook.init() in your Vendure config.`);
        }
        WebhookPlugin.options.events!.forEach(configuredEvent => {
            this.eventBus.ofType(configuredEvent).subscribe(event => {
                const channelId = (event as any)?.ctx?.channelId;
                if (!channelId) {
                    console.error(`Cannnot trigger webhook for event ${event.constructor.name}, because there is no channelId in event.ctx`);
                    return;
                }
                this.doWebhook(channelId as string) // Async, because we dont want failures in Vendure if a webhook fails
                    .then(() =>  console.log(`Successfully triggered webhook for channel ${channelId} for event ${event.constructor.name}`))
                    .catch(e => console.error(`Failed to call webhook for event ${event.constructor.name} for channel ${channelId}`, e));
            });
        });
    }

    /**
     * Call webhook for channel. Saves up events in batches for 1 second.
     * If multiple events arise within 1s, the webhook will only be called once
     */
    async doWebhook(channelId: string): Promise<void> {
        const webhookPerChannel = await this.getWebhook(channelId);
        if (!webhookPerChannel || !webhookPerChannel.url) {
            console.log(`No webhook defined for channel ${channelId}`);
            return;
        }
        await fetch(webhookPerChannel.url!, {
            method: 'POST',
        });
    }

}