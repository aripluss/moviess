import styled from 'styled-components';

export const StyledTrailerIframe = styled.iframe`
  display: block;
  width: 100%;
  height: 180px;
  margin: 0 auto 40px;
  border-radius: ${props => props.theme.radii.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 614px;
    height: 345px;
  }
`;
