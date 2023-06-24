import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;

  & .input {
    padding: 2px 8px;
    border: none;
    border-bottom: 1px solid #ffde59;
    transition: border-bottom 0.3s ease;

    &:hover,
    &:focus {
      outline: none;
      border-bottom: 1px solid #8250df;
    }
  }
`;
