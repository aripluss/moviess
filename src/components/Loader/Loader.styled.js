import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: fixed;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 180px;
  z-index: 99;
  transition: opacity 300ms;

  & .loading__spinner {
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: ${props => props.theme.radii.round};
    border-top: 7px transparent solid;
    border-left: 7px solid ${props => props.theme.colors.accentPrimary};
    border-bottom: 4px solid ${props => props.theme.colors.accentPrimary};
    animation: rotate 1s cubic-bezier(0, 0, 1, 0.7) infinite;

    &:after {
      content: '';
      position: absolute;
      border-radius: ${props => props.theme.radii.round};
      height: 6px;
      width: 6px;
      background-color: ${props => props.theme.colors.accentPrimary};
      top: 7px;
      left: 7px;
    }
  }

  & .loading__logo {
    position: absolute;
    top: 33%;
    left: 53%;
    transform: translate(-50%, -50%);
    width: 50px;
  }

  & .loading__text {
    font-weight: bold;
    color: ${props => props.theme.colors.accentSecondary};
    text-align: center;
    margin-top: 15px;
    animation: colorchange 5s linear infinite;
  }

  @keyframes colorchange {
    0% {
      color: ${props => props.theme.colors.accentSecondary};
    }
    50% {
      color: ${props => props.theme.colors.accentPrimary};
    }
    100% {
      color: ${props => props.theme.colors.accentSecondary};
    }
  }

  @keyframes rotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
