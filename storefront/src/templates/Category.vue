<template>
  <Layout>
    <!-- All categories -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell">
        <h1>{{ $context.collection.name }}</h1>
        <div v-html="$context.collection.description"></div>
      </div>
    </div>

    <div v-if="hasChildren()">
      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell">
          <h5> Dit zijn de subcategorieën in {{ $context.collection.name }}</h5>
        </div>
      </div>

      <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

        <div v-for="collection of $context.collection.children" class="cell">
          <Card
              :img="asset(collection)"
              :img-alt="collection.name"
              :link-to="`/${categoryPrefix}/${collection.slug}/`"
              :title="collection.name"
          ></Card>
        </div>

      </div>
    </div>

    <!-- Featured products -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell">
        <h5>Dit zijn onze producten in de categorie {{ $context.collection.name }}</h5>
      </div>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

      <div v-for="product of $context.products" class="cell">
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
import {getSeoDescription} from '../seo-helpers';

export default {
  mixins: [require('../mixins/load-foundation')],
  metaInfo() {
    const seoDescription = getSeoDescription(this.$context.collection.description);
    return {
      title: this.$context.collection.name,
      meta: [
        {name: 'description', content: seoDescription},
        {name: 'og:title', content: this.$context.collection.name},
        {name: 'og:description', content: seoDescription},
        {name: 'og:image', content: this.$context.collection.featuredAsset?.preview || '/logo-wormenkwekerijwasse.png'},
      ],
    }
  },
  components: {},
  data() {
    return {productPrefix, categoryPrefix}
  },
  methods: {
    asset(assetHolder) {
      return assetHolder?.featuredAsset?.preview;
    },
    hasChildren() {
      return this.$context.collection.children?.length > 0;
    }
  }
}
</script>