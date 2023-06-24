import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { getTrending } from 'service/api';
import { Loader, MovieListItem } from 'components/index';

import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { MoviesListStyled } from 'components/MoviesList/MoviesList.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const trendMovies = await getTrending();

        setMovies(trendMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection>
        <StyledContainer>
          <h1 style={{ marginBottom: '40px' }}>Today's trending movies</h1>

          {Boolean(movies.length) && (
            <MoviesListStyled>
              {Boolean(movies.length > 0) &&
                movies.map(movie => {
                  return <MovieListItem {...movie} key={movie.id} />;
                })}
            </MoviesListStyled>
          )}
        </StyledContainer>
      </StyledSection>

      <Toaster />
    </>
  );
};

export default HomePage;
