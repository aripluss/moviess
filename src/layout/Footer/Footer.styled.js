import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.backgroundColorHeader};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-bottom-left-radius: ${props => props.theme.radii.large};
  border-bottom-right-radius: ${props => props.theme.radii.large};

  & .footer__container {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;
