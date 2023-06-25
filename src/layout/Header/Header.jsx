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
        <nav className="nav">
          <Link to="/">
            <img
              alt="logo"
              src={logo}
              width={80}
              style={{ alignSelf: 'center', padding: 5 }}
            />
          </Link>

          <StyledNavLink to="/">{t('headerHome')}</StyledNavLink>
          <StyledNavLink to="/movies">{t('headerMovies')}</StyledNavLink>
        </nav>

        <div style={{ display: 'flex', gap: '60px' }}>
          <LanguageSelector />
          <ThemeSwitcher />
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
