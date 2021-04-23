require('dotenv').config();
import {bootstrap, OrderService} from '@vendure/core';
import {config} from '../src/vendure-config';
import {SendcloudService} from '../src/sendcloud/sendcloud.service';

(async () => {
    const app = await bootstrap(config);
    const sendcloud = app.get(SendcloudService);
    const orderService = app.get(OrderService);
    const ctx = await sendcloud.createContext();
    const order = await orderService.findOne(ctx, '1118');
    await sendcloud.syncToSendloud(ctx, order);
    process.exit(0);
})();