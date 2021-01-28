<template>
  <section v-else id="products">

    <!-- Show available collections -->
    <div v-if="$context.collections || $context.collectionName" class="grid-x grid-padding-x">
      <div class="cell text-center">
        <g-link v-for="collection in $context.collections"
                class="button tiny hollow" style="margin-right: 2px; margin-left: 2px;"
                v-bind:key="collection.id"
                :to="`/${collection.slug}/`">{{ collection.name }}
        </g-link>
      </div>
    </div>

    <!-- Single collection header-->
    <div v-if="$context.collection" class="grid-x grid-padding-x">
      <div class="cell text-center">
        <h1>{{ $context.collection.name }}</h1>
        <div style="margin-bottom: 20px;font-size: .7rem;" v-if="$context.collection.description"
             v-html="$context.collection.description">
        </div>
      </div>
    </div>

    <div class="grid-x grid-padding-x small-up-2 medium-up-4 large-up-4">

      <div
          v-for="product in $context.products"
          v-bind:key="product.id"
          class="cell">
        <g-link :to="`/product/${product.slug}/`">
          <div class="product-thumbnail">
            <AsyncImage :src="getAsset(product)" :alt="product.name"></AsyncImage>
          </div>
          <div class="product-overview-description">
            <ClientOnly>
              <p v-if="product.soldOut" class="product-overview-price">SOLD OUT</p>
              <p v-if="!product.soldOut" class="product-overview-price">{{ product.defaultPrice | euro }}</p>
            </ClientOnly>
            <p :class="product.soldOut ? 'sold-out' : ''">{{ product.name }}</p>
          </div>
        </g-link>
      </div>
      <div v-if="$context.products && $context.products.length === 0" class="small-12">
        Hier zijn nog geen producten helaas...
      </div>

    </div>

  </section>
</template>
<style scoped>
a {
  color: inherit;
}
</style>
<script>
import AsyncImage from './AsyncImage';

export default {
  components: {
    AsyncImage
  },
  methods: {
    getAsset(product) {
      return product.featuredAsset?.preview
    }
  },
  async mounted() {
    const products = await this.$vendure.getStockForProducts();
    // Rehydrate products.soldOut
    this.$context.products.forEach(p => {
      const hydratedProd = products.find(hp => hp.id === p.id);
      if (hydratedProd) {
        p.soldOut = hydratedProd.soldOut
      }
    });
  }
}
</script>