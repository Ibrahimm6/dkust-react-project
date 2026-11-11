import React from "react";
import { CompactCardWrapper } from "./styles";

const getBgColor = (category, customColor) => {
  if (customColor) return customColor;
  const colors = {
    Software: "#3b1f6b",
    Robotics: "#14532d",
    AI: "#1e40af",
    Hardware: "#451a03",
    Security: "#0f172a",
  };
  return colors[category] || "#3b1f6b";
};

const CompactProductCard = ({ product }) => (
  <CompactCardWrapper
    to={`/products/${product.id}`}
    $bgColor={getBgColor(product.category, product.color)}
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