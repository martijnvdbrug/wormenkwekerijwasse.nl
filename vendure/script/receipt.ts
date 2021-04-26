import pdf = require("pdf-creator-node");
import fs = require('fs');
import Handlebars from 'handlebars'
import {bootstrap, OrderService} from "@vendure/core";
import {config} from "../src/vendure-config";
import {SendcloudService} from "../src/sendcloud/sendcloud.service";

require('dotenv').config();

(async () => {
    Handlebars.registerHelper('formatMoney', (amount?: number) => {
        if (amount == null) {
            return amount;
        }
        return (amount / 100).toFixed(2);
    });

    const app = await bootstrap(config);
    const sendcloud = app.get(SendcloudService);
    const orderService = app.get(OrderService);
    const ctx = await sendcloud.createContext();
    const order = await orderService.findOne(ctx, 1118);

    const html = fs.readFileSync(`${__dirname}/receipt.html`, "utf8");
    const options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm"
    };

    const orderDate = `${order.orderPlacedAt.getDate()}-${order.orderPlacedAt.getMonth() + 1}-${order.orderPlacedAt.getFullYear()}`;

    const document = {
        html: html,
        data: {
            taxes: {
                21: (order.totalWithTax - order.total)
            },
            order,
            btwId: 'Dit is een BTW id',
            orderDate: orderDate
        },
        path: "/tmp/receipt.pdf",
        type: "",
    };
    await pdf.create(document, options);

    process.exit(0);
})();