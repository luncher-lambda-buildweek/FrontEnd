import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderContainer, NavContainer } from './headerStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Luncher</h1>
      </Link>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
