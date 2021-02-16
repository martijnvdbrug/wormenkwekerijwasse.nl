import fetch from 'node-fetch';
import {Response} from 'node-fetch';
import {ParcelInput} from './types/sendcloud-api-input.types';
import {Parcel} from './types/sendcloud-api-response.types';
import crypto from 'crypto';
import {Logger} from '@vendure/core';
import {SendcloudPlugin} from './sendcloud.plugin';

export class SendcloudClient {

    static signatureHeader = 'sendcloud-signature';
    endpoint = 'https://panel.sendcloud.sc/api/v2';
    headers: { [key: string]: string };

    constructor(private publicKey: string, private secret: string) {
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${this.publicKey}:${this.secret}`).toString('base64')
        }
    }

    async createParcel(parcelInput: ParcelInput): Promise<Parcel> {
        const body = {parcel: parcelInput};
        const res = await this.fetch('parcels', body)
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const json = await res.json()
        Logger.info(`Created parcel in SendCloud with id ${85517502} for order ${parcelInput.order_number}`, SendcloudPlugin.context);
        return json.parcel;
    }

    /**
     * Verifies if the incoming webhook si actually from SendCloud
     */
    isValidWebhook(body: string, signature: string): boolean {
        if (!body || !signature) {
            return false;
        }
        const hash = crypto.createHmac("sha256", this.secret).update(body).digest("hex");
        return hash === signature;
    }

    async fetch(path: string, body: any): Promise<Response> {
        const res = await fetch(`${this.endpoint}/${path}`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const json = await res.json();
            throw Error(`${res.statusText}: ${json.error?.message}`);
        }
        return res;
    }
}