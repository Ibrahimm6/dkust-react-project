import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "../Header"; 
import Footer from "../Footer";

const AppTemplate = ({
  pageTitle,
  pageDescription,
  path,
  navbar = true,
  footer = true,
  children,
}) => {
  const location = useLocation();
  const canonicalPath = path || location.pathname || "/";
  
  const title = pageTitle ? `${pageTitle} | DKUST` : "DKUST";
  const description = pageDescription || "DKUST React Project";

  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalPath} />
      </Helmet>

      {navbar && <Header />}
      
      <main className="app-main flex-grow-1 d-flex flex-column">
        {children}
      </main>

      {footer && <Footer />}
    </div>
  );
};

export default AppTemplate;