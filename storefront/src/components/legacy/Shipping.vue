<template>
  <div>
    <h1>Verzending</h1>

    <div class="grid-x grid-padding-x grid-padding-y small-font">

      <fieldset class="cell small-12">
        <div v-for="method in methods">

          <label :for="method.id" class="small-font">
            <input type="radio" name="shippingMethod" :value="method.id" :id="method.id"
                   v-on:change="select($event.target.value)"
                   :checked="selectedMethod.id === method.id">
            {{ method.name }} ({{ method.priceWithTax | euro }})
          </label>
        </div>
      </fieldset>

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
        <g-link class="button" to="/payment/">
          € BETALEN
        </g-link>
      </div>
    </div>

  </div>
</template>
<script>


export default {
  data() {
    return {
      methods: []
    }
  },
  computed: {
    selectedMethod(){
      return this.$store?.activeOrder?.shippingLines?.[0]?.shippingMethod || {};
    },
    activeOrder() {
      return this.$store?.activeOrder || {};
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