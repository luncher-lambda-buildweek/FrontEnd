import styled from 'styled-components';
import { font } from '../../globals/variables';


export const SchoolsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const School = styled.div`
  width: 30%;
  min-width: 200px;
  margin: 12.5px 12px;
  min-height: 430px;
  padding-bottom: 35px;
  border-radius: 3px;
  border: 1px solid gray;
  position: relative;
  box-shadow: 0px 2px 5px -1px rgba(0,0,0,.30);

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  height: 240px;
  img {
    width: 100%;
    height: 100%;
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
    align-item: center;

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
