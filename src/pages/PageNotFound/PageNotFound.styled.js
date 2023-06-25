import styled, { keyframes } from 'styled-components';

const easeOutCubic = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
const easeOutExpo = 'cubic-bezier(0.190, 1.000, 0.220, 1.000)';

const slideDown = keyframes`
  0% { transform: translateY(-20%); }
  100% { transform: none; }
`;

const slideUp = keyframes`
  0% { transform: translateY(20%); }
  100% { transform: none; }
`;

const slideRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: none; }
`;

const slideLeft = keyframes`
  0% { transform: translateX(50%); }
  100% { transform: none; }
`;

const slideLeftSmall = keyframes`
  0% { transform: translateX(10%); }
  100% { transform: none; }
`;

const scaleXIn = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: none; }
`;

const zoomFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateZ(1000px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export const PageNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    width: 100%;
        > svg {
      height: 100%;
    }
    &:nth-child(1) {
    opacity: 0;
    transform: translateZ(1000px);
    animation: ${zoomFadeIn} 5000ms ${easeOutCubic} forwards;
    transform-origin: center center;

    .error-1-e {
      transform: translateX(-50%);
      animation: ${slideRight} 3000ms ${easeOutCubic} -500ms forwards;
    }
    .error-2-r {
      transform: translateY(-20%);
      animation: ${slideDown} 5000ms ${easeOutCubic} -500ms forwards;
    }
    .error-4-o {
      transform: translateX(10%);
      animation: ${slideLeftSmall} 3000ms ${easeOutCubic} -300ms forwards;
    }
    .error-5-r {
      transform: translateX(50%);
      animation: ${slideLeft} 3000ms ${easeOutCubic} -500ms forwards;
    }
    .error-2-0 {
      transform: translateY(20%);
      animation: ${slideUp} 5000ms ${easeOutCubic} -500ms forwards;
    }
    .error-top {
      transform: scaleX(0);
      transform-origin: 163px 3px;
      animation: ${scaleXIn} 4500ms ${easeOutExpo} 1500ms forwards;
    }
    .error-left {
      transform: scaleX(0);
      transform-origin: 75px 3px;
      animation: ${scaleXIn} 4500ms ${easeOutExpo} 1500ms forwards;
    }
    .error-right {
      transform: scaleX(0);
      transform-origin: 250px 3px;
      animation: ${scaleXIn} 4500ms ${easeOutExpo} 1500ms forwards;
    }
  }
`;

/* Copy-right by ARiyou2000 in May2020 */
