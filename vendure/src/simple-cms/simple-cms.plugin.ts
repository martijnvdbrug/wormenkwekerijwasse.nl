import {PluginCommonModule, VendurePlugin} from '@vendure/core';
import {simpleCmsAdminSchema} from './api/grapqhl/simple-cms.admin-schema';
import {SimpleCmsService} from './api/simple-cms.service';
import {SimpleCmsAdminResolver} from './api/grapqhl/simple-cms.admin-resolver';
import {SimpleCmsSharedResolver} from './api/grapqhl/simple-cms.shared-resolver';
import {simpleCmsSharedTypes} from './api/grapqhl/simple-cms.shared-types';
import {ContentBlock} from './api/content-block';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [ContentBlock],
    providers: [SimpleCmsService],
    adminApiExtensions: {
        schema: simpleCmsAdminSchema,
        resolvers: [SimpleCmsAdminResolver, SimpleCmsSharedResolver],
    },
    shopApiExtensions: {
        schema: simpleCmsSharedTypes,
        resolvers: [SimpleCmsSharedResolver],
    },
})
export class SimpleCMSPlugin {

}
