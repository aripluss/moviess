import styled from 'styled-components';

export const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .movie__poster {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      width: 250px;
    }

    @media screen and (min-width: 1280px) {
      width: 300px;
    }
  }

  .movie__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & .movie__title-wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }

  & .movie__rating {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffde59;
    color: #000;
    border: 1px solid #ffde59;
    border-radius: 10px;
    padding: 6px 12px;
    font-weight: 500;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  }

  & .movie__adult {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    color: red;
    border-radius: 10px;
    padding: 6px 10px;
    font-weight: 500;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  }
`;
