import React from 'react';
import { StyledHeader } from './../styles/StyledHeader';
import Home from './../images/home.svg';

const Header = () => (
  <StyledHeader data-test="headerComponent">
    <div className="header-content">
      <img src={Home} alt="home" />
      &nbsp;&nbsp;Property Data Dashboard
    </div>
  </StyledHeader>
);

export default Header;
