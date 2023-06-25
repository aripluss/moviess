import { useTranslation } from 'react-i18next';

import { StyledLoader } from './Loader.styled';
import logo from 'images/moviess-logo.png';

export const Loader = () => {
  const { t } = useTranslation();

  return (
    <StyledLoader>
      <div className="loading__spinner"></div>
      <img className="loading__logo" src={logo} alt="logo" />
      <p className="loading__text">{t('loaderText')}</p>
    </StyledLoader>
  );
};
