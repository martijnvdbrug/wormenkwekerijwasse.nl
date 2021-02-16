import {Query, Resolver, Args} from '@nestjs/graphql';
import {ContentBlock} from '../content-block';
import {Ctx, RequestContext} from '@vendure/core';
import {SimpleCmsService} from '../simple-cms.service';

@Resolver()
export class SimpleCmsSharedResolver {

    constructor(private service: SimpleCmsService) {
    }

    @Query()
    simpleContentBlocks(@Ctx() ctx: RequestContext): Promise<ContentBlock[]> {
        return this.service.findAll(ctx);
    }

    @Query()
    simpleContentBlock(@Ctx() ctx: RequestContext, @Args('id') id: string): Promise<ContentBlock | undefined> {
        return this.service.find(ctx, id);
    }

}