import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from 'images/moviess-logo.png';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

import { StyledHeader, StyledHeaderContainer } from './Header.styled';
import { StyledNavLink } from 'components/App.styled';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Link to="/" style={{ display: 'flex' }} className={'logo'}>
          <img
            alt="logo"
            src={logo}
            width={80}
            height="auto"
            style={{ alignSelf: 'center', padding: 5 }}
          />
        </Link>

        <nav className="nav">
          <StyledNavLink to="/">{t('headerHome')}</StyledNavLink>
          <StyledNavLink to="/movies">{t('headerMovies')}</StyledNavLink>
        </nav>

        <div className={'language'}>
          <LanguageSelector />
        </div>
        <div className={'theme'}>
          <ThemeSwitcher />
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
