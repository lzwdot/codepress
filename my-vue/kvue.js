// 数据响应式
function defineReactive(obj, key, val) {
  // 递归下，兼容 obj[key] = {a:10}
  observe(obj[key])

  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set', key)
        // 如果 newVal 是对象，做响应式处理，比如 obj.key = {a:10}
        observe(newVal)
        val = newVal
      }
    }
  })
}

// 遍历 obj, 对所有属性做响应式
function observe(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return
  }

  new Observer(obj)
}


// 代理，实现的目的 vm.$data.counter 可以通过 vm.counter 拿到
function proxy(vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(v) {
        vm.$data[key] = v
      }
    })
  })
}


// 根据不同类型做响应式处理
class Observer {
  constructor(value) {
    this.value = value

    if (Array.isArray(value)) {
      // todo
    } else {
      this.walk(value)
    }
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

// 解析模板，1、处理插值，2、处理指令和事件，3、以上两者的初始化和更新

class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {

    }
  }

  compile(el) {
    // 遍历 el 子节点，判断类型做相应的处理
    const childNodes = el.childNodes

    childNodes.forEach(node => {
      if (node.nodeType === 1) {
        // 元素
        console.log('元素', node.nodeName)
      } else if (this.isInter(node)) {
        // 文本 插值表达式
        console.log('插值', node.textContent)
      }

      // 递归下
      if (node.childNodes) {
        this.compile(node)
      }
    })
  }

  // 是否插值表达式
  isInter(node) {
    return node.nodeType === 3 && /\{\{.*\}\}/.test(node.textContent)
  }
}

/**
 * 1、对 data 选项进行响应式处理
 * 2、编辑模板
 */
class Kvue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    // 响应式
    observe(this.$data)

    // 代理下
    proxy(this)

    // compile 编辑模板
  }

}