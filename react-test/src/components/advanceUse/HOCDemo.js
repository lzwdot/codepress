import React from "react";

// 高阶组件
const withMouse = (Component) => {
  class withMouseComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      }
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    render() {
      return (
        <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
          {/*1、透传所有 props 2、增加 mouse 属性*/}
          <Component {...this.props} mouse={this.state}/>
        </div>
      )
    }
  }

  return withMouseComponent
}

const App = (props) => {
  const a = props.a
  const {x, y} = props.mouse // 接收 mouse 属性
  return (
    <div style={{height: '500px'}}>
      <h1>The Mouse position is ({x},{y})</h1>
      <p>a:{a}</p>
    </div>
  )
}

export default withMouse(App)