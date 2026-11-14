import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../../routes/pathConstants";
import { AuthProviderWrapper } from "./styles";

const AuthProvider = ({
  title,
  description,
  icon,
  alertMessage,
  alertType = "danger",
  showSocial = false,
  footerText,
  footerLinkText,
  footerLinkTo,
  backLinkText = "Back to Home",
  backLinkTo = PathConstants.HOME,
  maxWidth = "480px",
  centered = false,
  $theme = "var(--color-page-bg)",
  children,
}) => {
  return (
    <AuthProviderWrapper
      $maxWidth={maxWidth}
      $centered={centered}
      $theme={$theme}
    >
      <div className="auth-card">
        {icon && <div className="auth-icon-box">{icon}</div>}
        {title && <h2 className="auth-title">{title}</h2>}
        {description && <p className="auth-description">{description}</p>}

        {alertMessage && (
          <div
            className={`alert alert-${alertType} py-2 small text-center`}
            role="alert"
          >
            {alertMessage}
          </div>
        )}

        {children}

        {showSocial && (
          <>
            <div className="auth-divider">or continue with</div>
            <div className="auth-social-grid">
              <button type="button">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  width="18"
                />
                <span>Google</span>
              </button>
              <button type="button">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </button>
            </div>
          </>
        )}

        {footerText && footerLinkTo && (
          <div className="auth-footer-text">
            {footerText} <Link to={footerLinkTo}>{footerLinkText}</Link>
          </div>
        )}
      </div>

      {backLinkTo && (
        <Link to={backLinkTo} className="auth-back-link">
          {backLinkText}
        </Link>
      )}
    </AuthProviderWrapper>
  );
};

export default AuthProvider;
