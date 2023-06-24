import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'service/api';
import { Loader } from 'components/index';

import { StyledMovieDetailsContainer } from './MovieDetailsPage.styled';
import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { LinkButton } from 'components/LinkButton/LinkButton.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    (async function () {
      try {
        setIsLoading(true);

        const movieDetails = await getMovieDetails(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const isCastVisible = location.pathname.includes('cast');
  const isReviewsVisible = location.pathname.includes('reviews');

  const {
    poster_path,
    title,
    tagline,
    adult,
    release_date,
    vote_average,
    overview,
    genres,
    production_countries,
  } = movieDetails;

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection style={{ paddingBottom: '0' }}>
        <StyledContainer>
          <LinkButton to={location.state?.from ?? '/'}>Go back</LinkButton>

          <StyledMovieDetailsContainer>
            <img
              className="movie__poster"
              alt={`${title} poster`}
              src={poster_path}
              loading="lazy"
            />
            <div className="movie__content">
              <div className="movie__title-wrapper">
                <h1>{title}</h1>
                {vote_average && (
                  <div className="movie__rating">{vote_average}</div>
                )}
                {adult && <div className="movie__adult">18+</div>}
              </div>
              {tagline && <i>{tagline}</i>}
              {release_date && (
                <p>
                  <b>Year:</b> <span>{release_date}</span>
                </p>
              )}
              {genres && (
                <p>
                  <b>Genres:</b> <span>{genres}</span>
                </p>
              )}
              {production_countries && (
                <p>
                  <b>Countries:</b> <span>{production_countries}</span>
                </p>
              )}
              {overview && (
                <p>
                  <b>Overview:</b> <span>{overview}</span>
                </p>
              )}
            </div>
          </StyledMovieDetailsContainer>

          <nav
            style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
          >
            <LinkButton
              state={{ from: location.state?.from ?? '/' }}
              to={isCastVisible ? '' : 'cast'}
            >
              {isCastVisible ? 'Hide Cast' : 'Show Cast'}
            </LinkButton>

            <LinkButton
              state={{ from: location.state?.from ?? '/' }}
              to={isReviewsVisible ? '' : 'reviews'}
            >
              {isReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
            </LinkButton>
          </nav>
        </StyledContainer>
      </StyledSection>

      <StyledSection>
        <StyledContainer>
          <Outlet />

          {/* <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>

          (without Layout) */}
        </StyledContainer>
      </StyledSection>
    </>
  );
};

export default MovieDetailsPage;
