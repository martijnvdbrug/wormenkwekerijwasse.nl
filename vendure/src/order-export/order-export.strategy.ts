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
    orderTotalEx: string | number
    orderTotalWithTax: string | number
    shippingMethod: string
    // This is only for orderlines
    variant: string
    product: string
    quantity: number | string
}

export class DefaultCsvStrategy implements OrderExportStrategy {
    async toCsv(orders: Order[]): Promise<string> {
        const csvData: CsvDataLine[] = [];
        orders.forEach(order => {
            csvData.push({
               orderCode: order.code,
                status: order.state,
                variant: "",
                product: "",
                quantity: "",
                orderTotalEx: this.toCurrency(order.total),
                orderTotalWithTax: this.toCurrency(order.totalWithTax),
                shippingMethod: order.shippingLines?.[0]?.shippingMethod?.translations?.[0]?.name || "unknown shippingmethod",

            });
            order.lines.forEach(orderLine => {
                csvData.push({
                    orderCode: order.code,
                    status: "",
                    variant: orderLine.productVariant.translations?.[0]?.name,
                    product: orderLine.productVariant.product?.translations?.[0]?.name,
                    quantity: orderLine.quantity,
                    orderTotalEx: "",
                    orderTotalWithTax: "",
                    shippingMethod: "",
                });
            });
        });
        return papa.unparse(csvData);
    }

    private toCurrency(price: number): string {
        return (price / 100).toFixed(2);
    }

}

