import React from "react";
import PathConstants from "./pathConstants";

const LoginPage = React.lazy(() => import("../components/LoginForm"));
const RegisterPage = React.lazy(() => import("../pages/register"));
const ProductsPage = React.lazy(() => import("../pages/products"));
const ProductDetailsPage = React.lazy(() => import("../pages/product-details"));
const QuizPage = React.lazy(() => import("../pages/quiz"));

const routes = [
  { path: PathConstants.LOGIN, element: <LoginPage /> },
  { path: PathConstants.REGISTER, element: <RegisterPage /> },
  { path: PathConstants.PRODUCTS, element: <ProductsPage /> },
  { path: PathConstants.PRODUCT_DETAILS, element: <ProductDetailsPage /> },
  { path: PathConstants.QUIZ, element: <QuizPage /> },
];

export default routes;