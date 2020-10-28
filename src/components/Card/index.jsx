import React from 'react';
import './style.scss';

const Card = props => {
  return (
    <div className="card">
      <img src={props.image} alt={props.image} />
      <button type="submit" onClick={() => props.starClick(props)}>
        <img className="star-icon" src="/icons/star.png" alt="star" />
      </button>
    </div>
  );
};

export default Card;
