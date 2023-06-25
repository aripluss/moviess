import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledMovieListCard } from './MovieListItem.styled';

export const MovieListItem = ({
  id,
  title,
  poster_path,
  location,
  currentPage = 1,
}) => {
  return (
    <StyledMovieListCard>
      <Link
        state={{
          from: location,
          currentPage: currentPage,
        }}
        to={{
          pathname: '/movies/' + id,
        }}
      >
        <div className="movie-card__hover-mask">
          <img
            className="movie-card__poster"
            src={poster_path}
            alt={title + 'poster'}
            loading="lazy"
          />
        </div>
        <div className="movie-card__content">
          <p>{title}</p>
        </div>
      </Link>
    </StyledMovieListCard>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  location: PropTypes.object,
};
