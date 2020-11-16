import React from 'react'
import { ReactComponent as Motto } from './../../assets/icons/motto.svg'
import { ReactComponent as Objectives } from './../../assets/icons/objectives.svg'
import { ReactComponent as Pains } from './../../assets/icons/pains.svg'
import './style.scss'

const InfoPersona = (props) => {
  if (props.type !== 'persona') return <div></div>
  return (
    <div className="persona-info">
      <h2 className="title">{props.title}</h2>
      <p className="subtitle">{props.quote}</p>
      <div className="card-heading">
        <Motto />
        <h3>Motto</h3>
      </div>
      <p className="card-detail">"{props.motto}"</p>
      <div className="card-heading">
        <Objectives />
        <h3>Objectives</h3>
      </div>
      <ul className="card-detail">
        {props.objectives.map((txt, i) => (
          <li key={i}>{txt}</li>
        ))}
      </ul>
      <div className="card-heading">
        <Pains />
        <h3>Pains</h3>
      </div>
      <ul className="card-detail">
        {props.pains.map((txt, i) => (
          <li key={i}>{txt}</li>
        ))}
      </ul>
    </div>
  )
}

export default InfoPersona
