import React, { Component } from 'react'
import './style.scss'

class Button extends Component {
  render() {
    const TheIcon = this.props.icon
    return (
      <div className="filters">
        <button
          value={this.props.value}
          onClick={this.props.onClick}
          style={this.props.style}
        >
          <img src={TheIcon} alt="" />
          <span>{this.props.name}</span>
        </button>
      </div>
    )
  }
}

export default Button
