import React from "react";
import PathConstants from "./pathConstants";

const HomePage = React.lazy(() => import("../pages/home"));
const LoginPage = React.lazy(() => import("../components/LoginForm"));
const RegisterPage = React.lazy(() => import("../pages/register"));
const ProductsPage = React.lazy(() => import("../pages/products"));
const ProductDetailsPage = React.lazy(() => import("../pages/product-details"));
const QuizPage = React.lazy(() => import("../pages/quiz"));
const WishlistPage = React.lazy(() => import("../pages/wishlist"));
const ProfilePage = React.lazy(() => import("../pages/profile"));
const CartPage = React.lazy(() => import("../pages/cart"));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> }, 
  { path: PathConstants.LOGIN, element: <LoginPage /> },
  { path: PathConstants.REGISTER, element: <RegisterPage /> },
  { path: PathConstants.PRODUCTS, element: <ProductsPage /> },
  { path: PathConstants.PRODUCT_DETAILS, element: <ProductDetailsPage /> },
  { path: PathConstants.QUIZ, element: <QuizPage /> },
  { path: PathConstants.WISHLIST, element: <WishlistPage /> },
  { path: PathConstants.PROFILE, element: <ProfilePage /> },
  { path: PathConstants.CART, element: <CartPage /> },
];

export default routes;