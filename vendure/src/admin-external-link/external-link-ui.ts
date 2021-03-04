import path from 'path';
import {AdminUiExtension} from '@vendure/ui-devkit/compiler';

export const adminExternalLinkUI: AdminUiExtension = {
    extensionPath: path.join(__dirname),
    ngModules: [{
        type: 'shared',
        ngModuleFileName: 'admin-external-link.module.ts',
        ngModuleName: 'AdminExternalLinkModule',
    }]
};