import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

import { getMovieCredits } from 'service/api';
import { Loader } from 'components/index';

import { StyledCastList } from './Cast.styled';

const Cast = () => {
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
    <>
      {isLoading && <Loader />}

      {!isLoading && !error && !movieCast.length && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Sorry, no information yet
        </p>
      )}

      {Boolean(movieCast.length) && (
        <StyledCastList>
          {movieCast.map(castMember => {
            const { profile_path, character, name } = castMember;
            return (
              <li className="cast__card" key={name}>
                <img
                  className="cast__poster"
                  src={profile_path}
                  alt={name}
                  loading="lazy"
                />
                <p>
                  <b>Character:</b> {character}
                </p>
                <p>
                  <b>Name:</b> {name}
                </p>
              </li>
            );
          })}
        </StyledCastList>
      )}

      <Toaster />
    </>
  );
};

export default Cast;
