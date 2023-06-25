import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useTranslation } from 'react-i18next';

import { searchMoviesByQuery } from 'service/api';
import { Loader, MovieListItem, SearchForm } from 'components/index';

import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { MoviesListStyled } from 'components/MoviesList/MoviesList.styled';

const MoviesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(
    location.state?.currentPage || 1,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery || searchQuery === '') return;

    (async () => {
      try {
        setIsLoading(true);

        const queryData = { query: searchQuery, currentPage };

        const moviesByQuery = await searchMoviesByQuery(queryData);

        if (!moviesByQuery.results.length) {
          setError(`No movies found, please try another query.`);
          setMovies([]);
          return;
        }

        if (currentPage === 1) {
          toast.success(`Found ${moviesByQuery.total_results} movies!`);
        }

        setMovies(moviesByQuery.results);
        setTotalPages(moviesByQuery.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentPage, searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
    setCurrentPage(1);
  };

  function handlePageChange(page) {
    setCurrentPage(page);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection style={{ paddingBottom: '0' }}>
        <StyledContainer>
          <SearchForm defaultValue={searchQuery} onSubmit={onSubmit} />
        </StyledContainer>
      </StyledSection>

      <StyledSection style={{ flexGrow: 1 }}>
        <StyledContainer>
          {!isLoading && !error && !movies.length && (
            <p style={{ textAlign: 'center' }}>{t('moviesPageNoMovies')} </p>
          )}

          {Boolean(movies.length) && (
            <>
              <MoviesListStyled style={{ marginBottom: 40 }}>
                {movies.map(movie => {
                  return (
                    <MovieListItem
                      location={location}
                      {...movie}
                      key={movie.id}
                      currentPage={currentPage}
                    />
                  );
                })}
              </MoviesListStyled>

              <ResponsivePagination
                total={totalPages}
                current={currentPage}
                onPageChange={page => handlePageChange(page)}
              />
            </>
          )}
        </StyledContainer>
      </StyledSection>

      <Toaster />
    </>
  );
};

export default MoviesPage;
