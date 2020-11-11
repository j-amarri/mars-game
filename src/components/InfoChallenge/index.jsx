import React from 'react';
import { ReactComponent as Questions } from './../../assets/icons/questions.svg';
import './style.scss';

const InfoChallenge = props => {
  if (props.type !== 'challenge') return <div></div>;
  return (
    <div className="challenge-info">
      <h2 className="title">{props.title}</h2>
      <p className="subtitle">{props.subtitle}</p>
      <div className="card-heading">
        <Questions />
        <h3>Open questions</h3>
      </div>
      <ul className="card-detail">
        {props.questions.map((txt, i) => (
          <li key={i}>{txt}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoChallenge;
