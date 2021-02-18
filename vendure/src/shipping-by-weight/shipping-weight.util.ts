import {Order, Product} from '@vendure/core';

export namespace ShippingWeightUtil {

    export function calculateOrderWeight(order: Order, products: Product[]): number {
        return order.lines.reduce((acc, line) => {
            const product = products.find(p => p.id === line.productVariant.productId);
            const weight = (product.customFields as any).weight || 0;
            const lineWeight = weight * line.quantity;
            return acc + lineWeight;
        }, 0);
    }

}