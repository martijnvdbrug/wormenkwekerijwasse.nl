import {Order} from "@vendure/core";
import papa = require('papaparse');

export interface OrderExportStrategy {
    /**
     * @param orders including orderLines, orderItems, variant and product
     */
    toCsv(orders: Order[]): Promise<string>;
}

export class DefaultCsvStrategy implements OrderExportStrategy{
    async toCsv(orders: Order[]): Promise<string> {
        const csvData = [];
        orders.forEach(order => order.lines.forEach(orderLine => {
            csvData.push({
                orderCode: order.code,
                status: order.state,
                tax: orderLine.lineTax,
            });
        }));
        return papa.unparse(csvData);
    }
}

