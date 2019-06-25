import styled from 'styled-components';
import { font } from '../../globals/variables';

export const SchoolsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const School = styled.div`
  width: 22%;
  min-width: 200px;
  height: 200px;
  margin: 5px 10px;
  border-radius: 3px;
  border: 1px solid gray;
  padding: 10px;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }

  h4 {
    font-size: ${font.text}
  }

  p {
    font-size: ${font.text};
    line-height: 1.8;
  }

  button {
    font-size: ${font.text};
    position: absolute;
    bottom: 5px;
    border-radius: 3px;
    width: 92.5%;
  }
`;