import styled from 'styled-components';
import { StyledContainer } from 'components/Container/Container.styled';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.backgroundColorHeader};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-top-left-radius: ${props => props.theme.radii.large};
  border-top-right-radius: ${props => props.theme.radii.large};

  & .nav {
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    grid-area: nav;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      justify-content: start;
    }
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 5px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 0.6fr 2.5fr 0.9fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'logo language theme'
    'nav nav nav';

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0;
    grid-template-areas:
      'logo nav theme'
      'logo nav language';
  }

  .logo {
    grid-area: logo;
  }
  .theme {
    grid-area: theme;
    justify-self: end;
  }
  .language {
    grid-area: language;
    justify-self: end;
  }
`;
