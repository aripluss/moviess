import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkButton = styled(NavLink)`
  padding: 10px;
  color: #8250df;
  border: 1px solid #ffde59;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus-visible {
    background-color: #ffde59;
  }
`;
