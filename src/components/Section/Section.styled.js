import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${p => p.theme.colors.backgroundColor};
  transition: background-color ${props => props.theme.transition};

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
