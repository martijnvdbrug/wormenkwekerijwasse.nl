<template>
  <Layout>

    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell small-12 large-8">

        <div class="card shadowed article-card">
          <div class="card-section">
            <h1> {{ $context.product.name }} </h1>
          </div>

          <div class="card-section">

            <div class="grid-x grid-margin-x">

              <div class="cell small-12 medium-6 margin-bottom-2">
                <AsyncImage :src="getPreview(asset)" :alt="$context.product.name" style="width: 100%; height: 400px;"/>
                <div v-if="assets && assets.length > 1" class="grid-x small-up-5" style="margin-right: -6px;">
                  <div class="cell asset" v-for="asset of assets">
                    <div class="product-thumbnail" v-on:click="selectAsset(asset)">
                      <AsyncImage :src="getPreview(asset)" :alt="$context.product.name"></AsyncImage>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell small-12 medium-6 margin-bottom-2">
                <h3>{{ this.selectedVariant.priceWithTax | euro }} </h3>
                <ClientOnly>
                  <BuyButton ref="buyButton" :variant="this.selectedVariant"></BuyButton>
                </ClientOnly>
                <select v-if="$context.product.variants.length > 1" v-on:change="selectVariant($event.target.value)"
                        aria-label="Selectable editions">
                  <option v-for="variant of $context.product.variants" :value="variant.id"
                          :selected="selectedVariant.id === variant.id">
                    {{ variant.name }}
                  </option>
                </select>
                <div v-html="$context.product.description" class="product-description"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="cell large-4">

        <!-- Review summary -->
        <div class="card shadowed article-card">
          <div class="card-section">
            <div>
              <h2> Reviews </h2>
              <ShowStarRating :rating="rating" :nr-of-reviews="nrOfReviews"/>
            </div>
            <div v-for="review of reviewPreviews" class="review-preview">
              <p class="review-subtitle">
                {{ review.createdAt | date }} door {{ review.authorName }}
              </p>
              <MiniShowStarRating :rating="review.rating"/>
              <p>{{ review.summary }}</p>
            </div>
            <a href="#all-reviews">Meer reviews...</a>
          </div>

          <div class="card-section">
            <h4>Wat vind u van dit product?</h4>
            <SubmitReviewComponent :product-id="$context.product.id"/>
          </div>
        </div>

      </div>
    </div>

    <!-- Featured products -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell"><br><br><h5>Anderen kochten ook:</h5></div>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

      <div v-for="product of products" class="cell">
        <Card
            :img="getPreview(product.featuredAsset)"
            :img-alt="product.name"
            :link-to="`/${productPrefix}/${product.slug}/`"
            :title="product.name"
            :price="product.defaultPrice"
        ></Card>
      </div>
    </div>

    <!-- All reviews -->
    <div id="all-reviews" class="grid-x grid-margin-x grid-margin-y">
      <div class="cell"><br><br><h5>Alle reviews:</h5></div>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell">
        <div class="card shadowed article-card">
          <div class="card-section">
            <p>Hier zijn binnekort alle reviews te lezen</p>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
import {getMetaInfo} from '../seo-helpers';
import {productPrefix} from '../util';
import SubmitReviewComponent from '../components/SubmitReviewComponent';
import ShowStarRating from '../components/ShowStarRating';
import MiniShowStarRating from '../components/MiniShowStarRating';

export default {
  // Foundation is loaded in child component BuyButton
  components: {MiniShowStarRating, ShowStarRating, SubmitReviewComponent},
  metaInfo() {
    return getMetaInfo(this.$context.product);
  },
  computed: {
    nrOfReviews() {
      return this.$context.product?.reviewsHistogram?.[0]?.frequency || 0
    },
    rating() {
      return this.$context.product?.reviewsHistogram?.[0]?.bin || 0
    },
    reviewPreviews() {
      return this.$context?.reviews?.slice(0,2) || []
    }
  },
  data() {
    return {
      asset: {},
      assets: {},
      selectedVariant: {},
      products: [],
      productPrefix
    }
  },
  watch: {
    '$route'() {
      // Vue component not always re-mounted
      this.load();
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
      this.selectVariant(variant?.id);
      this.asset = this.selectedVariant.featuredAsset || this.getDefaultAsset(this.$context.product)
      this.assets = this.getAssets(this.selectedVariant);
    },
  },
  created() {
    this.load();
    this.products = this.$context.featuredProducts?.slice(0, 8) || [];
  },
  async mounted() {
    this.$context.product = await this.$vendure.getProduct(this.$context.product.slug);
    this.load();
  }
}
</script>
<style>
.review-preview {
  font-size: 0.8rem;
}
.review-subtitle {
  color: gray;
  padding-top: 10px;
  margin-bottom: 0;
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

.product-thumbnail {
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  height: 0;
  overflow: hidden;
}

.product-thumbnail img {
  display: table-cell;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>