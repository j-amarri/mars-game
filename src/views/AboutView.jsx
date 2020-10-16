import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Button from './../components/Button';
import './AboutView.scss';

function AboutView() {
  return (
    <div className="about">
      <Header link="home" to="/welcome" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eum pariatur at eligendi expedita labore a optio cumque dolore ipsam? Culpa veniam architecto inventore quia dolorem, quo ipsam voluptate porro!</p>
      <Button />
      <Footer />
    </div>
  );
}

export default AboutView;