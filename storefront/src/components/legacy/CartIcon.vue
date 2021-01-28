<template>
  <div>
    <span class="badge alert cart-badge">{{ nrOfItems }}</span>
    <g-link class="button" to="/cart/" aria-label="Shopping cart">
      <i class="fi-shopping-cart"></i>
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