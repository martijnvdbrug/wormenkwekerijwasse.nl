import {compileUiExtensions, setBranding} from '@vendure/ui-devkit/compiler';
import * as path from 'path';
import {webhookAdminUi} from 'vendure-plugin-webhook';
import {ReviewsPlugin} from './reviews/reviews-plugin';

compileUiExtensions({
    outputPath: path.join(__dirname, '__admin-ui'),
    extensions: [
        webhookAdminUi,
        ReviewsPlugin.uiExtensions,
        setBranding({
            // The small logo appears in the top left of the screen
            smallLogoPath: path.join(__dirname, 'images/logo.png'),
            // The large logo is used on the login page
            largeLogoPath: path.join(__dirname, 'images/logo.png'),
            faviconPath: path.join(__dirname, 'images/logo.png'),
        }),
    ]
}).compile?.().then(() => {
    process.exit(0);
});