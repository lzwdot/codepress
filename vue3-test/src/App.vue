<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--  <Ref/>-->
  <!--  <toRef/>-->
  <!--  <to-refs></to-refs>-->
  <!--  <why-ref></why-ref>-->
  <!--  <why-value></why-value>-->
  <!--  <mouse-position></mouse-position>-->
  <p>{{ name }}{{ age }}</p>
  <!--  <child-->
  <!--      v-model:name="name"-->
  <!--      v-model:age="age"-->
  <!--  ></child>-->
<!--  <watch></watch>-->
  <get-instance></get-instance>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'


// import Ref from "@/components/Ref";
// import ToRef from "@/components/ToRef";
// import ToRefs from "@/components/ToRefs";
// import WhyRef from "@/components/WhyRef";
// import WhyValue from "@/components/WhyValue";
// import MousePosition from "@/components/MousePosition";

// import Child from "@/components/Child";
import {reactive, toRefs} from "vue";
// import Watch from "@/components/Watch";
import GetInstance from "@/components/GetInstance";

export default {
  name: 'App',
  components: {
    GetInstance,
    // Watch
    // Child
    // MousePosition,
    // WhyValue,
    // WhyRef,
    // ToRefs,
    // ToRef,
    // Ref
    // HelloWorld
  },
  setup() {
    const state = reactive({
      name: 'lzw.',
      age: '20'
    })

    return toRefs(state)
  }
}
</script>
