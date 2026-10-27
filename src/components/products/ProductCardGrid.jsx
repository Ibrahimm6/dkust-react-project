import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GridCard, GridImageArea, GridBadge, GridContent, 
  GridCategory, ListTitle, ListDesc, RatingBox, 
  GridFooter, ListPrice, ActionButtons, WishlistButton 
} from './styles';
import CustomButton from '../common/custom-button';
import { FiShoppingCart, FiHeart, FiBox, FiTag } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../../contexts/wishlistContext';
import { getBgColor } from '../../helpers/productHelpers';
import StarRating from '../common/StarRating';

const ProductCardGrid = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  return (
    <GridCard>
      <GridImageArea $bgColor={getBgColor(product.category)}>
        {product.badge && <GridBadge text={product.badge}>{product.badge}</GridBadge>}
        <FiBox size={40} />
        <WishlistButton 
          className={isFavorite ? 'active' : ''} 
          onClick={() => toggleWishlist(product)}
        >
          {isFavorite ? <FaHeart size={14} /> : <FiHeart size={14} />}
        </WishlistButton>
      </GridImageArea>
      
      <GridContent>
        <GridCategory>
          <FiTag size={12} /> {product.category}
        </GridCategory>
        
        <ListTitle>{product.name}</ListTitle>
        <ListDesc>{product.description}</ListDesc>
        
        <RatingBox style={{ marginTop: '12px' }}>
          <StarRating rating={product.rating} />
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