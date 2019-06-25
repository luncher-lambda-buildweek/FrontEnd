import styled from 'styled-components';
import { font } from '../../globals/variables';

export const SchoolsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const School = styled.div`
  width: 290px;
  height: 150px;
  margin: 5px 10px;
  border-radius: 3px;
  border: 1px solid gray;
  padding: 10px;
  position: relative;

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