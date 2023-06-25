import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'layout/index';

import { PageWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <PageWrapper>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </PageWrapper>
  );
};
