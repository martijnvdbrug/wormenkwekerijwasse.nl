<template>
  <Layout>

    <!-- All categories -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell">
        <h1>Assortiment</h1>
        <p> Kies een categorie hieronder: </p>
      </div>
    </div>

    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

      <div v-for="collection of $context.collections" class="cell">
        <Card
            :img="asset(collection)"
            :img-alt="collection.name"
            :link-to="`/${categoryPrefix}/${collection.slug}/`"
            :title="collection.name"
        ></Card>
      </div>

    </div>

    <!-- Featured products -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell">
        <h5>Populaire producten</h5>
        <p>Bekijk direct een van onze populaire producten: </p>
      </div>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

      <div v-for="product of $context.featuredProducts" class="cell">
        <Card
            :img="asset(product)"
            :img-alt="product.name"
            :link-to="`/${productPrefix}/${product.slug}/`"
            :title="product.name"
            :price="product.defaultPrice"
        ></Card>
      </div>

    </div>

  </Layout>
</template>

<script>

import {categoryPrefix, productPrefix} from '../util';

export default {
  mixins: [require('../mixins/load-foundation')],
  components: {},
  data() {
    return {productPrefix, categoryPrefix}
  },
  methods: {
    asset(assetHolder) {
      return assetHolder?.featuredAsset?.preview;
    }
  },
}
</script>