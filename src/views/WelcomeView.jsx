import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './WelcomeView.scss';


function WelcomeView() {
  return (
    <div className="welcome">
      <Header link="about" to="/about" />
      <h1>Welcome to MARS</h1>
      <img className="image-intro" src="/images/mars.png" alt="mars" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam atque aliquam soluta hic maiores non quos cupiditate commodi blanditiis consectetur reprehenderit eligendi similique sed voluptas excepturi, porro ut a nesciunt.</p>
      <Link to="/game">
        <Button name="Enter game" />
      </Link>
      <Footer />
    </div>
  );
}

export default WelcomeView;