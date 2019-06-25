import styled from 'styled-components';

export const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 40%;
    margin: 10px;

    @media (max-width: 500px) {
    width: 100%;
  }
  }
`;