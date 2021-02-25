<template>
  <Layout>
    <ClientOnly>
      <div>
        <div v-if="!order && !error">
          <h1>Even geduld...</h1>
          <p>Je betaling wordt verwerkt</p>
        </div>

        <div v-if="error">
          <h1>Er is iets misgegaan</h1>
          <p class="error">{{ error }}</p>
        </div>

        <div v-if="order && !error">

          <div class="grid-x grid-margin-x">
            <div class="cell show-for-large large-2"></div>
            <div class="cell small-12 large-8">

              <h1>Bedankt!</h1>
              <p>Dit heeft u besteld:</p>

              <div class="card shadowed" style="padding: 20px;">
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
                    <tr v-for="discount in order.discounts">
                      <td></td>
                      <td></td>
                      <td><h6>{{ discount.description }}</h6></td>
                      <td><h6>{{ discount.amount | euro }}</h6></td>
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
                    <tr v-for="tax of order.taxSummary" style="color: gray;">
                      <td>{{ tax.taxRate }}% BTW </td>
                      <td></td>
                      <td>{{ tax.taxTotal | euro }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>Je ontvangt een bevestiging in de mail.</p>
              <g-link to="/">Terug naar de winkel</g-link>

            </div>
            <div class="cell show-for-large large-2"></div>
          </div>


        </div>
      </div>
    </ClientOnly>
  </Layout>
</template>
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
        console.log(this.order?.state);
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