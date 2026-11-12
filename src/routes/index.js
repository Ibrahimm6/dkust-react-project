import React from "react";
import PathConstants from "./pathConstants";

const HomePage = React.lazy(() => import("../pages/home"));
const LoginPage = React.lazy(() => import("../pages/login"));
const RegisterPage = React.lazy(() => import("../pages/register"));
const VerificationPage = React.lazy(() => import("../pages/verification"));
const ProductsPage = React.lazy(() => import("../pages/products"));
const ProductDetailsPage = React.lazy(() => import("../pages/product-details"));
const QuizPage = React.lazy(() => import("../pages/quiz"));
const WishlistPage = React.lazy(() => import("../pages/wishlist"));
const ProfilePage = React.lazy(() => import("../pages/profile"));
const CartPage = React.lazy(() => import("../pages/cart"));
const BlogPage = React.lazy(() => import("../pages/blog"));
const ForgotPasswordPage = React.lazy(() => import("../pages/forgot-password"));
const ResetPasswordPage = React.lazy(() => import("../pages/reset-password"));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.LOGIN, element: <LoginPage /> },
  { path: PathConstants.REGISTER, element: <RegisterPage /> },
  { path: PathConstants.VERIFY, element: <VerificationPage /> },
  { path: PathConstants.PRODUCTS, element: <ProductsPage /> },
  { path: PathConstants.PRODUCT_DETAILS, element: <ProductDetailsPage /> },
  { path: PathConstants.QUIZ, element: <QuizPage /> },
  { path: PathConstants.WISHLIST, element: <WishlistPage /> },
  { path: PathConstants.PROFILE, element: <ProfilePage /> },
  { path: PathConstants.CART, element: <CartPage /> },
  { path: PathConstants.BLOG, element: <BlogPage /> },
  { path: PathConstants.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: PathConstants.RESET_PASSWORD, element: <ResetPasswordPage /> },
];

export default routes;