import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Api, ApiType, ListQueryBuilder, Product, TransactionalConnection } from '@vendure/core';

import { ProductReview } from '../entities/product-review.entity';
import {ProductReviewList, ProductReviewsArgs} from '../../generated/generated-shop-types';

@Resolver('Product')
export class ProductEntityResolver {
    constructor(private listQueryBuilder: ListQueryBuilder, private connection: TransactionalConnection) {}

    @ResolveField()
    async reviews(@Api() apiType: ApiType, @Parent() product: Product, @Args() args: ProductReviewsArgs) {
        const {items, totalItems} = await this.listQueryBuilder
            .build(ProductReview, args.options || undefined, {
                where: {
                    product,
                    ...(apiType === 'shop' ? { state: 'approved' } : {}),
                },
                relations: ['product', 'product.featuredAsset'],
            })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
                items,
                totalItems,
            }));
        // FIXME, does not support paginating yet, just calculate average of `items`
        let averageRating = 0;
        if (items?.length > 0) {
            const cummulativeRating = items.map(r => r.rating)?.reduce((total, rating) => total + rating);
            averageRating = cummulativeRating / items.length;
            averageRating = Math.round(averageRating * 10 / 10 );
        }
        return {
            items,
            totalItems,
            averageRating
        }
    }

    @ResolveField()
    reviewsHistogram(@Parent() product: Product) {
        return this.connection
            .rawConnection
            .createQueryBuilder()
            .select('ROUND(`rating`)', 'bin')
            .addSelect('COUNT(*)', 'frequency')
            .from(ProductReview, 'review')
            .where('review.product = :productId', { productId: product.id })
            .andWhere('review.state = :state', { state: 'approved' })
            .groupBy('ROUND(`rating`)')
            .getRawMany();
    }
}
