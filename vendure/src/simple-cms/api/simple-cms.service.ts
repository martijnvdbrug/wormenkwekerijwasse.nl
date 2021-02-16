import {Injectable} from '@nestjs/common';
import {AdministratorService, Allow, RequestContext, TransactionalConnection, UserService} from '@vendure/core';
import {ContentBlock} from './content-block';
import {Permission} from '@vendure/common/lib/generated-types';
import {ContentBlockInput} from './content-block.input';
import {Repository} from 'typeorm';

@Injectable()
export class SimpleCmsService {

    repo: Repository<ContentBlock>;

    constructor(private connection: TransactionalConnection, private adminService: AdministratorService) {
        this.repo = this.connection.getRepository(ContentBlock)
    }

    async find(ctx: RequestContext, id: string): Promise<ContentBlock | undefined> {
        return this.repo.findOne({id, channelId: ctx.channelId as string});
    }

    async findAll(ctx: RequestContext): Promise<ContentBlock[]> {
        return this.repo.find({channelId: ctx.channelId as string});
    }

    @Allow(Permission.UpdateCatalog)
    async create(ctx: RequestContext, input: ContentBlockInput): Promise<ContentBlock> {
        const admin = await this.adminService.findOneByUserId(ctx, ctx.activeUserId!);
        const authorName = `${admin?.firstName} ${admin?.lastName}`;
        return this.repo.save({
            ...input,
            author: authorName,
            authorId: admin?.id as string,
            channelId: ctx.channelId as string
        });
    }

    @Allow(Permission.UpdateCatalog)
    async update(ctx: RequestContext, id: string, input: ContentBlockInput): Promise<ContentBlock> {
        await this.repo.findOneOrFail({id, channelId: ctx.channelId as string});
        await this.repo.save({
            ...input,
            id
        });
        return (await this.find(ctx, id))!;
    }

    @Allow(Permission.DeleteCatalog)
    async delete(ctx: RequestContext, id: string): Promise<boolean> {
        const block = await this.find(ctx, id);
        if (!block) {
            return false;
        }
        await this.repo.remove(block);
        return true;
    }

}