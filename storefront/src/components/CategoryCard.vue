<template>
  <g-link :to="linkTo">
    <div class="card shadowed" style="margin-bottom: 0;">
      <div class="product-thumbnail" style="height: 100%">
        <AsyncImage :src="img" :alt="title"/>
      </div>
      <div class="card-section">
        <h5>{{ title }}</h5>
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
  props: ['img', 'title', 'linkTo'],
}
</script>
<style>
/*.product-thumbnail {
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  height: 0;
  overflow: hidden;
}

.product-thumbnail img {
  display: table-cell;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  object-fit: cover;
}*/
</style>