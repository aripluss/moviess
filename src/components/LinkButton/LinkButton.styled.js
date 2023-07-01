import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkButton = styled(NavLink)`
  padding: 10px;
  text-align: center;
  color: ${props => props.theme.colors.accentPrimary};
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.accentPrimary};
  border-radius: ${props => props.theme.radii.medium};
  transition: background-color ${props => props.theme.transition};

  &:hover,
  &:focus-visible {
    background-color: ${props => props.theme.colors.accentPrimary};
  }
`;
