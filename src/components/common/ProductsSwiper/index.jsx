import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCardProvider from "../ProductCardProvider";
import { ProductsSwiperWrapper } from "./styles";

const ProductsSwiper = ({
  products = [],
  cardVariant = "normal-grid",
  spaceBetween = 25,
}) => {
  if (!Array.isArray(products) || products.length === 0) return null;

  return (
    <ProductsSwiperWrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="slide-inner">
              <ProductCardProvider $variant={cardVariant} product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductsSwiperWrapper>
  );
};

export default ProductsSwiper;