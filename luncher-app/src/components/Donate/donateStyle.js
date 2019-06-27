import styled from 'styled-components';
import { font } from '../../globals/variables';

export const DonateContainer = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const AvatarContainer = styled.div`
  width: 30%;

  @media (max-width: 500px) {
    width: 100%;
  }

  img {
    width: 100%;
    @media (max-width: 500px) {
      height: 230px;
    }
  }
`;

export const DonateDescription = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 500px) {
    width: 100%;
    padding-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      font-size: ${font.text};
      margin: 5px;
      border-radius: 3px;
      border: 1px solid lightgray;
      text-align: right
    }
  }
`;
