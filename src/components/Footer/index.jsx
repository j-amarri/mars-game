import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <hr className="solid" />
      <div className="designed">
        <h4>Designed on Earth with</h4>
        <AiOutlineHeart />
      </div>
      <div className="contributors">
        <p>Design: Martina Bonetti, Marjorie Broudieu</p>
        <p>Website: Alessandro Amarri</p>
      </div>
    </footer>
  );
};

export default Footer;
