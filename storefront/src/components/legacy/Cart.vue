<template>
  <ClientOnly>
    <div>
      <div v-if="orderLines > 0">
        <div class="grid-x small-up-2 medium-up-2 large-up-2 grid-padding-x text-right small-font">
          <div class="cell">
            <p>Totaal: </p>
          </div>
          <div class="cell">
            <strong> {{ activeOrder.totalWithTax | euro }}</strong>
          </div>
        </div>

        <div v-for="(line, i) in activeOrder.lines" class="grid-x small-font"
             :class="i % 2 === 0 ? 'accent-row' : ''"
             style="padding: 10px;">
          <div class="cell small-4 medium-3 large-2">
            <div class="product-thumbnail">
              <img :src="getPreview(line.featuredAsset)" :alt="line.productVariant.name">
            </div>
          </div>
          <div class="cell small-8 medium-9 large-10 text-right cart-details">
            <p class="cart-name">{{ line.productVariant.product.name }} </p>
            <span v-if="line.productVariant.name !== line.productVariant.product.name"> {{ line.productVariant.name }}&nbsp;</span>
            <span class="cart-price">{{ line.productVariant.priceWithTax | euro }}</span>
            <NumberInput :value="line.quantity" v-on:numberChange="updateQuantity(line.id, $event)"/>
          </div>
        </div>

        <div class="grid-x small-up-2 medium-up-2 large-up-2 grid-padding-x text-right small-font"
             style="padding-top: 40px;">
          <div class="cell">
            <p>Subtotaal: </p>
          </div>
          <div class="cell">
            <p> {{ activeOrder.subTotalWithTax | euro }}</p>
          </div>
          <div class="cell">
            <p>Verzendkosten: </p>
          </div>
          <div class="cell">
            <p> {{ activeOrder.shippingWithTax | euro }}</p>
          </div>
          <div class="cell">
            <p>Totaal: </p>
          </div>
          <div class="cell">
            <strong> {{ activeOrder.totalWithTax | euro }}</strong>
          </div>
          <div class="cell"></div>
          <div class="cell">
            <g-link class="button" to="/customer-details/">
              BESTEL
            </g-link>
          </div>
        </div>

      </div>
      <div v-if="emptyBasket">
        <div class="grid-x small-up-1grid-padding-x text-center small-font">
          <div class="cell">
            <p>Je hebt nog niks in je winkelmand...</p>
            <img src="https://storage.googleapis.com/pinelab-shops-assets/angular-assets/mand.jpg" alt="Korter">
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script>
import NumberInput from './NumberInput';

export default {
  components: {
    NumberInput
  },
  methods: {
    getPreview(asset) {
      return asset?.preview
    },
    updateQuantity(lineId, q) {
      this.$vendure.adjustOrderLine(lineId, q);
    }
  },
  async mounted() {
    await this.$vendure.getActiveOrder();
  },
  computed: {
    activeOrder() {
      return this.$store?.activeOrder || {}
    },
    orderLines() {
      return this.activeOrder?.lines?.length;
    },
    emptyBasket() {
      // Only return true if we have an activeOrder, but it has no lines
      return !!(this.$store?.activeOrder && !this.orderLines);
    }
  }
}
</script>