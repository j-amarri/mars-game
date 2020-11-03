import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Button from '../components/Button';
import './WelcomeView.scss';

import { ReactComponent as MarsImage } from './../assets/images/mars.svg';
// import { ReactComponent as DownArrow } from './../assets/icons/down-arrow.svg';

function WelcomeView() {
  return (
    <div className="welcome-view">
      <Header link="About" to="/about" />
      <div className="intro">
        <h1 className="title-intro">MISSION MARS</h1>
        <MarsImage className="image-intro" />
      </div>
      <div className="welcome-section">
        <h2>Do you have what it takes to save life on Mars?</h2>
        <h2>The future of humanity depends on you.</h2>
        <Link to="/base">
          <button className="button-base">Enter the base</button>
        </Link>
        <Link to="/game">
          <button className="button-game">Enter the game</button>
        </Link>
        {/* <DownArrow /> */}
        <h2>The year is 2030.</h2>
        <p>
          Humanity didn’t meet the challenge of climate change and we need a
          planet B. As the international collaboration presented the final plans
          today for the expansion of the Mars colony, it is becoming urgent to
          solve the base multiple & important challenges.
        </p>
      </div>
      <div className="welcome-info">
        <h2>HOW TO PLAY</h2>
      </div>
      <Footer />
    </div>
  );
}

export default WelcomeView;
