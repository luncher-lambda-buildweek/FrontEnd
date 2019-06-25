import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 70%;
    margin: 5px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid lightgray;

    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;
