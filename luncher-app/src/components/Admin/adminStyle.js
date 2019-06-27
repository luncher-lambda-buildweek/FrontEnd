import styled from 'styled-components';
import { font } from '../../globals/variables';

export const SchoolDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: ${font.medium};
    line-height: 2;
  }

  div {
    font-size: ${font.large};
    opacity: 0.6;

    & > * {
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

export const SchoolImage = styled.div`
  width: 30%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SchoolDisplayDetails = styled.div`
  width: 70%;
  margin: 10px 0;
  @media (max-width: 500px) {
    width: 100%;
  }

  p,
  span {
    font-size: ${font.text};
    line-height: 1.8;
  }
`;
