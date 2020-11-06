import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from './../components/Footer';
import './AboutView.scss';

function AboutView() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="navbar">
          <Link to="/welcome" style={{ color: 'white' }}>
            <BsArrowLeft size="30px" />
          </Link>
          <h2>MISSION MARS</h2>
        </div>
        <h3>Why Mission Mars?</h3>
        <p>COVID 19 has impacted us in 3 major ways:</p>
        <h4>1. Prepare for the future</h4>
        <p>
          It revealed an increasing need to prepare for the future and to start
          thinking in a proactive way, before we are faced with larger issues.
        </p>
        <h4>2. Spice up remote meetings</h4>
        <p>
          Remote collaboration became the norm, carrying with it meeting fatigue
          caused by a never-ending schedule of video calls.
        </p>
        <h4>3. Make team-building fun again</h4>
        <p>
          No more physical team events, making an informal moment to have fun
          into yet another static videocall.
        </p>
        <h4>
          This is why we created a future-inspired game to test new methods for
          remote collaboration.
        </h4>
        <p>
          The Mars One Competition is a gamified service design workshop about
          space exploration, reflecting on today’s challenges for humanity.
        </p>
        <h3>Who are we?</h3>
        <p>Behind this project there are three passionate service designers:</p>
        <h4>Concept & design</h4>
        <div className="contributors">
          <div className="contributor">
            <img src="/images/marjorie.png" alt="marjorie" />
            <h4>Marjorie</h4>
            <p>Future thinker & enthusiast</p>
          </div>
          <div className="contributor">
            <img src="/images/martina.png" alt="martina" />
            <h4>Martina</h4>
            <p>Games & Sci-fi lover</p>
          </div>
          <div className="contributor">
            <img src="/images/valentina.png" alt="valentina" />
            <h4>Valentina</h4>
            <p>Facilitation expert</p>
          </div>
        </div>
        <h4>Website</h4>
        <div className="contributor">
          <img src="/images/alessandro.png" alt="alessandro" />
          <h4>Alessandro</h4>
          <p>Front-End Developer</p>
        </div>
        <p>Get in touch to try the game or know more about it! </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutView;
