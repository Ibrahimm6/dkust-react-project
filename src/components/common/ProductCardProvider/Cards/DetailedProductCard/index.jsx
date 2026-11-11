import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../custom-button";
import { DetailedCardWrapper } from "./styles";
import { useCart } from "../../../../../contexts/cartContext";
import PathConstants from "../../../../../routes/pathConstants";
import { getProductBgColor } from "../../../../../helpers/product.helpers";

const defaultFeatures = [
  "High-quality performance",
  "24/7 technical support",
  "Secure payment integration",
  "Fast delivery and setup",
];

function DetailedProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product?.id]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate(PathConstants.CART);
  };

  const featuresToRender =
    Array.isArray(product.features) && product.features.length > 0
      ? product.features
      : defaultFeatures;

  return (
    <DetailedCardWrapper
      className="container"
      $bgColor={getProductBgColor(product.category, product.color)}
    >
      <div className="image-area">
        <i className="fas fa-cube product-icon"></i>
        {product.badge && <span className="badge-pill">{product.badge}</span>}
      </div>

      <div className="info-area">
        <span className="category-tag">{product.category}</span>
        <h1 className="product-title">{product.name}</h1>

        <div className="rating-box">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <span>
            {product.rating} ({product.reviewsCount} reviews)
          </span>
        </div>

        <p className="description">{product.description}</p>

        <ul className="features-list">
          {featuresToRender.map((feature, idx) => (
            <li key={idx}>
              <i className="far fa-check-circle"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="price-box">
          ${product.price} <span>/mo</span>
        </div>

        <div className="quantity-control">
          <span className="qty-label">Qty</span>
          <div className="controls">
            <button
              type="button"
              onClick={handleDecrease}
              disabled={quantity === 1}
            >
              -
            </button>
            <div className="qty-value">{quantity}</div>
            <button type="button" onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>

        <div className="action-buttons">
          <CustomButton
            title={
              <>
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </>
            }
            onClickFunction={handleAddToCart}
            bgColor="#00a651"
          />
          <CustomButton title="Buy Now" onClickFunction={handleBuyNow} />
        </div>
      </div>
    </DetailedCardWrapper>
  );
}

export default DetailedProductCard;