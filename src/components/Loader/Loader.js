import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 180px;
  z-index: 99;
  transition: opacity 300ms;

  & .loading__spinner {
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border-top: 7px transparent solid;
    border-left: 7px solid #8250df;
    border-bottom: 4px solid #8250df;
    animation: rotate 1s cubic-bezier(0, 0, 1, 0.7) infinite;

    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      height: 6px;
      width: 6px;
      background-color: #8250df;
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
    color: #ffde59;
    text-align: center;
    margin-top: 15px;
    animation: colorchange 5s linear infinite;
  }

  @keyframes colorchange {
    0% {
      color: #ffde59;
    }
    50% {
      color: #8250df;
    }
    100% {
      color: #ffde59;
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
