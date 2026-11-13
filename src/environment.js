const environment = {
  // Local Storage & Cookies Keys
  lang: "_lang",
  localLang: "lang",
  TOKEN_KEY: "token",
  REFRESH_TOKEN_KEY: "refreshToken",
  USER_KEY: "dkust_user",

  // App Info
  appName: "DKUST",
  siteUrl: process.env.REACT_APP_SITE_URL || "http://localhost:3000",

  // API ENDPOINTS
  faqs: "faqs",
  products: "products",
  services: "services",
  quiz: "quiz",
  posts: "posts",
  users: "users",
  cart: "cart",
  favorites: "favorites",
  orders: "orders",
  messages: "messages",
  subscribers: "subscribers",

  // auth
  register: "auth/register",
  verifyEmail: "auth/verify-email",
  resendVerification: "auth/resend-verification",
  login: "auth/login",
  logout: "auth/logout",
  refresh: "auth/refresh",
  forgotPassword: "auth/forgot-password",

  // this endpoint does not exist in the backend, but it is here in case we need to use it in the future
  about: "about",

  // Base API URL
  API_URL: "https://api-commerce.learnsou.com",
};

export default environment;
