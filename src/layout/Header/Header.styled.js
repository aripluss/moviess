import styled from 'styled-components';
import { StyledContainer } from 'components/Container/Container.styled';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.backgroundColorHeader};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-top-left-radius: ${props => props.theme.radii.large};
  border-top-right-radius: ${props => props.theme.radii.large};

  & .nav {
    display: flex;
    gap: 30px;
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
  }
`;
