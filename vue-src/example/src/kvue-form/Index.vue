<template>
  <div>
    <k-input v-model="model.usernmae"></k-input>
    {{model。username}}
  </div>
</template>
<script>
import KInput from "./KInput";
export default {
  components: {KInput},
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
