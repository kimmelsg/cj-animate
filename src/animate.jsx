import React from 'react'
import Transition from './transition'

export default class Animate extends React.Component{
  render(){
    let { children, ...otherProps } = this.props
    return (
      <div>
      {React.Children.map(children, child => <Transition {...otherProps}>{child}</Transition>)}
      </div>
    )
  }
}
