import styled from 'styled-components';
import { FadeIn } from '../../globals/styles';

export const SideImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background: url('https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
  width: 55%;
  min-height: 550px;
  ${FadeIn};

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;

  form {
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  h1 {
    font-size: 3rem;
    @media (max-width: 800px) {
      align-self: flex-start;
    }
  }

  input {
    width: 80%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;
