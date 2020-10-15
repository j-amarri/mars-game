import React from 'react';
import './style.scss';
import NavLink from './../NavLink';
import Logo from './../Logo';

export const Header = props => {
  return (
    <div className="header">
      <Logo />
      <NavLink link={props.link} />
    </div>
  );
};

export default Header;
