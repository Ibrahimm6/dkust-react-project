import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppProviders } from "./context/AppProviders";
import Layout from "./components/layout";
import routes from "./routes";
import PageNotFound from "./pages/page-not-found";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [...routes],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </Provider>
  );
}

export default App;