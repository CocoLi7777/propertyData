import React from 'react';
import { StyledHeader } from './../styles/StyledHeader';

const Header = () => (
  <StyledHeader data-test="headerComponent">
    <div className="header-content">&nbsp;&nbsp;Data Bay</div>
  </StyledHeader>
);

export default Header;
