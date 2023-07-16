import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useTranslation } from 'react-i18next';

import { getTrending } from 'service/api';
import { Loader, MovieListItem } from 'components/index';

import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { MoviesListStyled } from 'components/MoviesList/MoviesList.styled';

const HomePage = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(
    location.state?.currentPage || 1
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const trendMoviesData = await getTrending(currentPage);

        setMovies(trendMoviesData.results);
        setTotalPages(trendMoviesData.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentPage, i18n.language]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  function handlePageChange(page) {
    setCurrentPage(page);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection style={{ flexGrow: 1 }}>
        <StyledContainer>
          <h1 style={{ marginBottom: '40px' }}>{t('homePageTitle')}</h1>

          {Boolean(movies.length) && (
            <>
              <MoviesListStyled style={{ marginBottom: 40 }}>
                {Boolean(movies.length > 0) &&
                  movies.map(movie => {
                    return (
                      <MovieListItem
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

export default HomePage;
