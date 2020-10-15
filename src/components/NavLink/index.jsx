import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const NavLink = props => {
  return (
    <Link className="nav-link" to="/about">About</Link>
  );
};

export default NavLink;