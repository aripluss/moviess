import styled from 'styled-components';

export const StyledMovieListCard = styled.li`
  width: calc((100% - 20px) / 2);
  height: auto;
  border-radius: ${props => props.theme.radii.medium};
  gap: 20px;
  text-align: center;
  color: ${props => props.theme.colors.accentSecondary};

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: calc((100% - 60px) / 4);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    width: calc((100% - 80px) / 5);
  }

  & .movie-card__poster {
    width: 100%;
    height: 212px;
    object-fit: cover;
    border-radius: ${props => props.theme.radii.medium};

    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
      height: 265px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
      height: 360px;
    }
  }

  & .movie-card__hover-mask {
    display: block;
    position: relative;
    background-color: #b2b2b2;
    border-radius: ${props => props.theme.radii.medium};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      border-radius: ${props => props.theme.radii.medium};
      transition: opacity ${props => props.theme.transition};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='50' height='50' viewBox='0 0 30 30' version='1.1'%3e%3cg id='surface1'%3e%3cpath style=' stroke:none;fill-rule:nonzero;fill:%23fff;fill-opacity:1;' d='M 12.75 6.996094 C 13.21875 6.417969 13.5 5.679688 13.5 4.875 C 13.5 3.011719 11.988281 1.5 10.125 1.5 C 8.261719 1.5 6.75 3.011719 6.75 4.875 C 6.75 5.679688 7.03125 6.417969 7.5 6.996094 L 7.5 4.867188 C 7.5 3.421875 8.675781 2.25 10.125 2.25 C 11.570312 2.25 12.75 3.421875 12.75 4.867188 Z M 14.621094 22.5 C 17.730469 22.5 20.246094 19.8125 20.246094 16.875 C 20.246094 16.875 20.246094 18.609375 20.246094 16.875 L 20.246094 12.378906 C 20.246094 11.757812 19.75 11.25 19.121094 11.25 C 18.5 11.25 17.996094 11.753906 17.996094 12.378906 L 17.996094 12.75 L 17.246094 12.75 L 17.246094 10.878906 C 17.246094 10.257812 16.75 9.75 16.121094 9.75 C 15.5 9.75 14.996094 10.253906 14.996094 10.878906 L 14.996094 12 L 14.246094 12 L 14.246094 10.128906 C 14.246094 9.507812 13.75 9 13.121094 9 C 12.5 9 11.996094 9.503906 11.996094 10.128906 L 11.996094 12.75 L 11.246094 12.75 L 11.246094 4.878906 C 11.246094 4.257812 10.75 3.75 10.121094 3.75 C 9.5 3.75 8.996094 4.25 8.996094 4.878906 L 8.996094 13.351562 C 7.453125 11.699219 5.421875 9.882812 4.589844 10.722656 C 3.773438 11.542969 5.875 13.800781 8.808594 18.738281 C 10.132812 20.960938 11.804688 22.5 14.621094 22.5 Z M 21 16.875 C 21 20.394531 18.144531 23.25 14.625 23.25 C 12.289062 23.25 9.828125 22.160156 8.128906 19.070312 C 5.683594 14.609375 2.550781 11.6875 4.042969 10.199219 C 5.109375 9.132812 6.78125 10.15625 8.25 11.527344 L 8.25 4.882812 C 8.25 3.835938 9.089844 3 10.125 3 C 11.167969 3 12 3.839844 12 4.882812 L 12 8.625 C 12.3125 8.390625 12.703125 8.253906 13.125 8.253906 C 13.9375 8.253906 14.621094 8.761719 14.886719 9.472656 C 15.214844 9.179688 15.648438 9.003906 16.125 9.003906 C 17.167969 9.003906 18 9.839844 18 10.875 L 18 10.882812 C 18.3125 10.648438 18.703125 10.511719 19.125 10.511719 C 20.167969 10.511719 21 11.351562 21 12.386719 Z M 21 16.875 '/%3e%3c/g%3e%3c/svg%3e")
        no-repeat center center;
      opacity: 0;
      border-radius: ${props => props.theme.radii.medium};
      z-index: 1;
      transition: opacity ${props => props.theme.transition};
    }

    &:hover:before,
    &:hover:after {
      opacity: 1;
    }

    &:hover .movie-card__poster {
      filter: grayscale(0.8);
      transition: filter ${props => props.theme.transition};
    }
  }

  & .movie-card__content {
    padding: 10px;
  }
`;
