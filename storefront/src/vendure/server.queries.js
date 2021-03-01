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
    collections {
      name
      slug
      parent {
        name
        slug
      }
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
    reviews {
      items {
        createdAt
        summary
        body
        rating
        authorName
        response
      }
      totalItems
      averageRating
    }
  }
}`;

const productsQuery = `{
    Vendure {
        products {
            items
            ${productFields}
        }
    }
}`;

const availableCountriesQuery = `{
    Vendure {
        availableCountries{
          name
          code
        }
    }
}`;

const allBlogsQuery = `{
    Vendure {
            simpleContentBlocks {
              id
              createdAt
              author
              title
              slug
              featuredImage
              description
              body
            }
    }
}`;

const collectionFields = `
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
                    }`;

const collectionsQuery = `
    {
        Vendure {
            collections {
                items {
                    ${collectionFields}
                    children {
                        ${collectionFields}
                    }
                }
            }
        }
    }
`;

module.exports = {
    productsQuery,
    productFields,
    collectionsQuery,
    availableCountriesQuery,
    allBlogsQuery
};