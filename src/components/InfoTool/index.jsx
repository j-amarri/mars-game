import React from 'react';
import './style.scss';

const InfoTool = props => {
  return (
    <div className="card-info">
      <h2>{props.title}</h2>
      <span>{props.points} points</span>
      <h3>WHAT DOES IT DO?</h3>
      <div>
        {props.what.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
      <h3>HOW DOES IT WORK?</h3>
      <div>
        {props.how.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    </div>
  );
};

export default InfoTool;
