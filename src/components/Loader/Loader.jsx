import { StyledLoader } from './Loader';
import logo from 'images/moviess-logo.png';

export const Loader = () => {
  return (
    <StyledLoader>
      <div className="loading__spinner"></div>
      <img className="loading__logo" src={logo} alt="logo" />
      <p className="loading__text">Loading...</p>
    </StyledLoader>
  );
};
