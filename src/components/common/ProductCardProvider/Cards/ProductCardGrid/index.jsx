import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GridCard,
  GridImageArea,
  GridBadge,
  GridContent,
  GridCategory,
  ListTitle,
  ListDesc,
  RatingBox,
  GridFooter,
  ListPrice,
  ActionButtons,
  WishlistButton,
} from "./styles";
import CustomButton from "../../../../common/custom-button";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../../../../contexts/wishlistContext";
import { useCart } from "../../../../../contexts/cartContext";
import { getProductBgColor } from "../../../../../helpers/product.helpers";

const ProductCardGrid = ({ product, compact }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  return (
    <GridCard>
      <GridImageArea $bgColor={getProductBgColor(product.category, product.color)}>
        {product.badge && !compact && (
          <GridBadge $text={product.badge}>{product.badge}</GridBadge>
        )}
        <i className="fas fa-cube"></i>
        {!compact && (
          <WishlistButton
            className={isFavorite ? "active" : ""}
            onClick={() => toggleWishlist(product)}
          >
            {isFavorite ? <FaHeart size={14} /> : <FiHeart size={14} />}
          </WishlistButton>
        )}
      </GridImageArea>
      <GridContent>
        <GridCategory>
          <i className="fas fa-tag"></i> {product.category}
        </GridCategory>
        <ListTitle>{product.name}</ListTitle>
        {!compact && <ListDesc>{product.description}</ListDesc>}
        {!compact && (
          <RatingBox style={{ marginTop: "12px" }}>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="reviews">({product.reviewsCount})</span>
          </RatingBox>
        )}
        <GridFooter>
          <ListPrice>
            ${product.price}
            <span>/mo</span>
          </ListPrice>
          {!compact && (
            <ActionButtons>
              <CustomButton
                title="Details"
                onClickFunction={() => navigate(`/products/${product.id}`)}
                bgColor="transparent"
                color="var(--color-text-gray)"
              />
              <CustomButton
                title={
                  <>
                    <FiShoppingCart /> Add
                  </>
                }
                onClickFunction={() => addToCart(product)}
              />
            </ActionButtons>
          )}
        </GridFooter>
      </GridContent>
    </GridCard>
  );
};

export default ProductCardGrid;