import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsArray } from '../../data';
import { 
  PageWrapper, Breadcrumb, BackLink, ProductSection, 
  ProductImageArea, ProductInfoArea, CategoryTag, ProductTitle, 
  RatingBox, Description, FeaturesList, Price, 
  QuantityControl, ActionButtons, RelatedSectionTitle 
} from './styles';
import CustomButton from '../../components/common/custom-button';
import ProductCardGrid from '../../components/products/ProductCardGrid';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppTemplate from '../../components/app-template';
import PathConstants from '../../routes/pathConstants';

const getBgColor = (category) => {
  const colors = { Software: '#1e3a8a', Robotics: '#14532d', AI: '#1e40af', Hardware: '#451a03', Security: '#0f172a' };
  return colors[category] || '#1e3a8a';
};

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = productsArray.find((p) => p.id === parseInt(id));

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    console.log({ ...product, quantity });
  };

  const handleBuyNow = () => {
    console.log({ ...product, quantity });
  };

  if (!product) {
    return (
      <AppTemplate pageTitle="Not Found" path={PathConstants.PRODUCT_DETAILS}>
        <PageWrapper><h2>Product not found!</h2></PageWrapper>
      </AppTemplate>
    );
  }

  const relatedProducts = productsArray.filter((p) => p.id !== product.id);

  return (
    <AppTemplate pageTitle={product.name} path={PathConstants.PRODUCT_DETAILS}>
      <div style={{ backgroundColor: '#f8fafc', width: '100%', flexGrow: 1 }}>
        <PageWrapper>
          <Breadcrumb>
            Home / Products / <span>{product.name}</span>
          </Breadcrumb>
          <BackLink to="/products">
            <i className="fas fa-chevron-left"></i> Back to Products
          </BackLink>
          <ProductSection>
            <ProductImageArea bgColor={getBgColor(product.category)}>
              <i className="fas fa-cube"></i>
              {product.badge && (
                <span style={{ 
                  backgroundColor: '#22c55e', color: 'white', padding: '4px 12px', 
                  borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginTop: '20px' 
                }}>
                  {product.badge}
                </span>
              )}
            </ProductImageArea>
            <ProductInfoArea>
              <CategoryTag>{product.category}</CategoryTag>
              <ProductTitle>{product.name}</ProductTitle>
              <RatingBox>
                <div className="stars">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span>{product.rating} ({product.reviewsCount} reviews)</span>
              </RatingBox>
              <Description>{product.description}</Description>
              <FeaturesList>
                <li><i className="far fa-check-circle"></i> High-quality performance</li>
                <li><i className="far fa-check-circle"></i> 24/7 technical support</li>
                <li><i className="far fa-check-circle"></i> Secure payment integration</li>
                <li><i className="far fa-check-circle"></i> Fast delivery and setup</li>
              </FeaturesList>
              <Price>${product.price} <span>/mo</span></Price>
              <QuantityControl>
                <span>Qty</span>
                <div className="controls">
                  <button onClick={handleDecrease} disabled={quantity === 1}>-</button>
                  <div className="qty-value">{quantity}</div>
                  <button onClick={handleIncrease}>+</button>
                </div>
              </QuantityControl>
              <ActionButtons>
                <CustomButton title={<><i className="fas fa-shopping-cart"></i> Add to Cart</>} onClickFunction={handleAddToCart} bgColor="#00a651" />
                <CustomButton title="Buy Now" onClickFunction={handleBuyNow} />
              </ActionButtons>
            </ProductInfoArea>
          </ProductSection>
          
          <RelatedSectionTitle>Related Products</RelatedSectionTitle>
          <div style={{ paddingBottom: '40px' }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={25}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },  
                1024: { slidesPerView: 3 }, 
              }}
            >
              {relatedProducts.map((relatedProd) => (
                <SwiperSlide key={relatedProd.id}>
                  <div style={{ height: '100%', paddingBottom: '10px' }}>
                    <ProductCardGrid 
                      product={relatedProd} 
                      onAddToCart={() => console.log({ ...relatedProd, quantity: 1 })} 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </PageWrapper>
      </div>
    </AppTemplate>
  );
};

export default ProductDetails;