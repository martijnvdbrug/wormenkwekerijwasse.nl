// Remove child collections from toplevel
function getTopLevelCollections(collections) {
    const childCollectionIds = [];
    collections.forEach(col => {
        col.children.forEach(c => childCollectionIds.push(c.id))
    });
    return collections.filter(c => childCollectionIds.indexOf(c.id) === -1);
}

module.exports = {
    categoryPrefix: 'product-categorie',
    productPrefix: 'product',
    getTopLevelCollections
}