<template>
  <Layout>
    <ClientOnly>


        <div class="grid-x grid-padding-x">
          <div class="cell small-10 text-left">
            <h1>Dit zit er in je winkelmand:</h1>
          </div>
          <div class="cell small-2" style="position: relative;">
            <g-link v-if="orderLines > 0" class="button" to="/gegevens/" style="position: absolute; bottom: 0; right: 0;">
              Bestellen
            </g-link>
          </div>
        </div>

        <div class="grid-x grid-margin-x">

          <div class="cell">
            <div class="card shadowed">

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
                    <td class="hide-image">
                      <img class="cart-thumbnail" :src="getPreview(line.featuredAsset)"
                           :alt="line.productVariant.name">
                    </td>
                    <td>{{ line.productVariant.product.name }}
                      <span v-if="line.productVariant.name !== line.productVariant.product.name"
                            class="cart-variant"><br> {{
                          line.productVariant.name
                        }}&nbsp;</span>
                    </td>
                    <td>
                      <NumberInput :value="line.quantity" v-on:numberChange="updateQuantity(line.id, $event)"/>
                    </td>
                    <td><p>{{ line.linePriceWithTax | euro }}</p></td>
                    <td><a v-on:click="updateQuantity(line.id, 0)"><i class="fi-x"></i></a></td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr v-for="discount in activeOrder.discounts">
                    <td></td>
                    <td></td>
                    <td><h6>{{ discount.description }}</h6></td>
                    <td><h6>{{ discount.amount | euro }}</h6></td>
                  </tr>
                  <tr>
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
                  <tr v-for="tax of activeOrder.taxSummary" style="color: gray;">
                    <td></td>
                    <td></td>
                    <td><p>{{ tax.taxRate }}% BTW </p></td>
                    <td><p> {{ tax.taxTotal | euro }}</p></td>
                  </tr>
                </table>

                <p style="color: gray; font-size: 0.9rem;">Verzendkosten worden in de volgende stap verrekend</p>

                <div class="grid-x grid-padding-x text-right">
                  <div class="cell text-right">
                    <g-link class="button" to="/gegevens/">
                      Bestellen
                    </g-link>
                  </div>
                </div>

              </div>

              <div class="card-section" v-if="!orderLines">
                <p>U hebt nog niks in uw winkelmand...</p>
              </div>

            </div>

          </div>
        </div>

    </ClientOnly>
  </Layout>
</template>

<script>
import NumberInput from '../components/NumberInput';

export default {
  mixins: [require('../mixins/load-foundation')],
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
    }
  }
}
</script>
<style>
.cart-thumbnail {
  height: 60px;
  width: 60px;
  min-width: 60px;
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