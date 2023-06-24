import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

import { getMovieReviews } from 'service/api';
import { Loader } from 'components/index';

import { StyledReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const movieReviews = await getMovieReviews(movieId);

        setMovieReviews(movieReviews);
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

      {!isLoading && !error && !movieReviews.length && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          No reviews yet
        </p>
      )}

      {Boolean(movieReviews.length) && (
        <StyledReviewsList>
          {movieReviews.map(review => {
            const { author, content } = review;
            return (
              <li key={author} className="review__card">
                <p>
                  <b>Author:</b> {author}
                </p>
                <p>
                  <b>Content:</b> {content}
                </p>
              </li>
            );
          })}
        </StyledReviewsList>
      )}

      <Toaster />
    </>
  );
};

export default Reviews;
