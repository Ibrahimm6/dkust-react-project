const environment = {
  // Local Storage & Cookies Keys
  lang: "_lang",
  localLang: "lang",
  TOKEN_KEY: "token",
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
  register: "auth/register",
  verifyEmail: "auth/verify-email",
  resendVerification: "auth/resend-verification",
  login: "auth/login",
  logout: "auth/logout",
  refresh: "auth/refresh",

  // Base API URL
  API_URL: "https://api-commerce.learnsou.com",
};

export default environment;