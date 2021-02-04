import {Order} from '@vendure/core';

export namespace ShippingWeightUtil {

    export function calculateOrderWeight(order: Order): number {
        return order.lines.reduce((acc, line) => {
            const lineWeight = (line.productVariant.product.customFields as any).weight * line.quantity;
            return acc + lineWeight;
        }, 0);
    }

}