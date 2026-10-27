import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const AppTemplate = ({
  pageTitle,
  pageDescription,
  path,
  children,
}) => {
  const location = useLocation();
  const canonicalPath = path || location.pathname || "/";
  const title = pageTitle ? `${pageTitle} | DKUST` : "DKUST";
  const description = pageDescription || "DKUST React Project";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalPath} />
      </Helmet>
      
      {children}
    </>
  );
};

export default AppTemplate;