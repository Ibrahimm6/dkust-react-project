import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  ListCard, ListImageArea, ListContentArea, ListTopRow, 
  ListInfo, ListBadge, ListTitle, ListCategory, ListPrice, 
  ListDesc, ListBottomRow, RatingBox, ActionButtons 
} from './styles';
import CustomButton from '../common/custom-button';

const getBgColor = (category) => {
  const colors = { Software: '#1e3a8a', Robotics: '#14532d', AI: '#1e40af', Hardware: '#451a03', Security: '#0f172a' };
  return colors[category] || '#1e3a8a';
};

const ProductCardList = ({ product, onAddToCart }) => {
  const navigate = useNavigate(); 
  return (
    <ListCard>
      <ListImageArea bgColor={getBgColor(product.category)}>
        <i className="fas fa-cube"></i>
      </ListImageArea>

      <ListContentArea>
        <ListTopRow>
          <ListInfo>
            {product.badge && <ListBadge>{product.badge}</ListBadge>}
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
            />
            <CustomButton 
              title={<><i className="fas fa-shopping-cart"></i> Add to Cart</>} 
              onClickFunction={() => onAddToCart(product)} 
            />
          </ActionButtons>
        </ListBottomRow>
      </ListContentArea>
    </ListCard>
  );
};

export default ProductCardList;