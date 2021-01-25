import {AdminUiExtension} from '@vendure/ui-devkit/compiler';
import path from "path";

export const webhookAdminUi: AdminUiExtension = {
    extensionPath: path.join(__dirname, 'ui'),
    ngModules: [{
        type: 'lazy',
        route: 'webhook',
        ngModuleFileName: 'webhook.module.ts',
        ngModuleName: 'WebhookModule',
    }, {
        type: 'shared',
        ngModuleFileName: 'webhook-nav.module.ts',
        ngModuleName: 'WebhookNavModule',
    }]
};