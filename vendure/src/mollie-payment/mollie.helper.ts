import createMollieClient, {MollieClient} from '@mollie/api-client';
import {molliePaymentHandler} from './mollie.handler';
import {PaymentMethod} from '@vendure/core';
import {Connection} from 'typeorm';

type MollieConfig = { apiKey: string, host: string}

export class MollieHelper {

    /**
     * Get config from database arguments
     * ChannelKeys are formatted like this: 'channelToken=key_29h271jl839202,https://host.com'
     */
    static getConfig(apikey: string): MollieConfig {
        if (!apikey) {
            throw Error(`No channelKeys configured!`);
        }
        const [key, redirect] = apikey.split('=');
        if (!key || !redirect) {
            throw Error(`Redirect or ApiKey is missing. Set apikey and redirectHost in admin UI`)
        }
        return {
            apiKey: key,
            host: redirect
        };
    }

    /**
     * Queries the database to get PaymentMethod args
     */
    static async getConfigAsync(connection: Connection): Promise<MollieConfig> {
        const method = await connection.getRepository<PaymentMethod>(PaymentMethod).findOne({
            where: {
                code: molliePaymentHandler.code,
            },
        });
        return this.getConfig(method.configArgs[0].value);
    }
}
