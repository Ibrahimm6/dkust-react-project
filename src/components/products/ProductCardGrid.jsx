import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  GridCard, GridImageArea, GridBadge, GridContent, 
  GridCategory, ListTitle, ListDesc, RatingBox, 
  GridFooter, ListPrice, ActionButtons 
} from './styles';
import CustomButton from '../common/custom-button';
import { FiShoppingCart } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { WishlistButton } from './styles'; 
import { useWishlist } from '../../contexts/wishlistContext';
import { FaHeart } from 'react-icons/fa'; 

const getBgColor = (category) => {
  const colors = { Software: '#1e3a8a', Robotics: '#14532d', AI: '#1e40af', Hardware: '#451a03', Security: '#0f172a' };
  return colors[category] || '#1e3a8a';
};

const ProductCardGrid = ({ product, onAddToCart }) => {
  const navigate = useNavigate(); 
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);
  return (
    <GridCard>
      <GridImageArea bgColor={getBgColor(product.category)}>
        {product.badge && <GridBadge text={product.badge}>{product.badge}</GridBadge>}
        <i className="fas fa-cube"></i>
        <WishlistButton 
           className={isFavorite ? 'active' : ''} 
           onClick={() => toggleWishlist(product)}
          >
          {isFavorite ? <FaHeart size={14} /> : <FiHeart size={14} />}
        </WishlistButton>
      </GridImageArea>
      
      <GridContent>
        <GridCategory>
          <i className="fas fa-tag"></i> {product.category}
        </GridCategory>
        
        <ListTitle>{product.name}</ListTitle>
        <ListDesc>{product.description}</ListDesc>
        
        <RatingBox style={{ marginTop: '12px' }}>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <span className="reviews">({product.reviewsCount})</span>
        </RatingBox>

        <GridFooter>
          <ListPrice>
            ${product.price}<span>/mo</span>
          </ListPrice>
        <ActionButtons>
         <CustomButton 
          title="Details" 
          onClickFunction={() => navigate(`/products/${product.id}`)} 
          bgColor="transparent"
          color="var(--color-text-gray)"
        />
         <CustomButton 
           title={<><FiShoppingCart /> Add</>} 
           onClickFunction={() => onAddToCart(product)} 
        />
        </ActionButtons>
        </GridFooter>
      </GridContent>
    </GridCard>
  );
};

export default ProductCardGrid;