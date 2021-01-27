const BundleAnalyzerPlugin = require('webpack-bundle-analyzer/lib/BundleAnalyzerPlugin');
// Server api makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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

    api.createPages(async ({createPage, graphql}) => {
        // await config.createPages(createPage, graphql);
    })

    /*    api.chainWebpack(config => {
            config
                .plugin('BundleAnalyzerPlugin')
                .use(BundleAnalyzerPlugin, [{analyzerMode: 'static'}])
        })*/

}
