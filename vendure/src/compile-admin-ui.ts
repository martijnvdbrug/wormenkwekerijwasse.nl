import {compileUiExtensions} from '@vendure/ui-devkit/compiler';
import * as path from 'path';
import {webhookAdminUi} from 'vendure-plugin-webhook';
import {ReviewsPlugin} from './reviews/reviews-plugin';

compileUiExtensions({
    outputPath: path.join(__dirname, '__admin-ui'),
    extensions: [
        webhookAdminUi,
        ReviewsPlugin.uiExtensions
    ]
}).compile?.().then(() => {
    process.exit(0);
});