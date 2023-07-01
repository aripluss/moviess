import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainStyled = styled.main`
  height: 100vh;
  overflow: hidden;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: color ${props => props.theme.transition},
    border-bottom ${props => props.theme.transition};
  color: black;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accentPrimary};
  }

  &.active {
    color: ${props => props.theme.colors.accentPrimary};
    border-bottom: 2px solid ${props => props.theme.colors.accentPrimary};
  }
`;
