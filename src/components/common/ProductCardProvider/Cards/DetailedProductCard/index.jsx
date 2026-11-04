import { useNavigate } from "react-router-dom";
import CustomButton from "../../../custom-button";
import {
  ActionButtons,
  CategoryTag,
  Description,
  FeaturesList,
  Price,
  ProductImageArea,
  ProductInfoArea,
  ProductSection,
  ProductTitle,
  QuantityControl,
  RatingBox,
} from "./styles";
import { useCart } from "../../../../../contexts/cartContext";
import { useState } from "react";
import PathConstants from "../../../../../routes/pathConstants";

const getBgColor = (category) => {
  const colors = {
    Software: "#1e3a8a",
    Robotics: "#14532d",
    AI: "#1e40af",
    Hardware: "#451a03",
    Security: "#0f172a",
  };
  return colors[category] || "#1e3a8a";
};

function DetailedProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate(PathConstants.CART);
  };

  return (
    <ProductSection className="container">
      <ProductImageArea bgColor={getBgColor(product.category)}>
        <i className="fas fa-cube"></i>
        {product.badge && (
          <span
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            {product.badge}
          </span>
        )}
      </ProductImageArea>

      <ProductInfoArea>
        <CategoryTag>{product.category}</CategoryTag>
        <ProductTitle>{product.name}</ProductTitle>

        <RatingBox>
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
        </RatingBox>

        <Description>{product.description}</Description>

        <FeaturesList>
          <li>
            <i className="far fa-check-circle"></i> High-quality performance
          </li>
          <li>
            <i className="far fa-check-circle"></i> 24/7 technical support
          </li>
          <li>
            <i className="far fa-check-circle"></i> Secure payment integration
          </li>
          <li>
            <i className="far fa-check-circle"></i> Fast delivery and setup
          </li>
        </FeaturesList>

        <Price>
          ${product.price} <span>/mo</span>
        </Price>

        <QuantityControl>
          <span>Qty</span>
          <div className="controls">
            <button onClick={handleDecrease} disabled={quantity === 1}>
              -
            </button>
            <div className="qty-value">{quantity}</div>
            <button onClick={handleIncrease}>+</button>
          </div>
        </QuantityControl>

        <ActionButtons>
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
        </ActionButtons>
      </ProductInfoArea>
    </ProductSection>
  );
}

export default DetailedProductCard;
