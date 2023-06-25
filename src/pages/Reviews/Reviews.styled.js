import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .review__card {
    padding: 20px;
    border: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.accentSecondary};
    border-radius: 10px;
  }
`;
