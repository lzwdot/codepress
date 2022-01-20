<template>

</template>

<script>
import {reactive, toRefs} from "vue";

function useFeatureX() {
  const state = reactive({
    x: 1,
    y: 2
  })

  return toRefs(state)
}

export default {
  name: "WhyRef",
  setup() {
    const {x, y} = useFeatureX()
  }
}
</script>
