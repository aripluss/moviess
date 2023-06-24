import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'layout/index';

export const Layout = () => {
  return (
    <div className="">
      <Header />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
