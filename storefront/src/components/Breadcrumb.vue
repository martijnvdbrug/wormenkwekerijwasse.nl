<template>
  <div style="padding-bottom: 20px;">
    <span v-for="(item, index) in items">
      <g-link :to="item.url">{{ item.name }} </g-link>
      <span v-if="index < (items.length - 1)"> > </span>
    </span>
  </div>
</template>
<script>
export default {
  props: ['items']
}
</script>