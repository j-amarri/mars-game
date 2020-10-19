import React from 'react';
import './style.scss';

const Card = props => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} alt={props.image} />
    </div>
  );
};

export default Card;
