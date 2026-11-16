import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ListCard,
  ListImageArea,
  ListContentArea,
  ListTopRow,
  ListInfo,
  ListBadge,
  ListTitle,
  ListCategory,
  ListPrice,
  ListDesc,
  ListBottomRow,
  RatingBox,
  ActionButtons,
  WishlistButton,
} from "./styles";
import CustomButton from "../../../custom-button";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { getProductBgColor } from "../../../../../helpers/product.helpers";

// Redux Imports
import { addToCart } from "../../../../../store/cart/cartSlice";
import { toggleWishlistItem } from "../../../../../store/wishlist/wishlistSlice";
import { selectIsInWishlist } from "../../../../../store/wishlist/wishlistSelectors";

const ProductCardList = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsInWishlist(state, product.id));

  return (
    <ListCard>
      <ListImageArea $bgColor={getProductBgColor(product.category, product.color)}>
        <i className="fas fa-cube"></i>
        <WishlistButton
          className={isFavorite ? "active" : ""}
          onClick={() => dispatch(toggleWishlistItem(product))}
        >
          {isFavorite ? <FaHeart size={16} /> : <FiHeart size={16} />}
        </WishlistButton>
      </ListImageArea>
      <ListContentArea>
        <ListTopRow>
          <ListInfo>
            {product.badge && (
              <ListBadge $text={product.badge}>{product.badge}</ListBadge>
            )}
            <ListTitle>{product.name}</ListTitle>
            <ListCategory>{product.category}</ListCategory>
          </ListInfo>
          <ListPrice>
            ${product.price}
            <span>/mo</span>
          </ListPrice>
        </ListTopRow>
        <ListDesc>{product.description}</ListDesc>
        <ListBottomRow>
          <RatingBox>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="reviews">
              {product.rating} ({product.reviewsCount} reviews)
            </span>
          </RatingBox>
          <ActionButtons>
            <CustomButton
              title="View Details"
              onClickFunction={() => navigate(`/products/${product.id}`)}
              bgColor="transparent"
              color="var(--color-text-gray)"
            />
            <CustomButton
              title={
                <>
                  <FiShoppingCart /> Add to Cart
                </>
              }
              onClickFunction={() => dispatch(addToCart({ product }))}
            />
          </ActionButtons>
        </ListBottomRow>
      </ListContentArea>
    </ListCard>
  );
};

export default ProductCardList;