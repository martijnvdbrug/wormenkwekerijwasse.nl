import gql from 'graphql-tag';
import {simpleCmsSharedTypes} from './simple-cms.shared-types';

export const simpleCmsAdminSchema = gql`
    
    extend type Mutation {
        createSimpleContentBlock(input: SimpleContentBlockInput!): SimpleContentBlock!
        updateSimpleContentBlock(id: ID!, input: SimpleContentBlockInput!): SimpleContentBlock!
        deleteSimpleContentBlock(id: ID!): Boolean!
    }
    
    input SimpleContentBlockInput {
        title: String
        slug: String
        featuredImage: String
        description: String
        body: String
    }
    
    ${simpleCmsSharedTypes}
`;