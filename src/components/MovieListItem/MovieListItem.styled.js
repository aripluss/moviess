import styled from 'styled-components';

export const StyledMovieListCard = styled.li`
  width: calc((100% - 20px) / 2);
  height: auto;
  background-color: #434148;
  border-radius: 10px;
  gap: 20px;
  text-align: center;
  color: #ffde59;

  @media screen and (min-width: 768px) {
    width: calc((100% - 60px) / 4);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 80px) / 5);
  }

  & .movie-card__poster {
    width: 100%;
    height: 212px;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      height: 265px;
    }

    @media screen and (min-width: 1280px) {
      height: 360px;
    }
  }

  & .movie-card__content {
    padding: 10px;
  }
`;
