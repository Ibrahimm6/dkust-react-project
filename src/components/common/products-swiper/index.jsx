import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCardGrid from "../../products/ProductCardGrid";
import { SwiperWrapper } from "./styles";

const DEFAULT_BREAKPOINTS = {
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const ProductsSwiper = ({
  products = [],
  onAddToCart,
  renderCard,
  flush = false, 
  spaceBetween = 30,
  breakpoints = DEFAULT_BREAKPOINTS,
  className,
}) => {
  return (
    <SwiperWrapper className={className} $flush={flush}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div style={{ height: "100%", paddingBottom: "15px" }}>
              {renderCard ? (
                renderCard(product)
              ) : (
                <ProductCardGrid
                  product={product}
                  onAddToCart={onAddToCart}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default ProductsSwiper;