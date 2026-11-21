import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiCompass, FiHome, FiShoppingBag } from "react-icons/fi";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import { NotFoundWrapper } from "./styles";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <AppTemplate pageTitle={t("notFound.pageTitle")}>
      <NotFoundWrapper>
        <div className="not-found-card">
          <div className="icon-badge">
            <FiCompass />
          </div>
          <div className="error-code" dir="ltr">
            4<span>0</span>4
          </div>
          <h1>{t("notFound.title")}</h1>
          <p>{t("notFound.description")}</p>
          <div className="actions-group">
            <Link to={PathConstants.HOME} className="btn-home">
              <FiHome size={16} />
              <span>{t("common.backToHome")}</span>
            </Link>
            <Link to={PathConstants.PRODUCTS} className="btn-products">
              <FiShoppingBag size={16} />
              <span>{t("common.exploreProducts")}</span>
            </Link>
          </div>
        </div>
      </NotFoundWrapper>
    </AppTemplate>
  );
};

export default PageNotFound;