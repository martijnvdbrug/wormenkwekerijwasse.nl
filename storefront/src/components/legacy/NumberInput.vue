<template>
  <div class="input-number-group">
    <div class="input-group-button">
      <span class="input-number-decrement" v-on:click="detract()">-</span>
    </div>
    <input class="input-number" type="number" v-model="number" v-on:change="set($event.target.value)">
    <div class="input-group-button">
      <span class="input-number-increment" v-on:click="add()">+</span>
    </div>
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
    add() {
      if (this.number > 999) {
        return;
      }
      this.number++;
      this.$emit('numberChange', this.number)
    },
    detract() {
      if (this.number === 0) {
        return;
      }
      this.number--;
      this.$emit('numberChange', this.number)
    },
    set(newValue) {
      const value = parseInt(newValue);
      if (value > 0 && value < 1000) {
        this.number = value;
        this.$emit('numberChange', this.number)
      }
    }
  }
}
</script>
<style>
.input-number-group {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
}

.input-number-group input[type=number]::-webkit-inner-spin-button, .input-number-group input[type=number]::-webkit-outer-spin-button {
  appearance: none;
}

.input-number-group .input-group-button {
  height: 30px;
  font-size: 0.8rem;
  line-height: 25px;
}

.input-number-group .input-number {
  height: 30px;
  font-size: 0.8rem;
  width: 60px;
  padding: 0 12px;
  text-align: center;
  outline: none;
  display: block;
  margin: 0;
}

.input-number-group .input-number, .input-number-group .input-number-decrement, .input-number-group .input-number-increment {
  border: 1px solid #343434;
  user-select: none;
}

.input-number-group .input-number-decrement, .input-number-group .input-number-increment {
  display: inline-block;
  width: 30px;
  background: #343434;
  color: white;
  text-align: center;
  cursor: pointer;
}
</style>