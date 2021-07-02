// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer/lib/BundleAnalyzerPlugin');
const {allBlogsQuery} = require('./src/vendure/server.queries');
const {categoryPrefix, productPrefix, getTopLevelCollections} = require('./src/util');
const {setCalculatedFields, deduplicate} = require('./src/vendure/vendure');
const {productsQuery, collectionsQuery, availableCountriesQuery} = require('./src/vendure/server.queries');

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

    api.chainWebpack(config => config.mode('development'));

    api.createPages(async ({createPage, graphql}) => {

        let [
            {data: {Vendure: {products: {items: products}}}},
            {data: {Vendure: {collections: {items: collections}}}},
            {data: {Vendure: {availableCountries}}},
            {data: {Vendure: {simpleContentBlocks}}}
        ] = await Promise.all([
            graphql(productsQuery),
            graphql(collectionsQuery),
            graphql(availableCountriesQuery),
            graphql(allBlogsQuery)
        ]);


        collections = getTopLevelCollections(collections);

        products = products.map(p => setCalculatedFields(p));
        products.map(p => p.soldOut = false); // For rendering nothing is soldOut
        products.reverse();
        const featuredProducts = products.filter(p => p.facetValues.find(facetValue => facetValue.name === 'featured')).slice(0,8);

        console.log(JSON.stringify(collections));

        /* -----------------  Home --------------------------------------------------------------------------- */
        createPage({
            path: `/`,
            component: './src/templates/Index.vue',
            context: {
                featuredProducts,
                collections,
                blogs: simpleContentBlocks.slice(0,2)
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

        /* --------------------- Customer details page ----------------------------*/
        createPage({
            path: `/gegevens/`,
            component: './src/templates/Gegevens.vue',
            context: {
                availableCountries
            }
        });

        /* --------------------- Articles ----------------------------*/
        createPage({
            path: `/informatie/`,
            component: './src/templates/Informatie.vue',
            context: {
                blogs: simpleContentBlocks
            }
        });

        const migratedComments = ['zieke_wormen_en_oplossingen', 'zieke_wormen_en_oplossingen', 'vrolijk_pasen_01', 'wormentoren_in_de_winter',
            'beestjes_in_de_wormenbak', '3_jarig_jubileum', 'compost_maken', 'plastic_in_koffiepads', 'groene_passie_beurs_2018', 'buxus_mot_bestrijden',
            'landleven', 'heermoes_verantwoordt_bestrijden', 'wormen_courant_q_1_2018', 'wormer_courant_q3_van_oktober', 'meelwormen', 'compostwormen_op_de_televisie',
            'baby_knoflook_oogst', 'wormencompost_vermicompost_wormenmest', 'vrolijk_pasen', 'wormen_kweken_78', 'een_axolotl_die_het_wormpje_wel_ziet_zitten',
            'wormen_viswormen_en_compostwormen_bewaren', 'viswormen_of_compostwormen_en_uitleg_verpakkings_keuze', 'wormen_in_de_zomer'
        ];

        simpleContentBlocks.forEach(blog => {

            let disqusSlug;
            const formatted = blog.slug.split('-').join('_');
            if (migratedComments.indexOf(formatted) > -1) {
                disqusSlug = formatted;
            }

            const breadcrumb = [
                {name: 'Advies & informatie', url: '/informatie/'},
                {name: blog.title , url: `/informatie/${blog.slug}` }
                ];
            createPage({
                path: `/informatie/${blog.slug}`,
                component: './src/templates/Artikel.vue',
                context: {
                    blog,
                    disqusSlug,
                    breadcrumb,
                    collections
                }
            });
        })

    })
}
