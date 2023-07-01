import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getMovieDetails } from 'service/api';
import { Loader } from 'components/index';
import { Trailer } from '../../components/Trailer/Trailer';

import {
  SelectTrailerStyled,
  StyledMovieDetailsContainer,
} from './MovieDetailsPage.styled';
import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { LinkButton } from 'components/LinkButton/LinkButton.styled';

const MovieDetailsPage = () => {
  const { i18n, t } = useTranslation();
  const { movieId } = useParams();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [currentTrailerLink, setCurrentTrailerLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    (async function () {
      try {
        setIsLoading(true);

        const movieDetails = await getMovieDetails(movieId);

        setMovieDetails(movieDetails);
        setMovieTrailers(movieDetails.videos);
        setCurrentTrailerLink(movieDetails.videos[0].key);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId, i18n.language]);

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
          <LinkButton
            to={location.state?.from ?? '/'}
            state={{ currentPage: location.state?.currentPage }}
          >
            {t('goBackBtn')}
          </LinkButton>

          {movieDetails && (
            <>
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
                      <b>{t('movieDetailsPageYear')}:</b>{' '}
                      <span>{release_date}</span>
                    </p>
                  )}
                  {genres && (
                    <p>
                      <b>{t('movieDetailsPageGenres')}:</b>{' '}
                      <span>{genres}</span>
                    </p>
                  )}
                  {production_countries && (
                    <p>
                      <b>{t('movieDetailsPageCountries')}:</b>{' '}
                      <span>{production_countries}</span>
                    </p>
                  )}
                  {overview && (
                    <p>
                      <b>{t('movieDetailsPageOverview')}:</b>{' '}
                      <span>{overview}</span>
                    </p>
                  )}
                </div>
              </StyledMovieDetailsContainer>

              {movieTrailers && movieTrailers.length > 0 && (
                <>
                  <SelectTrailerStyled>
                    <select
                      onChange={e => setCurrentTrailerLink(e.target.value)}
                    >
                      {movieTrailers.map(trailer => {
                        return (
                          <option value={trailer.key} key={trailer.key}>
                            [{trailer.type}] {trailer.name}
                          </option>
                        );
                      })}
                    </select>
                  </SelectTrailerStyled>
                  {currentTrailerLink && (
                    <Trailer trailerLink={currentTrailerLink} />
                  )}
                </>
              )}
            </>
          )}

          <nav
            style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
          >
            <LinkButton
              state={{
                from: location.state?.from ?? '/',
                currentPage: location.state?.currentPage,
              }}
              to={isCastVisible ? '' : 'cast'}
            >
              {isCastVisible
                ? `${t('movieDetailsPageHideCast')}`
                : `${t('movieDetailsPageShowCast')}`}
            </LinkButton>

            <LinkButton
              state={{
                from: location.state?.from ?? '/',
                currentPage: location.state?.currentPage,
              }}
              to={isReviewsVisible ? '' : 'reviews'}
            >
              {isReviewsVisible
                ? `${t('movieDetailsPageHideReviews')}`
                : `${t('movieDetailsPageShowReviews')}`}
            </LinkButton>
          </nav>
        </StyledContainer>
      </StyledSection>
      <StyledSection>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </StyledSection>
    </>
  );
};

export default MovieDetailsPage;
