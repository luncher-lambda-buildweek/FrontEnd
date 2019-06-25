import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5px;
  height: 30px;

  a {
    margin: 0;
    color: black;
    text-decoration: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  padding: 0 5px;

  a {
    color: black;
    text-decoration: none;
    margin: 0 5px;
  }
`;
