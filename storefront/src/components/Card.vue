<template>
  <g-link :to="linkTo">
    <div class="card shadowed">
      <AsyncImage :src="img" :alt="imgAlt || title" class="product-img"/>
      <div class="card-section">
        <h5>{{ title }}</h5>
        <p v-if="price">{{ price | euro }}</p>
      </div>
    </div>
  </g-link>
</template>

<script>
import AsyncImage from './AsyncImage';

export default {
  components: {
    AsyncImage
  },
  props: ['img', 'imgAlt', 'title', 'price', 'linkTo'],
}
</script>
<style>
.card h5 {
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>