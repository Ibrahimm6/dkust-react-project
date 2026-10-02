import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout';
import routes from './routes';
import PageNotFound from './pages/page-not-found';
const router = createBrowserRouter([
  {
    element: <Layout />, 
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />, 
      },
      ...routes, 
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;