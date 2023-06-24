import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #434148;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & .footer__container {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-size: 12px;
  }
`;
