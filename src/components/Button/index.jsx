import React from 'react';
import './style.scss';

const Button = props => {
  return (
    <div className="filters">
      <button value={props.value} onClick={props.onClick} style={props.style} />
      <span style={props.style}>{props.name}</span>
    </div>
  );
};

export default Button;
