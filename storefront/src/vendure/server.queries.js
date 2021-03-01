const allProductFields = `
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
      options {
        id
        groupId
      }
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
    optionGroups {
      id
      name
      options {
        id
        name
      }
    }
  }`;

const minimalProductFields = `{
      id
      name
      slug
      featuredAsset {
        id
        preview
      }
      description
      variants {
        id
        name
        priceWithTax
        productId
        featuredAsset {
          id
          preview
        }
      }
}`

const productsQuery = `{
    Vendure {
        products {
            items
            ${allProductFields}
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
                          product ${minimalProductFields}
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
    productFields: allProductFields,
    collectionsQuery,
    availableCountriesQuery,
    allBlogsQuery
};