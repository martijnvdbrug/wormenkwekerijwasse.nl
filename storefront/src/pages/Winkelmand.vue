<template>
  <Layout>
    <ClientOnly>

      <div class="grid-x grid-margin-x">
        <div class="cell show-for-large large-3"></div>
        <div class="cell small-12 large-6">


          <div class="grid-x grid-padding-x text-right">
            <div class="cell text-right">
              <g-link class="button" to="/gegevens/">
                Bestellen
              </g-link>
            </div>
          </div>

          <div class="grid-x grid-margin-x">

            <div class="cell">
              <div class="card shadowed article-card">
                <div class="card-divider">
                  <h4>Dit zit er in je winkelmand:</h4>
                </div>

                <div class="card-section" v-if="orderLines > 0">

                  <div class="grid-x grid-padding-x text-right">
                    <div class="cell text-right">
                      <p>Totaal: <strong> {{ activeOrder.totalWithTax | euro }}</strong></p>
                    </div>
                  </div>

                  <table>
                    <tr v-for="line in activeOrder.lines">
<!--                      <th>
                          <img :src="getPreview(line.featuredAsset)" :alt="line.productVariant.name">
                      </th>-->
                      <th><p>{{ line.productVariant.product.name }} <span v-if="line.productVariant.name !== line.productVariant.product.name"> {{ line.productVariant.name }}&nbsp;</span> </p></th>
                      <th>{{ line.productVariant.priceWithTax | euro }}</th>
                      <th>{{ line.quantity }}</th>
                    </tr>


                    <!--                    <p>{{ line.productVariant.product.name }} </p>
                                        <span v-if="line.productVariant.name !== line.productVariant.product.name"> {{ line.productVariant.name }}&nbsp;</span>
                                        <span class="cart-price">{{ line.productVariant.priceWithTax | euro }}</span>-->

                  </table>


                  <div class="grid-x grid-padding-x text-right">
                    <div class="cell text-right">
                      <g-link class="button" to="/gegevens/">
                        Bestellen
                      </g-link>
                    </div>
                  </div>

                </div>

                <div class="card-section" v-if="emptyBasket">
                  <p>Je hebt nog niks in je winkelmand...</p>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div class="cell show-for-large large-3"></div>
      </div>


      <!--<div>


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
              <g-link class="button" to="/gegevens/">
                Bestellen
              </g-link>
            </div>
          </div>

        </div>
        <div v-if="emptyBasket">
          <div class="grid-x small-up-1grid-padding-x text-center small-font">
            <div class="cell">
              <p>Je hebt nog niks in je winkelmand...</p>
            </div>
          </div>
        </div>
      </div>-->


    </ClientOnly>
  </Layout>
</template>

<script>
import NumberInput from '../components/NumberInput';

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