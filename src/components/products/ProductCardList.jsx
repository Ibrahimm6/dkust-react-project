import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  ListCard, ListImageArea, ListContentArea, ListTopRow, 
  ListInfo, ListBadge, ListTitle, ListCategory, ListPrice, 
  ListDesc, ListBottomRow, RatingBox, ActionButtons,
  WishlistButton 
} from './styles';

import CustomButton from '../common/custom-button';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../../contexts/wishlistContext';

const getBgColor = (category) => {
  const colors = { Software: '#1e3a8a', Robotics: '#14532d', AI: '#1e40af', Hardware: '#451a03', Security: '#0f172a' };
  return colors[category] || '#1e3a8a';
};

const ProductCardList = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const isFavorite = isInWishlist(product.id);

  return (
    <ListCard>
      <ListImageArea bgColor={getBgColor(product.category)}>
        <i className="fas fa-cube"></i>
        
        <WishlistButton 
          className={isFavorite ? 'active' : ''} 
          onClick={() => toggleWishlist(product)}
        >
          {isFavorite ? <FaHeart size={16} /> : <FiHeart size={16} />}
        </WishlistButton>
      </ListImageArea>

      <ListContentArea>
        <ListTopRow>
          <ListInfo>
            {product.badge && <ListBadge text={product.badge}>{product.badge}</ListBadge>}
            <ListTitle>{product.name}</ListTitle>
            <ListCategory>{product.category}</ListCategory>
          </ListInfo>
          <ListPrice>
            ${product.price}<span>/mo</span>
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
            <span className="reviews">{product.rating} ({product.reviewsCount} reviews)</span>
          </RatingBox>
          
          <ActionButtons>
            <CustomButton 
              title="View Details" 
              onClickFunction={() => navigate(`/products/${product.id}`)} 
              bgColor="transparent" 
              color="var(--color-text-gray)"
            />
            <CustomButton 
              title={<><FiShoppingCart /> Add to Cart</>} 
              onClickFunction={() => onAddToCart(product)} 
            />
          </ActionButtons>
        </ListBottomRow>
      </ListContentArea>
    </ListCard>
  );
};

export default ProductCardList;