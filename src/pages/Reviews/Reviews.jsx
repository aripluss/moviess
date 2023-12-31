import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { getMovieReviews } from 'service/api';
import { Loader } from 'components/index';

import { StyledReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { t } = useTranslation();

  const [movieReviews, setMovieReviews] = useState([]);
  const [commentStates, setCommentStates] = useState({});

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

  const formatText = inputText => {
    // Заміна ** на жирне форматування
    const boldText = inputText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Заміна _ на курсивне форматування
    const formattedText = boldText.replace(/_(.*?)_/g, '<em>$1</em>');
    // Заміна посилань в форматі <a href=""></a>
    const linkedText = formattedText.replace(
      /<a href="(.*?)">(.*?)<\/a>/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$2</a>'
    );

    return { __html: linkedText };
  };

  const toggleComment = commentId => {
    setCommentStates(prevState => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      {isLoading && <Loader />}

      {!isLoading && !error && !movieReviews.length && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {t('reviewsNoReviews')}
        </p>
      )}

      {Boolean(movieReviews.length) && (
        <StyledReviewsList>
          {movieReviews.map(review => {
            const { id, author, content } = review;
            const isExpanded = commentStates[id] || false;

            return (
              <li key={author} className="review__card">
                <p>
                  <span className="highlight">{t('reviewsAuthor')}: </span>
                  {author}
                </p>
                <p>
                  <span className="highlight">{t('reviewsContent')}: </span>

                  <span
                    dangerouslySetInnerHTML={
                      isExpanded
                        ? formatText(content)
                        : formatText(content.slice(0, 500) + '...')
                    }
                  ></span>

                  {content.length > 500 && (
                    <button
                      className="readMore"
                      onClick={() => toggleComment(id)}
                    >
                      {isExpanded
                        ? t('reviewsCollapseContent')
                        : t('reviewsReadMore')}
                    </button>
                  )}
                </p>
              </li>
            );
          })}
        </StyledReviewsList>
      )}

      <Toaster />
    </div>
  );
};

export default Reviews;
