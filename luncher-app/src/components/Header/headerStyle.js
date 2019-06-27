import styled from 'styled-components';
import { font } from '../../globals/variables';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  height: 30px;
  background-color: white;
  z-index: 999;

  a {
    margin: 0;
    color: black;
    text-decoration: none;
    font-size: ${font.large};

  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  padding: 0 5px;

  a, span {
    color: black;
    text-decoration: none;
    margin: 0 5px;
    font-size: ${font.text};
    cursor: pointer;
  }
`;
