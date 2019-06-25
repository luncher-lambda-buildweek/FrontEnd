import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 50%;
  margin: 5px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid lightgrey;

  &:focus {
    outline: 1px solid lightblue;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;
