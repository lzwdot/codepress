<template>
  <div>
    <!-- label 标签-->
    <label v-if="label">{{ label }}</label>
    <!-- 内容-->
    <slot></slot>
    {{ form.rules }}
    <!-- 校验信息-->
    <p v-if="error">{{ error }}</p>
  </div>
</template>
<script>
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: '错误'
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      // 执行校验，获取数值和规则
      console.log('v')
    }
  },
}
</script>