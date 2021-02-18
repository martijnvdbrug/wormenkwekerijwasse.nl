<template>
  <Layout>
    <ClientOnly>

      <div class="grid-x grid-margin-x">
        <div class="cell show-for-large large-2"></div>
        <div class="cell small-12 large-8">

          <div class="grid-x grid-padding-x">
            <div class="cell small-10 text-left">
              <h1>Dit zit er in je winkelmand:</h1>
            </div>
            <div class="cell small-2" style="position: relative;">
              <g-link class="button" to="/gegevens/" style="position: absolute; bottom: 0; right: 0;">
                Bestellen
              </g-link>
            </div>
          </div>

          <div class="grid-x grid-margin-x">

            <div class="cell">
              <div class="card shadowed article-card">

                <div class="card-section" v-if="orderLines > 0">

                  <div class="grid-x grid-padding-x text-right">
                    <div class="cell text-right">
                      <p>Totaal: <strong> {{ activeOrder.totalWithTax | euro }}</strong></p>
                    </div>
                  </div>

                  <br>

                  <table>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Aantal</th>
                      <th>Totaalprijs</th>
                    </tr>
                    <tr v-for="line in activeOrder.lines" style="padding-bottom: 10px;">
                      <td>
                        <img class="cart-thumbnail" :src="getPreview(line.featuredAsset)"
                             :alt="line.productVariant.name">
                      </td>
                      <td>{{ line.productVariant.product.name }}
                        <span v-if="line.productVariant.name !== line.productVariant.product.name" class="cart-variant"><br> {{
                            line.productVariant.name
                          }}&nbsp;</span>
                      </td>
                      <td>
                        <NumberInput :value="line.quantity" v-on:numberChange="updateQuantity(line.id, $event)"/>
                      </td>
                      <td>{{ line.linePriceWithTax | euro }}</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                    <tr style="padding-top: 30px;">
                      <td></td>
                      <td></td>
                      <td><p>Verzendkosten: </p></td>
                      <td><p> {{ activeOrder.shippingWithTax | euro }}</p></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td><p>Totaal: </p></td>
                      <td><p><strong> {{ activeOrder.totalWithTax | euro }}</strong></p></td>
                    </tr>
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
        <div class="cell show-for-large large-2"></div>
      </div>
    </ClientOnly>
  </Layout>
</template>

<script>
import NumberInput from '../components/NumberInput';

export default {
  components: {NumberInput},
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
<style>
.cart-thumbnail {
  height: 60px;
  padding-bottom: 10px;
  padding-top: 10px;
}

.cart-variant {
  color: gray;
}
th {
  text-align: left;
}
</style>