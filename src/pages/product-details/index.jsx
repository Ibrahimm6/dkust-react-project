import { useParams } from "react-router-dom";
import { productsArray } from "../../data";
import {
  PageWrapper,
  Breadcrumb,
  BackLink,
  RelatedSectionTitle,
} from "./styles";
import { SwiperWrapper } from "../../components/home/trending-products/styles.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProductCardProvider from "../../components/common/ProductCardProvider/index.jsx";

const ProductDetails = () => {
  const { id } = useParams();

  const product = productsArray.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <AppTemplate pageTitle="Not Found" path={PathConstants.PRODUCT_DETAILS}>
        <PageWrapper>
          <h2>Product not found!</h2>
        </PageWrapper>
      </AppTemplate>
    );
  }

  const relatedProducts = productsArray.filter((p) => p.id !== product.id);

  return (
    <AppTemplate pageTitle={product.name} path={PathConstants.PRODUCT_DETAILS}>
      <div style={{ backgroundColor: "#f8fafc", width: "100%", flexGrow: 1 }}>
        <PageWrapper>
          <Breadcrumb className="container">
            Home / Products / <span>{product.name}</span>
          </Breadcrumb>

          <div className="container">
            <BackLink to="/products">
              <i className="fas fa-chevron-left"></i> Back to Products
            </BackLink>
          </div>

          <ProductCardProvider $variant="detailed" product={product} />

          <section className="container">
            <RelatedSectionTitle>Related Products</RelatedSectionTitle>
            <SwiperWrapper style={{ padding: 0, maxWidth: "100%" }}>
              <Swiper
                className="related-swiper"
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
                    <div style={{ height: "100%", paddingBottom: "10px" }}>
                      <ProductCardProvider
                        $variant="compact"
                        product={relatedProd}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperWrapper>
          </section>
        </PageWrapper>
      </div>
    </AppTemplate>
  );
};

export default ProductDetails;
