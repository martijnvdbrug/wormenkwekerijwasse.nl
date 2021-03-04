import {Body, Controller, Headers, Post, Req} from '@nestjs/common';
import {Request} from 'express';
import {SendcloudService} from './sendcloud.service';
import {SendcloudClient} from './sendcloud.client';
import {IncomingWebhookBody} from './types/sendcloud-api-response.types';
import {sendcloudStates} from './types/sendcloud-parcel-status';
import {Logger} from '@vendure/core';
import {SendcloudPlugin} from './sendcloud.plugin';

@Controller('sendcloud')
export class SendcloudController {
    constructor(private sendcloudService: SendcloudService) {
    }

    @Post('webhook')
    async webhook(@Req() req: Request, @Body() body: IncomingWebhookBody, @Headers(SendcloudClient.signatureHeader) signature: string): Promise<unknown> {
        if (!this.sendcloudService.client.isValidWebhook((req as any).rawBody, signature)) {
           throw Error(`Invalid signature in incoming Sendcloud webhook from ${req.get('host')}`);
        }
        if (body.action !== 'parcel_status_changed') {
            return Logger.info(`Incoming webhook: ${body.action}. skipping...`, SendcloudPlugin.context);
        }
        Logger.info(`Incoming Sendcloud webhook: ${body.action} - ${JSON.stringify(body.parcel)}`);
        const status = sendcloudStates.find(s => s.id === body.parcel?.status?.id)
        if (!status) {
            return Logger.error(`Status is ${body.action}, but no matching SendCloud status was found for ${body.parcel?.status}`, SendcloudPlugin.context);
        }
        if (! body.parcel?.order_number) {
            return Logger.error(`No order_number in incoming Sendcloud webhook: ${body.parcel}`, SendcloudPlugin.context)
        }
        await this.sendcloudService.updateOrder(status, body.parcel.order_number);
    }
}