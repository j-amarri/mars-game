import React from 'react';
import './style.scss';

const Card = props => {
  let button;
  if (props.starred) {
    button = (
      <button type="submit" onClick={() => props.unstarClick(props)}>
        <img className="star-icon" src="/icons/star-full.png" alt="star-full" />
      </button>
    );
  } else {
    button = (
      <button type="submit" onClick={() => props.starClick(props)}>
        <img className="star-icon" src="/icons/star.png" alt="star-empty" />
      </button>
    );
  }
  return (
    <div className="card">
      <img src={props.image} alt={props.image} />
      {button}
    </div>
  );
};

export default Card;
