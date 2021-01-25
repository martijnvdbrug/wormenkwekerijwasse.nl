import {Args, ResolveField, Resolver, Parent} from '@nestjs/graphql';
import {Ctx, ProductVariant, RequestContext} from '@vendure/core';

@Resolver()
export class PublicStockResolvers {

    @ResolveField('available')
    @Resolver('ProductVariant')
    stock(@Ctx() ctx: RequestContext, @Parent() variant: ProductVariant) {
        return variant.stockOnHand - variant.stockAllocated - variant.outOfStockThreshold;
    }

}