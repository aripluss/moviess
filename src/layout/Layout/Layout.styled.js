import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  margin: auto;
  border-radius: ${props => props.theme.radii.large};
  filter: drop-shadow(0 15px 30px rgb(0 0 0 / 0.2));
  padding: 40px 0;
  width: 95%;
  max-width: 360px;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 60px 0 40px;
    max-width: 832px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 1344px;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${p => p.theme.colors.backgroundColor};
    transition: background-color ${props => props.theme.transition};
  }
`;
