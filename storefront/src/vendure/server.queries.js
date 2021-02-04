const productFields = `
    {
        id
        name
        slug
        assets {
            preview
        }
        featuredAsset {
            id
            preview
        }
        facetValues {
            name
        }
        description
        variants {
            id
            name
            priceWithTax
            productId
            available
            assets {
                id
                preview
            }
            featuredAsset {
                id
                preview
            }
        }
    }
`;

const productsQuery = `{
    Vendure {
        products {
            items
            ${productFields}
        }
    }
}`;

const collectionsQuery = `
    {
        Vendure {
            collections {
                items {
                    id
                    name
                    slug
                    description
                    featuredAsset {
                        preview
                    }
                    productVariants {
                        items {
                          product ${productFields}
                        }
                      }
                }
            }
        }
    }
`;

module.exports = {
    productsQuery,
    productFields,
    collectionsQuery
};