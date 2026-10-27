import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";
import Header from "../header";
import Footer from "../footer";

const Layout = () => {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <ScrollToTop />
      
      <Header />

      <main className="app-main flex-grow-1 d-flex flex-column">
        <Suspense fallback={<div className="d-flex justify-content-center p-5 text-success fw-bold">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;