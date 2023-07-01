import { createGlobalStyle } from 'styled-components';

import backgroundImage from 'images/body-background.jpg';

export const GlobalStyles = createGlobalStyle`
  :root {
    --pagination-color: ${props => props.theme.colors.accentPrimary};
    --pagination-hover-color: ${props => props.theme.colors.accentPrimary};
    --pagination-bg: ${props => props.theme.colors.backgroundColor};
   }

 html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.fontSizes.m};
  font-style: normal;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundColor};
  background-image: url(${backgroundImage});
  color: ${({ theme }) => theme.colors.text};
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul,
ol {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
button {
  padding: 0;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: ${props => props.theme.colors.accentPrimary};
  transition: color ${props => props.theme.transition};
}
a:hover,
a:focus-visible {
  color: ${props => props.theme.colors.accentSecondary};
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #313131;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.accentSecondary};
    border-radius: ${props => props.theme.radii.normal};
  }
`;
