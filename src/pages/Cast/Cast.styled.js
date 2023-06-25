import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  & .cast__card {
    width: calc((100% - 20px) / 2);
    height: auto;
    border-radius: ${props => props.theme.radii.medium};

    @media screen and (min-width: 768px) {
      width: calc((100% - 60px) / 4);
    }

    @media screen and (min-width: 1280px) {
      width: calc((100% - 100px) / 6);
    }
  }

  & .cast__poster {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: ${props => props.theme.radii.medium};
  }
`;
