import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";

const Layout = () => {
  return (
    <Suspense fallback={<div className="d-flex justify-content-center p-5 text-success fw-bold">Loading...</div>}>
      <ScrollToTop />
      
      <Outlet />
    </Suspense>
  );
};

export default Layout;