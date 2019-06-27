import styled from 'styled-components';
import { font } from './variables';
import { GiTakeMyMoney } from "react-icons/gi";

export const MoneyIcon = styled(GiTakeMyMoney)`
  font-size: ${font.medium};
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 38%;
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
  min-width: 200px;

  @media (max-width: 500px) {
    width: 100%;
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  font-size: ${font.medium};
  margin: 10px 0;
`;

export const Alert = styled.div`
  margin: 30px;
  font-size: ${font.text};
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  background-color: lightgray;

  a {
    color: dodgerblue;
    text-decoration: none;
    margin: 0 5px;
    font-size: ${font.text};
  }
`;
