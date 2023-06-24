import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { routes } from 'service/routes';
import { Layout } from 'layout/Layout/Layout';
import { Loader } from 'components/index';

import { Page404Styled } from './App.styled';
import { StyledSection } from './Section/Section.styled';
import { StyledContainer } from './Container/Container.styled';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const { HOME, MOVIES, MOVIE_ID_DETAILS, CAST, REVIEWS } = routes;

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/' + MOVIES} element={<MoviesPage />} />
          <Route path={'/' + MOVIE_ID_DETAILS} element={<MovieDetailsPage />}>
            <Route path={CAST} element={<Cast />} />
            <Route path={REVIEWS} element={<Reviews />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <StyledSection>
              <StyledContainer>
                <Page404Styled>
                  404 Page Not Found. ➪ <Link to={HOME}>Go Home</Link>
                </Page404Styled>
              </StyledContainer>
            </StyledSection>
          }
        />
      </Routes>
    </Suspense>

    //////////////////// without Layout ////////////////////
    // <>
    //   <Header />

    //   <main>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />

    //       <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

    //       <Route path="/movies" element={<MoviesPage />} />

    //       <Route
    //         path="*"
    //         element={
    //           <StyledSection>
    //             <StyledContainer>
    //               <Page404Styled>
    //                 404 Page Not Found. ➪ <Link to="/">Go Home</Link>
    //               </Page404Styled>
    //             </StyledContainer>
    //           </StyledSection>
    //         }
    //       />
    //     </Routes>
    //   </main>

    //   <Footer />
    // </>
  );
};
