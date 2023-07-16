import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
          <LazyLoadImage
            className="movie-card__poster"
            src={poster_path}
            alt={title + 'poster'}
            effect="blur"
            wrapperProps={{ style: { display: 'block' } }}
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
