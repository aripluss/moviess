import { useTranslation } from 'react-i18next';

import { StyledFooter } from './Footer.styled';
import { StyledContainer } from 'components/Container/Container.styled';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledContainer className="footer__container">
        <p>
          © {new Date().getFullYear()} Moviess — {t('footerMotto')}
          <br />
          {t('footerRights')}
        </p>

        <p>
          {t('footerDevelopedBy')}{' '}
          <a
            href="https://github.com/aripluss"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('footerDeveloper')}
          </a>
        </p>
      </StyledContainer>
    </StyledFooter>
  );
};
