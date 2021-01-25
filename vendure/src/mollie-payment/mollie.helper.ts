import createMollieClient, {MollieClient} from '@mollie/api-client';
import {molliePaymentHandler} from './mollie.handler';
import {PaymentMethod} from '@vendure/core';
import {Connection} from 'typeorm';

type MollieConfig = { apiKey: string, host: string, channel: string }

export class MollieHelper {

    /**
     * Get config from database arguments
     * ChannelKeys are formatted like this: 'channelToken=key_29h271jl839202,https://host.com'
     */
    static getConfig(channelKeys: string[], channel: string): MollieConfig {
        if (!channelKeys || channelKeys.length === 0) {
            throw Error(`No channelKeys configured!`);
        }
        let config: MollieConfig | undefined;
        channelKeys.find(channelKey => {
            const [ch, configString] = channelKey.split('=');
            if (channel === ch) {
                const [apiKey, host] = configString.split(',');
                config = {apiKey, host, channel};
                return true;
            }
        });
        if (!config) {
            throw Error(`No config found for channel ${channel}. Set apikey and redirectHost in admin UI.`)
        }
        return config;
    }

    /**
     * Queries the database to get PaymentMethod args
     */
    static async getConfigAsync(channel: string, connection: Connection): Promise<MollieConfig> {
        const method = await connection.getRepository<PaymentMethod>(PaymentMethod).findOne({
            where: {
                code: molliePaymentHandler.code,
            },
        });
        const args = method?.configArgs?.find(arg => arg.name === 'channelKeys');
        const channelKeys = args?.value ? JSON.parse(args?.value) : [];
        return this.getConfig(channelKeys, channel);
    }
}
