import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout';
import routes from './routes';
import PageNotFound from './pages/page-not-found';
import { WishlistProvider } from './contexts/wishlistContext';

const router = createBrowserRouter([
  {
    element: <Layout />, 
    errorElement: <PageNotFound />,
    children: [
      ...routes,
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </HelmetProvider>
  );
}

export default App;