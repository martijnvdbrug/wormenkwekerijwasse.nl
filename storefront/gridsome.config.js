// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Wormenkwekerij Wasse',
    siteUrl: 'https://wormenkwekerijwasse.nl',
    configureWebpack: {
        resolve: {
            symlinks: false //npm link
        },
    },
    plugins: [
        {
            use: '@gridsome/source-graphql',
            options: {
                url: process.env.GRIDSOME_VENDURE_API,
                fieldName: 'Vendure'
            }
        }, {
            use: '@gridsome/plugin-sitemap',
        },
    ],
}
