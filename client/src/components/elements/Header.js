import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './../styles/StyledHeader';
import Home from './../images/home.svg';

const Header = () => (
  <StyledHeader data-test="headerComponent">
    <div className="header-content">
      <img src={Home} alt="home" />
      &nbsp;&nbsp;Property Data Dashboard
    </div>
    <Link to="register.html">Register</Link>
    <Link to="login.html">Login</Link>
  </StyledHeader>
);

export default Header;
