import styled from 'styled-components';
import { SelectStyled } from '../../components/Select/Select.styled';

export const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }

  .movie__poster {
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.radii.medium};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 250px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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
    background-color: ${props => props.theme.colors.accentSecondary};
    color: #000;
    border: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.accentSecondary};
    border-radius: ${props => props.theme.radii.medium};
    padding: 6px 12px;
    font-weight: ${props => props.theme.fontWeights.medium};
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  }

  & .movie__adult {
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => props.theme.borders.normal} red;
    color: red;
    border-radius: ${props => props.theme.radii.medium};
    padding: 6px 10px;
    font-weight: ${props => props.theme.fontWeights.medium};
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  }
`;

export const SelectTrailerStyled = styled(SelectStyled)`
  & > select {
    width: 100%;
    margin: 0 auto 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 614px;
    }
  }
`;
