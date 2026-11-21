import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PathConstants from "../../../routes/pathConstants";
import { AuthCardWrapper } from "./styles";

const AuthCard = ({
  title,
  description,
  icon,
  alertMessage,
  alertType = "danger",
  showSocial = false,
  footerText,
  footerLinkText,
  footerLinkTo,
  backLinkText,
  backLinkTo = PathConstants.HOME,
  maxWidth = "480px",
  centered = false,
  $theme = "var(--color-page-bg)",
  children,
}) => {
  const { t } = useTranslation();

  return (
    <AuthCardWrapper
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
            <div className="auth-divider">{t("auth.orContinueWith")}</div>
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
          {backLinkText || t("common.backToHome")}
        </Link>
      )}
    </AuthCardWrapper>
  );
};

export default AuthCard;