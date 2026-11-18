import React from "react";
import { Link } from "react-router-dom";
import { FiCompass, FiHome, FiShoppingBag } from "react-icons/fi";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import { NotFoundWrapper } from "./styles";

const PageNotFound = () => {
  return (
    <AppTemplate pageTitle="Page Not Found">
      <NotFoundWrapper>
        <div className="not-found-card">
          <div className="icon-badge">
            <FiCompass />
          </div>
          <div className="error-code">
            4<span>0</span>4
          </div>
          <h1>Page Not Found</h1>
          <p>
            The page you are looking for might have been moved, deleted, or
            never existed.
          </p>
          <div className="actions-group">
            <Link to={PathConstants.HOME} className="btn-home">
              <FiHome size={16} />
              <span>Back to Home</span>
            </Link>
            <Link to={PathConstants.PRODUCTS} className="btn-products">
              <FiShoppingBag size={16} />
              <span>Explore Products</span>
            </Link>
          </div>
        </div>
      </NotFoundWrapper>
    </AppTemplate>
  );
};

export default PageNotFound;