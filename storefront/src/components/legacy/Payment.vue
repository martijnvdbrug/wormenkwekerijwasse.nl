<template>
  <div>
    <p>Je wordt doorgestuurd naar het betaal platform...</p>

    <ClientOnly>
      <div class="alert" v-if="error" v-html="error"></div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: undefined
    }
  },
  async mounted() {
    const states = await this.$vendure.getNextOrderStates();
    if (states?.indexOf('ArrangingPayment') > -1) {
      await this.$vendure.transitionOrderToState('ArrangingPayment');
    }
    const order = await this.$vendure.addPaymentToOrder({method: 'mollie-payment-handler', metadata: {}}).catch(e => {
      this.error = e.message;
      console.error(e);
    });
    const latestPayment = order?.payments?.[order?.payments.length - 1];
    if (latestPayment?.metadata?.public?.redirectLink) {
      window.location.href = latestPayment.metadata.public.redirectLink;
    } else {
      this.error = order.errorCode;
      console.error('Error creating payment', this.error);
    }
  }
}
</script>