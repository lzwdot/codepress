<template>
  <div>
    <input type="text" :value="value" @input="onInput">
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  method: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
