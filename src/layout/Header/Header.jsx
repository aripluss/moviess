import { Link } from 'react-router-dom';

import logo from 'images/moviess-logo.png';

import { StyledHeader } from './Header.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { StyledNavLink } from 'components/App.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <nav className="nav">
          <Link to="/">
            <img alt="logo" src={logo} width={80} />
          </Link>

          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
};
