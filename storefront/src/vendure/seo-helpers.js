/**
 * Removes all HTML tags from Vendure description and truncate to max 70 characters
 * @param str
 * @returns {string}
 */
function getSeoDescription(str) {
    if (!str) {
        return;
    }
    if (str.length > 70) {
        str = str.substring(0, 65) + '...';
    }
    str = str.replace(/<[^>]*>?/gm, ' '); // replace html
    str = str.replace(/&nbsp;/g, ' '); // replace &nbsp;
    return str.replace(/\s\s+/g, ' '); // repalce double spaces
}

function getMetaInfo(product) {
    if(!product) {
        return;
    }
    const seoDescription = getSeoDescription(product.description);
    const image = product.featuredAsset ? product.featuredAsset.preview : undefined;
    return {
        title: product.name,
        meta: [
            {name: 'description', content: seoDescription},
            {name: 'og:title', content: product.name},
            {name: 'og:description', content: seoDescription},
            {name: 'og:image', content: image},
        ],
        script: [{
            type: 'application/ld+json',
            json: {
                '@context': "http://schema.org",
                '@type': "Product",
                'name': "GIULIO VESPRINI - RESIST",
                'image': image,
                'description': seoDescription,
                'offers': {
                    '@type': "Offer",
                    'price': product.defaultPrice / 100,
                    'priceCurrency': 'EUR',
                }
            }
        }]
    }
}

module.exports = {
    getSeoDescription,
    getMetaInfo
}