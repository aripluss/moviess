import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;

  & .label {
    display: flex;
    gap: 20px;
  }

  & .input {
    width: 100%;
    padding: 2px 8px;
    border: none;
    border-bottom: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.accentSecondary};
    background-color: transparent;
    transition: border-bottom ${props => props.theme.transition};

    &:hover,
    &:focus {
      outline: none;
      border-bottom: ${props => props.theme.borders.normal}
        ${props => props.theme.colors.accentPrimary};
    }
  }
`;
