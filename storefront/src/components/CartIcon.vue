<template>
  <div>
    <span class="badge alert cart-badge">{{ nrOfItems }}</span>
    <g-link to="/winkelmand/" aria-label="Shopping cart">
      <i class="fi-shopping-cart mobile-cart" data-fa-transform="down-4"></i>
    </g-link>
  </div>
</template>
<script>
export default {
  computed: {
    nrOfItems() {
      if (this.$store?.activeOrder?.lines?.length === 0) {
        return 0;
      }
      return this.$store?.activeOrder?.lines
              ?.map(l => l.quantity)
              ?.reduce((quantity1, quantity2) => quantity1 + quantity2)
          || 0;
    }
  },
}
</script>
<style>
.fi-shopping-cart {
  color: #5FAD56;
}
</style>