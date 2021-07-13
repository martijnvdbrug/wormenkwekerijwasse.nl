require('dotenv').config();
import {bootstrap, OrderService} from '@vendure/core';
import {config} from '../src/vendure-config';
import {SendcloudService} from '../src/sendcloud/sendcloud.service';

const orders = [5769];
(async () => {
    const app = await bootstrap(config);
    const sendcloud = app.get(SendcloudService);
    const orderService = app.get(OrderService);
    const ctx = await sendcloud.createContext();
    for (let o of orders) {
        const order = await orderService.findOne(ctx, o);
        console.log(`processing ${order.code} - ${order.id}`);
        await sendcloud.syncToSendloud(ctx, order);
        console.log(`!!!!  Synced to sendcloud: ${order.code} - ${order.id}`);
    }
    process.exit(0);
})();