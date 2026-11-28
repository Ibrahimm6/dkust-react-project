<div align="center">

# DKUST — Smart Technology & E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Cloudflare%20Pages-00a651?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://dkust-react-project.pages.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.x-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![i18next](https://img.shields.io/badge/i18next-EN%20%7C%20AR%20(RTL)-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

A modern, responsive, and bilingual (**English / Arabic with full RTL**) web application for **DKUST**—an e-commerce and technology solutions platform featuring AI-driven software, robotics systems, hardware kits, and cybersecurity products.

[Explore Live Demo](https://dkust-react-project.pages.dev/) · [Report Bug](https://github.com/Ibrahimm6/dkust-react-project/issues) · [Request Feature](https://github.com/Ibrahimm6/dkust-react-project/issues)

</div>

---

## ✨ Key Features

### 🔐 Authentication & Account Management
- **Two-Step Registration Flow:** Separates core account credentials from optional profile details (`phone`, `location`, `bio`) with Yup validation, a live password strength meter, and automatic profile synchronization (`PATCH /profile`) upon first login.
- **Email Verification & Password Recovery:** 6-digit OTP verification with clipboard paste support and a resend countdown timer, alongside complete Forgot Password and Reset Password flows.
- **JWT Session & Auto-Refresh:** Cookie-based token management paired with an Axios response interceptor that seamlessly refreshes expired access tokens.
- **Protected Routes:** Guards `/profile`, `/cart`, and `/wishlist`, redirecting unauthenticated visitors to `/login` and returning them to their original destination after sign-in.

### 🛒 E-Commerce & State Management
- **Product Catalog:** Category filtering (`Software`, `AI`, `Hardware`, `Robotics`, `Security`), multi-criteria sorting (price ascending/descending, top rated), and Grid/List view switching.
- **Product Details:** Full product specifications, interactive quantity controls, related products carousel, and quick **Add to Cart** / **Buy Now** actions.
- **Cart & Wishlist (Redux Toolkit):** Optimistic UI updates with automatic rollback on API errors, live header counter badges, and end-to-end order checkout.
- **User Profile Dashboard:** Inline and full-form profile editing, password updates, live account statistics, and localized order history.

### 🌍 Internationalization (i18n) & Mobile-First UX
- **Bilingual (EN / AR):** Instant language switching powered by `i18next`, persisted in `localStorage`, with automatic `dir="rtl"` / `dir="ltr"` and logical CSS properties.
- **Mobile-Optimized Design:** Clean mobile navigation drawer with backdrop & scroll-lock, horizontally scrollable category filter chips, and thumb-zone sticky bottom action bars on Cart and Product Details pages.
- **Interactive Extras:** Knowledge Quiz with live scoring, API-driven Services page, Blog, Contact Us form, Newsletter subscription, and a custom 404 page.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | React 19, React Router v7 (`createBrowserRouter`, `React.lazy`) |
| **State Management** | Redux Toolkit, React Redux, React Context API (`AuthContext`) |
| **Styling & UI** | Styled Components, Bootstrap 5, React Icons, FontAwesome, Swiper |
| **Forms & Validation** | Formik, Yup |
| **Networking** | Axios (with JWT & Refresh Token interceptors), `js-cookie` |
| **Localization & SEO** | `i18next`, `react-i18next`, `react-helmet-async` |
| **Animations** | `react-countup`, `react-intersection-observer` |
| **Deployment** | Cloudflare Pages (Automated CI/CD via GitHub) |

---

## 📁 Project Structure

```text
src/
├── assets/
│   ├── fonts/          # Local Inter webfont files
│   ├── locals/         # i18next setup & en/ar translation.json files
│   └── styles/         # Global CSS tokens, reset, and RTL rules
├── components/
│   ├── app-template/   # Page shell with Helmet SEO, Header & Footer
│   ├── cart/           # CartItem, OrderSummary, EmptyCart
│   ├── common/         # AuthCard, HeroSection, InfoCard, ProductCardProvider, ProductsSwiper, Inputs & Buttons
│   ├── footer/         # Responsive footer with newsletter subscription
│   ├── header/         # Sticky navbar, mobile drawer & language switcher
│   ├── home/           # Hero, TrendingProducts, Features, CTA sections
│   ├── layout/         # Root router layout, Suspense & auth-synced Redux hydration
│   └── profile/        # ProfileHero, Stats, ProfileInfo, OrderHistory, UpdatePassword, QuickActions
├── constants/          # Responsive device breakpoints
├── context/            # AppProviders & AuthContext / AuthProvider
├── helpers/            # Cookies, localStorage, product localization mappers, ScrollToTop
├── pages/              # Route-level lazy-loaded pages
├── routes/             # Route definitions, PathConstants & ProtectedRoute
├── services/           # Axios HTTP wrapper & modular API services
├── store/              # Redux Toolkit store, cartSlice & wishlistSlice
└── validations/        # Yup validation schemas
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `v18+` (tested on Node `v22`)
- **npm** `v9+`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ibrahimm6/dkust-react-project.git
   cd dkust-react-project
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   > **Note:** `--legacy-peer-deps` resolves an optional TypeScript peer dependency mismatch between `react-scripts@5` and `i18next@26`.

3. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode with hot reload. |
| `npm run build` | Builds the production bundle into the `build/` folder. |
| `npm test` | Launches the test runner in interactive watch mode. |

---

## 🎨 Code Style & Collaboration

This project enforces **Prettier** globally to maintain consistent formatting and prevent merge conflicts across the team. Please format your changes with Prettier before opening a Pull Request.

---

## ☁️ Deployment

The application is deployed on **Cloudflare Pages** with automatic CI/CD builds on every push to `main` and live preview URLs on Pull Requests:

- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Environment variable:** `NPM_CONFIG_LEGACY_PEER_DEPS=true` (or `.npmrc` with `legacy-peer-deps=true`)

---

## 📄 License

Developed as part of the Frontend Web Development program. All rights reserved © **DKUST**.