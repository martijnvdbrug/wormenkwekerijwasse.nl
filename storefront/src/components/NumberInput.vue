<template>
  <div>

    <input
        v-model="number"
        v-on:change="set($event.target.value)"
        type="number"
        min="0" max="999"/>


<!--    <div class="input-group-button">
      <span class="input-number-decrement" v-on:click="detract()">-</span>
    </div>
    <input class="input-number" type="number" v-model="number" v-on:change="set($event.target.value)">
    <div class="input-group-button">
      <span class="input-number-increment" v-on:click="add()">+</span>
    </div>-->
  </div>
</template>
<script>
export default {
  props: ['value'],
  watch: { // Watch for changes for parent to stay in sync
    value(newValue, oldValue) {
      this.number = newValue;
    }
  },
  data() {
    return {
      number: this.value
    }
  },
  methods: {
    set(newValue) {
      const value = parseInt(newValue);
      if (value >= 0 && value < 1000) {
        this.number = value;
        this.$emit('numberChange', this.number)
      }
    }
  }
}
</script>
<style>
input[type=number]{
  margin-top: 15px;
  width: 70px;
}
</style>