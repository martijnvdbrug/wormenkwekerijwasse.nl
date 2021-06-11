import {Order} from "@vendure/core";
import papa = require('papaparse');

export interface OrderExportStrategy {
    /**
     * @param orders including orderLines, orderItems, variant and product
     */
    toCsv(orders: Order[]): Promise<string>;
}

interface CsvDataLine {
    orderCode: string
    status: string
    variant: string
    product: string
    quantity: number | string
    tax: string | number
    taxRate: string | number
    totalPriceEx: string | number
    totalPriceWithTax: string | number
    shippingMethod: string
}

export class DefaultCsvStrategy implements OrderExportStrategy {
    async toCsv(orders: Order[]): Promise<string> {
        const csvData: CsvDataLine[] = [];
        orders.forEach(order => {
            order.lines.forEach(orderLine => {
                csvData.push({
                    orderCode: order.code,
                    status: order.state,
                    variant: orderLine.productVariant.translations?.[0]?.name,
                    product: orderLine.productVariant.product?.translations?.[0]?.name,
                    tax: orderLine.lineTax / 100,
                    taxRate: orderLine.taxRate,
                    quantity: orderLine.quantity,
                    totalPriceEx: orderLine.linePrice,
                    totalPriceWithTax: orderLine.linePriceWithTax,
                    shippingMethod: "",
                });
            });
            const shippingTax = (order.shippingWithTax - order.shipping) / 100;
            let shippingTaxRate = "";
            if (order.shippingLines?.length === 1) {
                shippingTaxRate = String(order.shippingLines[0].taxRate)
            }
            csvData.push({
                orderCode: order.code,
                status: "",
                variant: "",
                product: "",
                tax: shippingTax,
                taxRate: shippingTaxRate,
                quantity: "",
                totalPriceEx: order.shipping / 100,
                totalPriceWithTax: order.shippingWithTax / 100,
                shippingMethod: order.shippingLines?.[0]?.shippingMethod?.translations?.[0]?.name || "unknown shippingmethod",
            });
        });
        return papa.unparse(csvData);
    }
}

