import styled from 'styled-components';

export const AppContainer = styled.div`

  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 30px;
  margin: 0 auto;
  width: 70%;
  background-color: white;
  position: relative;
  @media (max-width: 700px) {
    width: 100%;
    position: absolute;
  }
`;

export const MainContainer = styled.div`
padding-top: 70px;
`