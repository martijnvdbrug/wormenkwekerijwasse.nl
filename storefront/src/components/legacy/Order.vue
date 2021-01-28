<template>
  <ClientOnly>
    <div>
      <g-link to="/">Terug naar de winkel</g-link>
      <br>
      <br>
      <div v-if="!order && !error">
        <h1>Even geduld...</h1>
        <p>Je betaling wordt verwerkt</p>
      </div>

      <div v-if="error">
        <h1>Er is iets misgegaan</h1>
        <p class="error">{{ error }}</p>
      </div>

      <div v-if="order && !error">
        <h1>Bedankt!</h1>
        <p>Dit heb je besteld:</p>

        <div class="table-scroll">
          <table class="unstriped hover" style="font-size: 0.7rem;">
            <thead>
            <tr>
              <th>Product</th>
              <th>Aantal</th>
              <th>Totaal</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="line in order.lines">
              <td>{{ line.productVariant.product.name }}</td>
              <td>{{ line.quantity }}</td>
              <td>{{ line.linePriceWithTax | euro }}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Verzendkosten:</td>
              <td></td>
              <td>{{ order.shippingWithTax | euro }}</td>
            </tr>
            <tr>
              <td>Totaal:</td>
              <td></td>
              <td>{{ order.totalWithTax | euro }}</td>
            </tr>
            </tbody>
          </table>
          <p>Je ontvangt een bevestiging in de mail.</p>
        </div>

      </div>
    </div>
  </ClientOnly>
</template>
<style>
.error {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: red;
}
</style>
<script>
export default {
  data() {
    return {
      order: undefined,
      error: undefined
    }
  },
  async mounted() {
    const {code} = this.$route.params
    let pollingCount = 0;
    try {
      while (this.order?.state !== 'PaymentSettled') {
        if (pollingCount > 10) {
          this.error = 'Er is iets misgegaan, neem contact met ons op.';
          break;
        }
        this.order = await this.$vendure.getOrderByCode(code);
        await new Promise(resolve => setTimeout(resolve, 1000));
        pollingCount++;
        console.log(`Polling for payment status ${pollingCount}`);
      }
    } catch (e) {
      console.log(e);
      this.error = e.message;
    }
  }
}
</script>