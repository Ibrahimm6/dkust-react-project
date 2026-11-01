import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const getBgColor = (category) => {
  const colors = {
    Software: "#3b1f6b",
    Robotics: "#14532d",
    AI: "#1e40af",
    Hardware: "#451a03",
    Security: "#0f172a",
  };
  return colors[category] || "#3b1f6b";
};

const Card = styled(Link)`
  display: block;
  width: 100%;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const ImageArea = styled.div`
  height: 120px;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 40px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Info = styled.div`
  padding: 14px;
`;

const Category = styled.div`
  font-size: 13px;
  color: #9ca3af;
  margin-bottom: 4px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #00a651;

  span {
    font-weight: 400;
    font-size: 13px;
    color: #9ca3af;
  }
`;

const RelatedProductCard = ({ product }) => (
  <Card to={`/products/${product.id}`}>
    <ImageArea $bgColor={getBgColor(product.category)}>
      <i className="fas fa-cube"></i>
    </ImageArea>
    <Info>
      <Category>{product.category}</Category>
      <Name>{product.name}</Name>
      <Price>
        ${product.price} <span>/mo</span>
      </Price>
    </Info>
  </Card>
);

export default RelatedProductCard;