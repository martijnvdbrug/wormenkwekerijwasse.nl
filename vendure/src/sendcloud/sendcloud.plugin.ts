import {DefaultLogger, Logger, PluginCommonModule, VendurePlugin} from '@vendure/core';
import {INestApplication} from '@nestjs/common';
import {SendcloudService} from './sendcloud.service';
import {SendcloudOptions} from './types/sendcloud-options';
import {SendcloudController} from './sendcloud.controller';
import {SendcloudClient} from './sendcloud.client';
import {json} from 'body-parser';
const cloneBuffer = require('clone-buffer');

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [SendcloudService],
    controllers: [SendcloudController],
})
export class SendcloudPlugin {

    static options: SendcloudOptions;
    static context = 'SendcloudPlugin';

    static init(options: SendcloudOptions): typeof SendcloudPlugin {
        this.options = options;
        return SendcloudPlugin;
    }

    static beforeVendureBootstrap(app: INestApplication): void | Promise<void> {
        // Save raw body for signature verification
        app.use(json({
            verify: (req: any, res, buf, encoding) => {
                if (req.headers[SendcloudClient.signatureHeader] && Buffer.isBuffer(buf)) {
                    req.rawBody = cloneBuffer(buf);
                }
                return true;
            },
        }));
    }

}
