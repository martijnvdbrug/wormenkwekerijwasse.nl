<template>
  <div class="ratings">
    <div class="empty-stars"></div>
    <div class="full-stars" :style="`width:${this.ratingPercentage}%`"></div>
  </div>
</template>
<script>
export default {
  props: ['rating'],
  computed: {
    ratingPercentage() {
      return this.rating * 20;
    }
  }
}
</script>
<style scoped>
.ratings {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #b1b1b1;
  overflow: hidden;
}

.full-stars {
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #5FAD56;
}

.empty-stars:before, .full-stars:before {
  content: "\2605\2605\2605\2605\2605";
  font-size: 10pt;
}

.empty-stars:before {
  -webkit-text-stroke: 1px #b1b1b1;
}

.full-stars:before {
  -webkit-text-stroke: 1px #5FAD56;
}

/* Webkit-text-stroke is not supported on firefox or IE */

/* Firefox */
@-moz-document url-prefix() {
  .full-stars {
    color: #5FAD56;
  }
}
</style>