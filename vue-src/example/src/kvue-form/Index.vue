<template>
  <div>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="输入用户名"></k-input>
      </k-item>
      <k-item label="用户名" prop="password">
        <k-input v-model="model.password"></k-input>
      </k-item>
    </k-form>
  </div>
</template>
<script>
import KInput from "./KInput";
import KItem from "./KItem";
import KForm from "./KForm";

export default {
  components: {KForm, KItem, KInput},
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      model: {
        username: 'lzw',
        password: '',
      },
      rules: {
        username: [
          {
            required: true, message: '用户名必填'
          }
        ],
        password: [
          {
            required: true, message: '密码必填'
          }
        ]
      }
    }
  },
}
</script>
