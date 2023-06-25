import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  margin: auto;
  border-radius: ${props => props.theme.radii.large};
  filter: drop-shadow(0 15px 30px rgb(0 0 0 / 0.2));
  padding: 80px 0 40px;
  width: 95%;
  max-width: 360px;

  @media screen and (min-width: 768px) {
    max-width: 832px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1344px;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;
