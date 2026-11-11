import React from "react";
import { CompactCardWrapper } from "./styles";
import { getProductBgColor } from "../../../../../helpers/product.helpers";

const CompactProductCard = ({ product }) => (
  <CompactCardWrapper
    to={`/products/${product.id}`}
    $bgColor={getProductBgColor(product.category, product.color)}
  >
    <div className="image-area">
      {product.badge && <span className="compact-badge">{product.badge}</span>}
      <i className="fas fa-cube"></i>
    </div>
    <div className="info-area">
      <div className="category">{product.category}</div>
      <div className="name">{product.name}</div>
      <div className="price">
        ${product.price} <span>/mo</span>
      </div>
    </div>
  </CompactCardWrapper>
);

export default CompactProductCard;