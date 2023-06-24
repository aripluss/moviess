import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

import { searchMoviesByQuery } from 'service/api';
import { Loader, MovieListItem, SearchForm } from 'components/index';

import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { MoviesListStyled } from 'components/MoviesList/MoviesList.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (searchQuery === null || searchQuery === '') return;

    (async function () {
      try {
        setIsLoading(true);

        const moviesByQuery = await searchMoviesByQuery(searchQuery);

        if (!moviesByQuery.length) {
          setError(`No movies found, please try another query.`);
          setMovies([]);
          return;
        }

        toast.success(`Found ${moviesByQuery.length} movies!`);

        setMovies(moviesByQuery);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection style={{ paddingBottom: '0' }}>
        <StyledContainer>
          <SearchForm defaultValue={searchQuery} onSubmit={onSubmit} />
        </StyledContainer>
      </StyledSection>

      <StyledSection>
        <StyledContainer>
          {!isLoading && !error && !movies.length && (
            <p
              style={{
                textAlign: 'center',
              }}
            >
              Sorry, there are no movies...
            </p>
          )}

          {Boolean(movies.length) && (
            <MoviesListStyled>
              {movies.map(movie => {
                return (
                  <MovieListItem
                    location={location}
                    {...movie}
                    key={movie.id}
                  />
                );
              })}
            </MoviesListStyled>
          )}
        </StyledContainer>
      </StyledSection>

      <Toaster />
    </>
  );
};

export default MoviesPage;
