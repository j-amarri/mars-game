import React from 'react';
import HowWorks from './../../assets/icons/how-it-works.png';
import Benefits from './../../assets/icons/benefits.png';
import './style.scss';

const InfoTool = props => {
  if (props.type !== 'tool') return <div></div>;
  return (
    <div className="tool-info">
      <h2 className="title">{props.title}</h2>
      <p className="subtitle">{props.subtitle}</p>
      <div className="card-heading">
        <img src={Benefits} alt="benefits" />
        <h3>Benefits</h3>
      </div>
      <ul className="card-detail">
        {props.what.map((txt, i) => (
          <li key={i}>{txt}</li>
        ))}
      </ul>
      <div className="card-heading">
        <img src={HowWorks} alt="how-works" />
        <h3>How it works</h3>
      </div>
      <ul className="card-detail">
        {props.how.map((txt, i) => (
          <li key={i}>{txt}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoTool;
