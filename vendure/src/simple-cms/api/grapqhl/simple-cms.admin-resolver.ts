import {Mutation, Resolver, Args} from '@nestjs/graphql';
import {SimpleCmsService} from '../simple-cms.service';
import {Ctx, RequestContext} from '@vendure/core';
import {ContentBlock} from '../content-block';
import {ContentBlockInput} from '../content-block.input';

@Resolver()
export class SimpleCmsAdminResolver {

    constructor(private service: SimpleCmsService) {
    }

    @Mutation()
    createSimpleContentBlock(@Ctx() ctx: RequestContext, @Args('input') input: ContentBlockInput): Promise<ContentBlock> {
        return this.service.create(ctx, input);
    }

    @Mutation()
    updateSimpleContentBlock(@Ctx() ctx: RequestContext, @Args('id') id: string, @Args('input') input: ContentBlockInput): Promise<ContentBlock> {
        return this.service.update(ctx, id, input);
    }

    @Mutation()
    deleteSimpleContentBlock(@Ctx() ctx: RequestContext, @Args('id') id: string): Promise<boolean> {
        return this.service.delete(ctx, id);
    }


}