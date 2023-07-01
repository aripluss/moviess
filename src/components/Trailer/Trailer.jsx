import { StyledTrailerIframe } from './Trailer.styled';

export const Trailer = ({ trailerLink }) => {
  const BASE_TRAILER_URL = 'https://www.youtube.com/embed/';

  return (
    <StyledTrailerIframe
      title="Movie Trailer"
      src={`${BASE_TRAILER_URL}${trailerLink}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></StyledTrailerIframe>
  );
};
