<template>
  <Layout>
    <ClientOnly>

      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
      <div id="mc_embed_signup">
        <form action="https://wormenkwekerijwasse.us1.list-manage.com/subscribe/post?u=53d72f8e65e2d0cb6c2ed2c3c&amp;id=a88584e992" method="post" id="mc-embedded-subscribe-form" target="_blank" name="mc-embedded-subscribe-form" class="validate" novalidate>
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Meld je aan voor de nieuwsbrief</label>
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email adres" v-model="emailAddress" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_53d72f8e65e2d0cb6c2ed2c3c_a88584e992" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Aanmelden" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color: #5FAD56;"></div>
          </div>
        </form>
      </div>

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

          <div class="cell small-12 large-8">

            <g-link to="/">Terug naar de winkel</g-link>

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
                    <td>{{ tax.taxRate }}% BTW</td>
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

        </div>
      </div>
    </ClientOnly>
  </Layout>
</template>
<script>
export default {
  // mixins: [require('../../mixins/load-foundation')],
  mixins: [require('../../mixins/empty-basket-validator')],
  data() {
    return {
      order: undefined,
      error: undefined,
      emailAddress: undefined
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
        this.emailAddress = this.order?.customer?.emailAddress;
        await new Promise(resolve => setTimeout(resolve, 1000));
        pollingCount++;
        console.log(`Polling for payment status ${pollingCount}`);
      }
    } catch (e) {
      console.error('Error getting order', e);
      this.error = e.message;
    }
  }
}
</script>