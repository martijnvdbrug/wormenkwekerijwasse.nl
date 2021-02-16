// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer/lib/BundleAnalyzerPlugin');
const {setCalculatedFields, deduplicate} = require('./src/vendure/vendure');
const {productsQuery, collectionsQuery} = require('./src/vendure/server.queries');

module.exports = async function (api) {

    const categoryPrefix = 'product-categorie'
    const productPrefix = 'product'

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

        products = products.map(p => setCalculatedFields(p));
        products.map(p => p.soldOut = false); // For rendering nothing is soldOut
        products.reverse();
        const featuredProducts = products.filter(p => p.facetValues.find(facetValue => facetValue.name === 'featured'));

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

            const breadcrumb = [{name: 'Assortiment', slug: '/assortiment/'}];
            if (product.collections && product.collections[0]) {
                breadcrumb.push({name: product.collections[0].name, url: `/${categoryPrefix}/${product.collections[0].slug}/`})
            }
            breadcrumb.push({name: product.name, url: `/${product.slug}/`})

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

        /* -----------------  Category overview ---------------------------------------------------------------- */
        createPage({
            path: `/assortiment/`,
            component: './src/templates/CategoryOverview.vue',
            context: {
                products,
                collections
            }
        });

        /* -----------------  Category detail ---------------------------------------------------------------- */
        collections.forEach(collection => {
            let productsPerCollection = collection.productVariants.items.map(variant => variant.product);
            productsPerCollection = deduplicate(productsPerCollection);
            productsPerCollection = productsPerCollection.map(p => setCalculatedFields(p));
            delete collection.productVariants; // We don't need this in __initial_state__, saves some Kb data
            createPage({
                path: `/${categoryPrefix}/${collection.slug}/`,
                component: './src/templates/CategoryOverview.vue',
                context: {
                    products: productsPerCollection,
                    collection,
                }
            });
        });
    })


}
