import {PluginCommonModule, VendurePlugin} from '@vendure/core';
import path from 'path';
import {AdminUiExtension} from '@vendure/ui-devkit/compiler';
import {OrderExportResolver} from "./order-export.resolver";

@VendurePlugin({
    imports: [PluginCommonModule],
    adminApiExtensions: {
        schema: OrderExportResolver.schema,
        resolvers: [OrderExportResolver],
    },
})
export class OrderExportPlugin {
    static ui: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        ngModules: [
            {
                type: 'shared' as const,
                ngModuleFileName: 'order-export-action-bar.module.ts',
                ngModuleName: 'OrderExportActionBarModule',
            }
        ],
    };

}
