import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./auth/AuthProvider";

export const AppProviders = ({ children }) => {
  return (
    <HelmetProvider>
      <AuthProvider>{children}</AuthProvider>
    </HelmetProvider>
  );
};