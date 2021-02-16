import path from 'path';
import {AdminUiExtension} from '@vendure/ui-devkit/compiler';

export const simpleCmsAdminUi: AdminUiExtension = {
    extensionPath: path.join(__dirname, 'ui'),
    ngModules: [{
        type: 'lazy',
        route: 'simple-cms',
        ngModuleFileName: 'simple-cms.module.ts',
        ngModuleName: 'SimpleCmsModule',
    },{
        type: 'shared',
        ngModuleFileName: 'simple-cms.nav-module.ts',
        ngModuleName: 'SimpleCmsNavModule',
    }]
};