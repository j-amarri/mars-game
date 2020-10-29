import React from 'react'
import './style.scss'

const InfoPersona = (props) => {
  if (props.type !== 'persona') return <div></div>
  return (
    <div className="persona-info">
      <p className="quote">{props.quote}</p>
      <div className="intro-info">
        <div>
          <h2>{props.name}</h2>
          <h2>{props.title}</h2>
        </div>
        <span>{props.points} points</span>
      </div>
      <h3>OBJECTIVES</h3>
      <div>
        {props.objectives.map((txt, i) => (
          <p key={i}>- {txt}</p>
        ))}
      </div>
      <h3>PAINS</h3>
      <div>
        {props.pains.map((txt, i) => (
          <p key={i}>- {txt}</p>
        ))}
      </div>
    </div>
  )
}

export default InfoPersona
