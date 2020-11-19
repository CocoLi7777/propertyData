import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './../styles/StyledHeader';
import Home from './../images/home.svg';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <a onClick={logout} href="/">
      logout
    </a>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <StyledHeader data-test="headerComponent">
      <div className="header-content">
        <img src={Home} alt="home" />
        &nbsp;&nbsp;Property Data Dashboard
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
