import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 1280px;
  }
`;
