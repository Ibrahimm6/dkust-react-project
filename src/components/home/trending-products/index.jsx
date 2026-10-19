import React from 'react';
import PathConstants from '../../../routes/pathConstants';
import ProductCardGrid from '../../products/ProductCardGrid';
import { productsArray } from '../../../data'; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  TrendingContainer,
  SectionHeader,
  HeaderContent,
  HotBadge,
  SectionTitle,
  SectionSubtitle,
  ViewAllButton,
  SwiperWrapper 
} from './styles';

const TrendingProducts = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart from Home:", product);
  };

  return (
    <TrendingContainer>
      <SectionHeader>
        <HeaderContent>
          <HotBadge>HOT RIGHT NOW</HotBadge>
          <SectionTitle>Trending Products</SectionTitle>
          <SectionSubtitle>
            Our most popular tools and solutions, loved by teams around the world.
          </SectionSubtitle>
        </HeaderContent>
        
        <ViewAllButton to={PathConstants.PRODUCTS}>
          View All <i className="fas fa-chevron-right" style={{ fontSize: '12px' }}></i>
        </ViewAllButton>
      </SectionHeader>

      <SwiperWrapper>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30} 
          slidesPerView={1}
          navigation 
          pagination={{ clickable: true }} 
          breakpoints={{
            768: { slidesPerView: 2 },  
            1024: { slidesPerView: 3 }, 
          }}
        >
          {productsArray.map((product) => (
            <SwiperSlide key={product.id}>
              <div style={{ height: '100%', paddingBottom: '15px' }}>
                <ProductCardGrid 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </TrendingContainer>
  );
};

export default TrendingProducts;