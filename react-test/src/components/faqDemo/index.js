import React from "react";

export default class FaqDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  render() {
    return <div>
      <p>问题测试</p>
    </div>
  }

  componentDidMount() {
    // count 初始值为 0
    this.setState({count: this.state.count + 1})
    console.log('1', this.state.count) // 0

    this.setState({count: this.state.count + 1})
    console.log('2', this.state.count) // 0

    setTimeout(() => {
      this.setState({count: this.state.count + 1})
      console.log('3', this.state.count) // 2
    })

    setTimeout(() => {
      this.setState({count: this.state.count + 1})
      console.log('4', this.state.count) // 3
    })

    // 1 0
    // 2 0
    // 3 2
    // 4 3
  }
}