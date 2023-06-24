import { StyledFooter } from './Footer.styled';
import { StyledContainer } from 'components/Container/Container.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer className="footer__container">
        <p>
          © {new Date().getFullYear()} Moviess — your favorite movies and
          series.
          <br />
          All rights reserved.
        </p>

        <p>
          Site developed by{' '}
          <a
            href="https://github.com/aripluss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iryna Pomeshkina
          </a>
        </p>
      </StyledContainer>
    </StyledFooter>
  );
};
