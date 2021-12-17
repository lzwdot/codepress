<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    provide() {
      return {
        form: this
      }
    },
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  }
}
</script>