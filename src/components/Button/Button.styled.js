import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  color: ${props => props.theme.colors.accentPrimary};
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.accentPrimary};
  border-radius: ${props => props.theme.radii.medium};
  transition: background-color ${props => props.theme.transition},
    color ${props => props.theme.transition};

  &:hover,
  &:focus-visible {
    background-color: ${props => props.theme.colors.accentPrimary};
    color: ${props => props.theme.colors.accentSecondary};
  }
`;
