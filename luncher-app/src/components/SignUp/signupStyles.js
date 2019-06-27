import styled from 'styled-components';
import { font } from '../../globals/variables';

export const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: ${font.text};
  }

  button {
    width: 40%;
    margin: 10px;

    @media (max-width: 500px) {
    width: 100%;
  }
  }
`;