<template>
  <section id="product">

    <div class="grid-x small-up-1 medium-up-2 large-up-2 grid-padding-x grid-padding-y">
      <div class="cell">
        <AsyncImage :src="getPreview(asset)" :alt="$context.product.name" style="width: 100%;"></AsyncImage>
        <div v-if="assets && assets.length > 1" class="grid-x small-up-5" style="margin-right: -6px;">
          <div class="cell asset" v-for="asset of assets">
            <div class="product-thumbnail" v-on:click="selectAsset(asset)">
              <AsyncImage :src="getPreview(asset)" :alt="$context.product.name"></AsyncImage>
            </div>
          </div>
        </div>
      </div>

      <div class="cell product-details">
        <h1> {{ $context.product.name }}</h1>
        <h3>{{ this.selectedVariant.priceWithTax | euro }} </h3>
        <ClientOnly>
          <BuyButton ref="buyButton" :variant="this.selectedVariant"></BuyButton>
        </ClientOnly>
        <select v-if="$context.product.variants.length > 1" v-on:change="selectVariant($event.target.value)" aria-label="Selectable editions">
          <option v-for="variant of $context.product.variants" :value="variant.id"
                  :selected="selectedVariant.id === variant.id">
            {{ variant.name }}
          </option>
        </select>
        <div v-html="$context.product.description" class="product-description"></div>
      </div>

    </div>

  </section>
</template>

<script>
import AsyncImage from './AsyncImage';
import BuyButton from './BuyButton';
import HeaderCart from './CartIcon';
import {getMetaInfo} from '../seo-helpers';

export default {
  components: {
    AsyncImage,
    BuyButton,
    HeaderCart
  },
  metaInfo() {
    return getMetaInfo(this.$context.product);
  },
  data() {
    return {
      asset: {},
      assets: {},
      selectedVariant: {},
    }
  },
  methods: {
    getPreview(asset) {
      return asset?.preview
    },
    selectAsset: function (asset) {
      if (asset) {
        this.asset = asset;
      }
    },
    getDefaultAsset(product) {
      if (product.variant && product.variant.featuredAsset) {
        return product.variant.featuredAsset;
      }
      return product.featuredAsset;
    },
    getAssets(variant) {
      if (variant.assets && variant.assets.length >= 1) {
        return variant.assets.slice(0, 5);
      }
      return this.$context.product.assets.slice(0, 5);
    },
    selectVariant(variantId) {
      const newVariant = this.$context.product.variants.find(v => v.id === variantId);
      if (!newVariant) {
        return;
      }
      this.selectedVariant = newVariant;
      this.assets = this.getAssets(this.selectedVariant);
      this.selectAsset(this.assets?.[0])
    },
    load() { // Load variant, assets and selectedAsset
      const variant = this.$context.product.variants.find(v => v.available > 0) || this.$context.product.variants[0];
      this.selectVariant(variant.id);
      this.asset = this.selectedVariant.featuredAsset || this.getDefaultAsset(this.$context.product)
      this.assets = this.getAssets(this.selectedVariant);
    },
  },
  created() {
    this.load();
  },
  async mounted() {
    this.$context.product = await this.$vendure.getProduct(this.$context.product.slug);
    this.load();
  }
}
</script>
<style>
.product-details {
  font-size: 0.8rem;
}

.product-details h3 {
  margin-bottom: .9rem;
}

.product-description {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.asset {
  padding: 6px 6px 0 0;
}

.asset:hover {
  opacity: 0.3;
}

@media (hover: none) {
  .asset:hover {
    opacity: inherit;
  }
}
</style>