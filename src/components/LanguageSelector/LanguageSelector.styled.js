import styled from 'styled-components';

export const LanguageSelectorStyled = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 5px;

  & > label {
    border-radius: ${props => props.theme.radii.normal};
  }

  & > select {
    height: 30px;
    border-radius: ${props => props.theme.radii.normal};
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.text};
  }
`;
