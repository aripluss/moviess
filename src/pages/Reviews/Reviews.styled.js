import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .review__card {
    padding: 20px;
    border: 1px solid #ffde59;
    border-radius: 10px;
  }
`;
