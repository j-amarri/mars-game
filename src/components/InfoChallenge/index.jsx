import React from 'react';
import './style.scss';

const InfoChallenge = props => {
  return (
    <div className="challenge-info">
      <span>{props.points} points</span>
      <div>
        {props.questions.map((txt, i) => (
          <h3 key={i}>{txt}</h3>
        ))}
      </div>
    </div>
  );
};

export default InfoChallenge;
