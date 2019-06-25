import styled from 'styled-components';
import { font } from './variables';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 30%;
  margin: 5px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  font-size: ${font.text};

  @media (max-width: 500px) {
    width: 100%;
  }

  &:focus {
    outline: 1px solid lightblue;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 3px;
  font-size: ${font.text};

  @media (max-width: 500px) {
    width: 100%;
  }

  &:focus {
    outline: none;
  }
`;
