import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Zoom from 'react-reveal/Zoom' // Importing Zoom effect
import Fade from 'react-reveal/Fade'
import DownArrow from './../assets/icons/down-arrow.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './WelcomeView.scss'

function WelcomeView() {
  return (
    <div className="welcome-view">
      <Header link="About" to="/about" />
      <Fade>
        <div className="intro">
          <Zoom>
            <img className="image-intro" src="/images/mars.png" alt="mars" />
          </Zoom>
          <h1 className="title-intro">MISSION MARS</h1>
        </div>
        <div className="welcome-section">
          <h3>Do you have what it takes to save life on Mars?</h3>
          <h3>The future of humanity depends on you.</h3>
          <Link to="/game">
            <button className="button-game">Enter the game</button>
          </Link>
          <img src={DownArrow} alt="arrow-down" />
          <h3>The year is 2030.</h3>
          <p>
            Humanity didn’t meet the challenge of climate change and we need a
            planet B. As the international collaboration presented the final
            plans today for the expansion of the Mars colony, it is becoming
            urgent to solve the base multiple & important challenges.
          </p>
        </div>
      </Fade>
      <div className="welcome-info">
        <Zoom>
          <div className="how-bar">
            <h2>HOW TO PLAY</h2>
            <BsArrowRight size="30px" />
          </div>
          <img
            className="astrounaut-image"
            src="/images/astronaut.png"
            alt="astronaut"
          />
        </Zoom>
        <Zoom>
          <h3>Meet your team</h3>
          <p>
            Mission Mars is a gamified remote design workshop about space
            exploration. With the virtual game board, our deep-space consultants
            will guide your team to solve the Mars colony challenges based on
            the colonists needs & technological possibilities.
          </p>
          <img
            className="satellite-image"
            src="/images/satellite.png"
            alt="satellite"
          />
        </Zoom>
        <Zoom>
          <h3>Explore the cards</h3>
          <p>
            On this website you will be able to access the card deck necessary
            to play the game.{' '}
          </p>
          <p>
            <strong>Persona cards</strong> represent someone living in the Mars
            One colony, who moved with high hopes and objectives but in time
            developed problems and pains, making life on Mars miserable.
          </p>
          <p>
            <strong>Challenge cards</strong> are obstacles the colony is trying
            to overcome: problems that the whole society is faced with, and that
            are common to all persona cards.
          </p>
          <p>
            <strong>Tool cards</strong> give knowledge on classic old-time
            technologies from the 2010's and new modern technologies that the
            colony is now deploying on Mars One.
          </p>
          <img className="gazing-image" src="/images/gazing.png" alt="gazing" />
        </Zoom>
        <Zoom>
          <h3>Reflect on your ideas</h3>
          <p>
            Speculating on future interplanetary issues can be a way to explore
            our current problems on Earth. Placing ourselves in someone else’s
            shoes, for instance Mars colonists, inspires us with solutions to
            improve our society and our wellbeing on the blue planet.
          </p>
        </Zoom>
      </div>
      <Footer />
    </div>
  )
}

export default WelcomeView
