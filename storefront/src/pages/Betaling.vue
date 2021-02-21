<template>
  <Layout>
    <div class="text-center">
      <p v-if="!error">Je wordt doorgestuurd naar het betaal platform...</p>
      <ClientOnly>
        <div v-if="error" class="alert">
          <p>Er is iets misgegaan, neem contact met ons op</p>
          <div v-html="error"></div>
        </div>
      </ClientOnly>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      error: undefined
    }
  },
  async mounted() {
    console.log(this.error)
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
<style>
.alert {
  color: red;
}
</style>