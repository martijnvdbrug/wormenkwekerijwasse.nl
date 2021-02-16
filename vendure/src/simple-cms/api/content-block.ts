import {Column, Entity} from 'typeorm';
import {DeepPartial, VendureEntity} from '@vendure/core';

@Entity()
export class ContentBlock extends VendureEntity {

    /**
     * Store a channelId instead of a relation to keep the main vendure DB schema seperate from plugin schema
     */
    @Column({nullable: false})
    channelId!: string;
    @Column({nullable: true})
    author?: string
    @Column()
    authorId?: string
    @Column()
    title!: string
    @Column()
    slug!: string
    @Column({nullable: true})
    featuredImage?: string
    @Column({nullable: true})
    featuredImageId?: string
    @Column()
    body!: string
    @Column()
    description!: string

    constructor(input?: DeepPartial<ContentBlock>) {
        super(input);
    }
}