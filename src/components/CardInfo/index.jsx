import React from 'react';
import './style.scss';

const CardInfo = props => {
  return (
    <div className="card-info">
      <h2>{props.name}</h2>
      <h2>{props.title}</h2>
      <p>{props.quote}</p>
      <p>{props.what}</p>
    </div>
  );
};

export default CardInfo;
