import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";
import PathConstants from "./pathConstants";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={PathConstants.LOGIN}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;