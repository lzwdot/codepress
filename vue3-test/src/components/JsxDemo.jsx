import {defineComponent, ref} from "vue"
import Child from "./JsxChild.jsx";

// defineComponent 可以传入两种
// 1. setup 函数
export default defineComponent(() => {
  const countRef = ref(101)
  const render = () => {
    return <>
      <p>Jsx Demo {countRef.value}</p>
      <Child a={countRef.value + 100}></Child>
    </>
  }
  // 必须返回一个函数
  return render
})

// 2. 组件的配置
// export default defineComponent({
//   name: "JsxDemo",
//   props: ['a', 'b'],
//   setup() {
//   }
// })