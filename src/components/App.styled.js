import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  color: black;

  &:hover,
  &:focus {
    color: #8250df;
  }

  &.active {
    color: #8250df;
    border-bottom: 2px solid #8250df;
  }
`;

export const Page404Styled = styled.p`
  text-align: center;
`;
