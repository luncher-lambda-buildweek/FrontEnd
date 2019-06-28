import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeaderContainer, NavContainer } from './headerStyle';
import routes from '../../consts/urls';
import { clearLocalStorage } from '../../helpers/localStorage';

const Header = props => {
  return (
    <HeaderContainer>
      <Link to={routes.home}>
        <h1>Luncher</h1>
      </Link>
      <NavContainer>
      <Link to={routes.home}>Schools</Link>
        {!props.isLoggedIn ? (
          <React.Fragment>
            <NavLink to={routes.login}>Log In</NavLink>
            <NavLink to={routes.signup}>Sign Up</NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span onClick={clearLocalStorage}>Logout</span>
          </React.Fragment>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoggedIn: loginReducer.loggedIn,
    role: loginReducer.role,
  };
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  role: PropTypes.string,
};

export default connect(
  mapStateToProps,
  {},
)(Header);
