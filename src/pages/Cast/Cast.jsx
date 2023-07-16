import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { getMovieCredits } from 'service/api';
import { Loader } from 'components/index';

import { StyledCastList } from './Cast.styled';

const Cast = () => {
  const { t } = useTranslation();

  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const movieCast = await getMovieCredits(movieId);

        setMovieCast(movieCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  return (
    <div style={{ paddingTop: '40px' }}>
      {isLoading && <Loader />}

      {!isLoading && !error && !movieCast.length && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {t('сastNoInformation')}
        </p>
      )}

      {Boolean(movieCast.length) && (
        <StyledCastList>
          {movieCast.map(castMember => {
            const { profile_path, character, name } = castMember;
            return (
              <li className="cast__card" key={name}>
                <LazyLoadImage
                  className="cast__poster"
                  src={profile_path}
                  alt={name}
                  effect="blur"
                  wrapperProps={{ style: { display: 'block' } }}
                />
                <p>
                  <b>{t('сastCharacter')}:</b> {character}
                </p>
                <p>
                  <b>{t('сastName')}:</b> {name}
                </p>
              </li>
            );
          })}
        </StyledCastList>
      )}

      <Toaster />
    </div>
  );
};

export default Cast;
