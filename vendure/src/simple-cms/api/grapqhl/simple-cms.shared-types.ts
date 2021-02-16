import gql from 'graphql-tag';

export const simpleCmsSharedTypes = gql`

    extend type Query {
        "Simple CMS posts ordered by createdAt Desc"
        simpleContentBlocks: [SimpleContentBlock!]
        "Get a single content block"
        simpleContentBlock(id: ID!): SimpleContentBlock
    }
    
    "Represents a piece of content. Can be used as (Blog)Post, or as page section"
    type SimpleContentBlock {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        author: String
        title: String!
        slug: String!
        featuredImage: String
        description: String
        body: String!
    }`;
