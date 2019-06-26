import styled from 'styled-components';
import { font } from '../../globals/variables';

export const SchoolsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const School = styled.div`
  width: 23.2%;
  min-width: 200px;
  margin: 5px 10px;
  min-height: 430px;
  padding-bottom: 35px;
  border-radius: 3px;
  border: 1px solid gray;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 240px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
`;

export const SchoolDetail = styled.div`
  width: 100%;
  padding: 10px;

  h4 {
    font-size: ${font.medium};
  }

  p {
    font-size: ${font.text};
    display: flex;
    justify-content: space-between;
    margin: 5px 0;

    span {
      margin-left: 10px;
      font-size: ${font.text};
      font-weight: 500;
    }
  }

  button {
    font-size: ${font.text};
    position: absolute;
    bottom: 5px;
    border-radius: 3px;
    width: 92.5%;
    padding: 8px;
  }
`;
