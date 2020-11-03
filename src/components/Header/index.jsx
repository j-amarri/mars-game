import React from 'react';
import './style.scss';
import NavLink from './../NavLink';

export const Header = props => {
  return (
    <div className="header">
      <p>Sound off</p>
      <NavLink link={props.link} to={props.to} />
    </div>
  );
};

export default Header;
