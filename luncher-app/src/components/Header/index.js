import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
        {!props.isLoggedIn ? (
          <React.Fragment>
            <NavLink to={routes.login}>Log In</NavLink>
            <NavLink to={routes.signup}>Sign Up</NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink to={routes.home}>Home</NavLink>
            <NavLink to={routes.addSchool}>Add School</NavLink>
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
  };
};

export default connect(
  mapStateToProps,
  {},
)(Header);
