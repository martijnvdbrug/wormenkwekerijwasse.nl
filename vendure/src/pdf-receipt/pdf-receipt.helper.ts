import fs from 'fs';
import pdf = require('pdf-creator-node');
import {Order} from '@vendure/core';
import tmp = require('tmp');

export async function createPdfReceipt(order: Order, taxes: {[key: number]: number}): Promise<string> {
    const tmpFile = tmp.fileSync({postfix: '.pdf'});
    const html = fs.readFileSync(`static/pdf-receipt/receipt.html`, 'utf8');
    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        timeout: 1000 * 60 * 15, // 15 min
    };
    const btwId = (order.customFields as any).taxId;
    const orderDate = `${order.orderPlacedAt.getDate()}-${order.orderPlacedAt.getMonth() + 1}-${order.orderPlacedAt.getFullYear()}`;
    const address = order.billingAddress?.company ? order.billingAddress : order.shippingAddress
    const document = {
        html: html,
        data: {
            taxes,
            order,
            address,
            btwId,
            orderDate: orderDate
        },
        path: tmpFile.name,
        type: '',
    };
    await pdf.create(document, options);
    return tmpFile.name;
}
