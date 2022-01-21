import {defineComponent} from "vue"

export default defineComponent({
  name: "JsxChild",
  props: ['a'],
  setup(props) {
    const render = () => {
      return <p>Child {props.a}</p>
    }
    return render
  }
})