import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, NavContainer } from './headerStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Luncher</h1>
      </Link>
      <NavContainer>
        <Link to="/login">Log In</Link>
        <Link to="/register">Sign Up</Link>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
