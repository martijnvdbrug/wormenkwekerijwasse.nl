import gql from 'graphql-tag';

export const SIMPLE_CONTENTBLOCK_FRAGMENT = gql`
    fragment SimpleContentBlockFragment on SimpleContentBlock {
        id
        createdAt
        updatedAt
        author
        title
        slug
        featuredImage
        description
        body
    }`;

export const CREATE_CONTENTBLOCK = gql`
    mutation createSimpleContentBlock($input: SimpleContentBlockInput!) {
        createSimpleContentBlock(input: $input) {
            ...SimpleContentBlockFragment
        }
    }
    ${SIMPLE_CONTENTBLOCK_FRAGMENT}
`;

export const GET_CONTENTBLOCK = gql`
    query simpleContentBlock($id: ID!) {
        simpleContentBlock(id: $id) {
            ...SimpleContentBlockFragment
        }
    }
    ${SIMPLE_CONTENTBLOCK_FRAGMENT}
`;

export const GET_CONTENTBLOCKS = gql`
    query simpleContentBlocks {
        simpleContentBlocks {
            ...SimpleContentBlockFragment
        }
    }
    ${SIMPLE_CONTENTBLOCK_FRAGMENT}
`;

export const UPDATE_CONTENTBLOCK = gql`
    mutation updateSimpleContentBlock($id: ID!, $input: SimpleContentBlockInput!) {
        updateSimpleContentBlock(id: $id, input: $input) {
            ...SimpleContentBlockFragment
        }
    }
    ${SIMPLE_CONTENTBLOCK_FRAGMENT}
`;

export const DELETE_CONTENTBLOCK = gql`
    mutation deleteSimpleContentBlock($id: ID!) {
        deleteSimpleContentBlock(id: $id)
    }
`;