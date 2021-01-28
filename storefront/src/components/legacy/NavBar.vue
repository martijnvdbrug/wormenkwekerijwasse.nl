<template>
  <div>
    <div class="grid-x small-up-2 medium-up-2 large-up-2 grid-padding-x cart-bar">

      <div class="cell">
        <g-link v-if="previousPage" class="button" :to="previousPage"><</g-link>
      </div>

      <div v-if="!hideCartIcon" class="cell text-right">
        <CartIcon></CartIcon>
      </div>

      <div v-if="showOrderButton" class="cell text-right">
        <g-link class="button" to="/customer-details/">
          BESTEL
        </g-link>
      </div>
    </div>

    <div v-if="$context.checkoutProgress" class="grid-x grid-padding-x">
      <div class="cell small-12">
        <div class="progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0"
             :aria-valuetext="$context.checkoutProgress"
             aria-valuemax="100">
          <div class="progress-meter" :style="`width: ${$context.checkoutProgress}%;`"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import CartIcon from './CartIcon';

export default {
  components: {
    CartIcon
  },
  computed: {
    previousPage() {
      return this.$context.previousPage;
    },
    hideCartIcon() {
      return this.$context.hideCartIcon;
    },
    showOrderButton() {
      return this.$store?.activeOrder?.lines?.length > 0
          && (this.$route?.fullPath?.indexOf('/cart/') > -1);
    }
  },
  async mounted() {
  }
}
</script>