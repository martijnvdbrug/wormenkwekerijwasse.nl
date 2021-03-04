import path from 'path';
import {AdminUiExtension} from '@vendure/ui-devkit/compiler';

export const adminExternalLinkUI: AdminUiExtension = {
    extensionPath: path.join(__dirname),
    ngModules: [{
        type: 'lazy',
        route: 'comments',
        ngModuleFileName: 'admin-external-link-component.module.ts',
        ngModuleName: 'AdminExternalLinkComponentModule',
    },{
        type: 'shared',
        ngModuleFileName: 'admin-external-link.module.ts',
        ngModuleName: 'AdminExternalLinkModule',
    }]
};