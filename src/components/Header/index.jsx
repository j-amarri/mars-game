import React from 'react';
import './style.scss';
import NavLink from './../NavLink';
// import { AiOutlineSound } from 'react-icons/ai';

export const Header = props => {
  return (
    <div className="header">
      {/* <div className="sound">
        <AiOutlineSound />
        <span>Sound on</span>
      </div> */}
      <NavLink link={props.link} to={props.to} />
    </div>
  );
};

export default Header;
