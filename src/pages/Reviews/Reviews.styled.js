import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .review__card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.accentSecondary};
    border-radius: 10px;

    & .highlight {
      font-weight: bold;
      color: ${props => props.theme.colors.accentPrimary};
    }

    & .readMore {
      padding: 1px 6px;
      margin-left: 6px;
      border: ${props => props.theme.borders.normal} gray;
      border-radius: ${props => props.theme.radii.normal};
    }
  }
`;
