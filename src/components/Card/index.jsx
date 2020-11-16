import React from 'react';
import './style.scss';
import { ReactComponent as StarActive } from './../../assets/icons/star.svg';
import { ReactComponent as StarInactive } from './../../assets/icons/star-full.svg';

const Card = props => {
  let button;
  if (props.starred) {
    button = (
      <button type="submit" onClick={() => props.starClick(props)}>
        <StarInactive className="star-icon" />
      </button>
    );
  } else {
    button = (
      <button type="submit" onClick={() => props.starClick(props)}>
        <StarActive className="star-icon" />
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
