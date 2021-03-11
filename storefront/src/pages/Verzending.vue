<template>
  <Layout>
    <ClientOnly>

      <div class="grid-x grid-margin-x">
        <div class="cell show-for-large large-2"></div>
        <div class="cell small-12 large-8">

          <div class="grid-x grid-padding-x">
            <div class="cell small-2" style="position: relative;">
              <g-link class="button" to="/gegevens/" style="position: absolute; bottom: 0; left: 0;">
                Terug
              </g-link>
            </div>
            <div class="cell small-10 text-right">
              <h1>Verzending</h1>
            </div>
          </div>

          <div class="grid-x grid-margin-x">
            <div class="cell">
              <div class="card shadowed article-card text-center" style="padding: 20px;">

                <div v-for="method in methods">
                  <label :for="method.id">
                    <input type="radio" name="shippingMethod" :value="method.id" :id="method.id"
                           v-on:change="select($event.target.value)"
                           v-model="currentlySelected"
                           :checked="selectedMethod.id === method.id">
                    {{ method.name }} ({{ method.priceWithTax | euro }})
                  </label>
                </div>

                <br>
                <br>

                <table style="text-align: right;">
                  <tr v-for="discount in activeOrder.discounts">
                    <td><h6>{{ discount.description }}</h6></td>
                    <td><h6>{{ discount.amount | euro }}</h6></td>
                  </tr>
                  <tr>
                    <td><p>Subtotaal: </p></td>
                    <td><p> {{ activeOrder.subTotalWithTax | euro }}</p></td>
                  </tr>
                  <tr>
                    <td><p>Verzendkosten: </p></td>
                    <td><p> {{ activeOrder.shippingWithTax | euro }}</p></td>
                  </tr>
                  <tr>
                    <td><p>Totaal: </p></td>
                    <td><p><strong>{{ activeOrder.totalWithTax | euro }}</strong></p></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <g-link class="button" to="/betaling/" :disabled="!hasSelected">
                        € Betalen
                      </g-link>
                    </td>
                  </tr>
                </table>

              </div>
            </div>
          </div>
          <div class="cell show-for-large large-2"></div>
        </div>
      </div>

    </ClientOnly>
  </Layout>
</template>
<script>


export default {
  mixins: [require('../mixins/load-foundation'), require('../mixins/empty-basket-validator')],
  data() {
    return {
      methods: [],
      currentlySelected: ''
    }
  },
  computed: {
    selectedMethod() {
      return this.$store?.activeOrder?.shippingLines?.[0]?.shippingMethod || {};
    },
    activeOrder() {
      return this.$store?.activeOrder || {};
    },
    hasSelected() {
      return !!this.currentlySelected
    }

  },
  methods: {
    async select(methodId) {
      await this.$vendure.setOrderShippingMethod(methodId);
    }
  },
  async mounted() {
    this.methods = await this.$vendure.getEligibleShippingMethods();
    const states = await this.$vendure.getNextOrderStates();
    if (states?.indexOf('AddingItems') > -1) {
      await this.$vendure.transitionOrderToState('AddingItems');
    }
  }
}
</script>