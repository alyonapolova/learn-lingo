import { Suspense } from 'react';
import { AppNav } from './AppNav/AppNav';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container">
      <AppNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
