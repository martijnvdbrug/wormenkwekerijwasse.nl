<template>
  <g-link :to="linkTo">
    <div class="card shadowed" style="margin-bottom: 0;">
      <AsyncImage :src="img" :alt="title"/>
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