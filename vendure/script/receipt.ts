import pdf = require("pdf-creator-node");
import fs = require('fs');
import Handlebars from 'handlebars'
require('dotenv').config();
import {bootstrap, OrderService} from "@vendure/core";
import {config} from "../src/vendure-config";
import {RequestContext} from "@vendure/core/dist/api/common/request-context";
import {SendcloudService} from "../src/sendcloud/sendcloud.service";

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

    const document = {
        html: html,
        data: {
            order,
            btwId: 'Dit is een BTW id',
            orderDate: 'testdatum'
        },
        path: "/tmp/receipt.pdf",
        type: "",
    };
    await pdf.create(document, options);

    process.exit(0);
})();