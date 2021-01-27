<template>
  <div>
    <slot/>
  </div>
</template>
<script>

export default {
  components: {},
  metaInfo() {
    return {
      meta: [
        {name: 'description', content: "Pinelab.studio demo webshop. Probeer het uit!"}
      ]
    }
  },
}
</script>