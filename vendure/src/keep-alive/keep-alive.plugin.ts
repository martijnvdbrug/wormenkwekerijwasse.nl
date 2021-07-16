import {PluginCommonModule, VendurePlugin} from '@vendure/core';
import {KeepAliveController} from "./keep-alive.controller";

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [KeepAliveController]
})
export class KeepAlivePlugin {
}
