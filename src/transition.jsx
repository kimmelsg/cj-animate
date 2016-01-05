import React from 'react'

export default class Transition extends React.Component{
  constructor(props){
    super(props)
    this.state = props.start
  }

  componentDidMount(){
    setTimeout(() => this.setState(this.props.end), 50)
  }

  render(){
    let style = {
      transition: `${this.props.transition || 'all'} ${this.props.speed || 1000}ms ease-in-out`,
      ...this.state
    }
    return <div style={style}>{this.props.children}</div>
  }
}
