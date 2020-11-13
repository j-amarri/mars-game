import React, { Component } from 'react';
import './style.scss';

class Button extends Component {
  render() {
    const Icon = this.props.icon;
    console.log(this.props.style);
    return (
      <div className="filters">
        <button value={this.props.value} onClick={this.props.onClick}>
          <img src={Icon} alt="icon" />
          <span style={this.props.style}>{this.props.name}</span>
        </button>
      </div>
    );
  }
}

export default Button;
