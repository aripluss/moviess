import styled from 'styled-components';

export const StyledButton = styled.button`
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
