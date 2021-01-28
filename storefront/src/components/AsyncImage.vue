<template>
  <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk8AEAAFIATgDK/mEAAAAASUVORK5CYII="
      ref="img" :alt="alt"/>
</template>

<script>
export default {
  props: ['src', 'alt'],
  watch: {
    src: function () {
      this.load();
    }
  },
  methods: {
    load() {
      // If not ready or already loaded
      if (!this.src || !this.$refs?.img?.src || this.$refs.img.src === this.src) {
        return;
      }
      this.$refs.img.src = this.src;
    }
  },
  async mounted() {
    this.load();
  }
}
</script>