import React, { createContext, lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';

import i18n from '../languages/i18n';
import { routes } from 'service/routes';
import { Layout } from 'layout/Layout/Layout';
import { Loader } from 'components/index';

import { StyledSection } from './Section/Section.styled';
import { StyledContainer } from './Container/Container.styled';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { colors } from 'styles/colors';
import { MainStyled } from './App.styled';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

const { HOME, MOVIES, MOVIE_ID_DETAILS, CAST, REVIEWS } = routes;

export const ThemeContext = createContext();

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Записываем новую тему в локальное хранилище
      return newTheme;
    });
  };

  const normalizedTheme = { ...theme, ...colors[currentTheme] };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <ThemeProvider theme={normalizedTheme}>
          <GlobalStyles />

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path={HOME} element={<Layout />}>
                <Route exact index element={<HomePage />} />
                <Route exact path={'/' + MOVIES} element={<MoviesPage />} />
                <Route
                  exact
                  path={'/' + MOVIE_ID_DETAILS}
                  element={<MovieDetailsPage />}
                >
                  <Route exact path={CAST} element={<Cast />} />
                  <Route exact path={REVIEWS} element={<Reviews />} />
                </Route>
              </Route>

              <Route
                path="*"
                element={
                  <MainStyled>
                    <StyledSection>
                      <StyledContainer>
                        <PageNotFound />
                      </StyledContainer>
                    </StyledSection>
                  </MainStyled>
                }
              />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
};
