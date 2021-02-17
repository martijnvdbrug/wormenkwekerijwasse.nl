// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer/lib/BundleAnalyzerPlugin');
const {categoryPrefix, productPrefix, getTopLevelCollections} = require('./src/util');
const {setCalculatedFields, deduplicate} = require('./src/vendure/vendure');
const {productsQuery, collectionsQuery} = require('./src/vendure/server.queries');

module.exports = async function (api) {

    api.afterBuild(({redirects}) => {
        console.log('------ Create the following redirects in static/_redirects!');
        for (const rule of redirects) {
            console.log(`${rule.from} ${rule.to}`);
            // rule.from   - The dynamic path
            // rule.to     - The HTML file path
            // rule.status - 200 if rewrite rule
        }
    });

    /*    api.chainWebpack(config => {
        config
            .plugin('BundleAnalyzerPlugin')
            .use(BundleAnalyzerPlugin, [{analyzerMode: 'static'}])
    })*/

    api.createPages(async ({createPage, graphql}) => {
        let [
            {data: {Vendure: {products: {items: products}}}},
            {data: {Vendure: {collections: {items: collections}}}}
        ] = await Promise.all([
            graphql(productsQuery),
            graphql(collectionsQuery)
        ]);

        collections = getTopLevelCollections(collections);

        products = products.map(p => setCalculatedFields(p));
        products.map(p => p.soldOut = false); // For rendering nothing is soldOut
        products.reverse();
        const featuredProducts = products.filter(p => p.facetValues.find(facetValue => facetValue.name === 'featured')).slice(0,8);

        /* -----------------  Home --------------------------------------------------------------------------- */
        createPage({
            path: `/`,
            component: './src/templates/Index.vue',
            context: {
                featuredProducts,
                collections
            }
        });

        /* -----------------  Product detail ---------------------------------------------------------------- */
        products.forEach((product) => {

            const breadcrumb = [{name: 'Assortiment', url: '/assortiment/'}];
            if (product.collections && product.collections[0]) {
                // Add parent > child collection to breadcrumb
                if (product.collections[0].parent && product.collections[0].parent.name !== '__root_collection__') {
                    breadcrumb.push({name: product.collections[0].parent.name, url: `/${categoryPrefix}/${product.collections[0].parent.slug}/`})
                }
                breadcrumb.push({name: product.collections[0].name, url: `/${categoryPrefix}/${product.collections[0].slug}/`})
            }
            breadcrumb.push({name: product.name, url: `/${productPrefix}/${product.slug}/`})

            createPage({
                path: `/${productPrefix}/${product.slug}/`,
                component: './src/templates/ProductDetail.vue',
                context: {
                    product,
                    breadcrumb,
                    featuredProducts,
                }
            })
        });

        /* -----------------  Assortiment ---------------------------------------------------------------- */
        createPage({
            path: `/assortiment/`,
            component: './src/templates/CategoryOverview.vue',
            context: {
                featuredProducts,
                collections
            }
        });

        /* -----------------  Category detail (sub and top level categories) ---------------------------------------------------------------- */
        collections.forEach(collection => {

            let productsPerCollection = [];
            if (collection.children && collection.children.length > 0) {
                // Set all variants of childCategories
                collection.children.forEach(childCollection => {
                    productsPerCollection.push(...childCollection.productVariants.items.map(variant => variant.product));
                })
            } else {
                productsPerCollection = collection.productVariants.items.map(variant => variant.product);
            }

            productsPerCollection = deduplicate(productsPerCollection);
            productsPerCollection = productsPerCollection.map(p => setCalculatedFields(p));

            const breadcrumb = [{name: 'Assortiment', url: '/assortiment/'}];
            breadcrumb.push({name:collection.name, url: `/${categoryPrefix}/${collection.slug}/`});

            delete collection.productVariants; // We don't need this in __initial_state__, saves some Kb data
            createPage({
                path: `/${categoryPrefix}/${collection.slug}/`,
                component: './src/templates/Category.vue',
                context: {
                    products: productsPerCollection,
                    collection,
                    breadcrumb
                }
            });

            /* -------------------------------- Child categories -------------------------------- */
            collection.children.forEach( childCollection => {

                const childBreadcrumb = [{name: 'Assortiment', url: '/assortiment/'}];
                childBreadcrumb.push({name:collection.name, url: `/${categoryPrefix}/${collection.slug}/`});
                childBreadcrumb.push({name:childCollection.name, url: `/${categoryPrefix}/${childCollection.slug}/`});

                let childProducts = childCollection.productVariants.items.map(variant => variant.product);
                childProducts = deduplicate(childProducts);
                childProducts = childProducts.map(p => setCalculatedFields(p));

                createPage({
                    path: `/${categoryPrefix}/${childCollection.slug}/`,
                    component: './src/templates/Category.vue',
                    context: {
                        products: childProducts,
                        collection: childCollection,
                        breadcrumb: childBreadcrumb
                    }
                });
            });
        });
    })


}
