import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProductCardProvider from "../../components/common/ProductCardProvider";
import MainLoader from "../../components/main-loader";
import { SwiperWrapper } from "../../components/home/trending-products/styles";
import {
  getProductById,
  getProducts,
} from "../../services/products/products.service";
import { ProductDetailsWrapper } from "./styles";

const getLocalizedText = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
};

const getLocalizedArray = (field, lang) => {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.en || [];
};

const mapProductData = (p, lang) => {
  const badgeText = getLocalizedText(p.badge, lang);
  return {
    id: p.id,
    name: getLocalizedText(p.name, lang),
    category: getLocalizedText(p.category, lang),
    description: getLocalizedText(p.description, lang),
    badge: badgeText.trim() === "" ? null : badgeText,
    features: getLocalizedArray(p.features, lang),
    reviewsCount: p.reviews ?? p.reviewsCount ?? 0,
    price: p.price || 0,
    rating: p.rating || 0,
    color: p.color || "",
  };
};

const ProductDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const [productRes, allProductsRes] = await Promise.all([
        getProductById(id),
        getProducts(),
      ]);

      if (productRes.status === 200 && productRes.data) {
        setProduct(mapProductData(productRes.data, lang));
      } else {
        setProduct(null);
      }

      if (allProductsRes.status === 200 && Array.isArray(allProductsRes.data)) {
        const filteredRelated = allProductsRes.data
          .filter((item) => Number(item.id) !== Number(id))
          .map((item) => mapProductData(item, lang));
        setRelatedProducts(filteredRelated);
      } else {
        setRelatedProducts([]);
      }
    } catch (error) {
      setProduct(null);
      setRelatedProducts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, lang]);

  return (
    <AppTemplate
      pageTitle={product ? product.name : "Product Details"}
      path={PathConstants.PRODUCT_DETAILS}
    >
      <ProductDetailsWrapper>
        {loading ? (
          <MainLoader />
        ) : !product ? (
          <div className="container not-found-box">
            <h2>Product not found!</h2>
            <p>The product you are looking for does not exist or was removed.</p>
            <Link to={PathConstants.PRODUCTS} className="back-link">
              <i className="fas fa-chevron-left"></i> Back to Products
            </Link>
          </div>
        ) : (
          <>
            <div className="container breadcrumb-nav">
              <Link to={PathConstants.HOME}>Home</Link> /{" "}
              <Link to={PathConstants.PRODUCTS}>Products</Link> /{" "}
              <span className="current">{product.name}</span>
            </div>

            <div className="container">
              <Link to={PathConstants.PRODUCTS} className="back-link">
                <i className="fas fa-chevron-left"></i> Back to Products
              </Link>
            </div>

            <ProductCardProvider $variant="detailed" product={product} />

            {relatedProducts.length > 0 && (
              <section className="container related-section">
                <h2 className="related-title">Related Products</h2>
                <SwiperWrapper className="related-swiper-box">
                  <Swiper
                    className="related-swiper"
                    modules={[Navigation, Pagination]}
                    spaceBetween={25}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      576: { slidesPerView: 2 },
                      992: { slidesPerView: 3 },
                    }}
                  >
                    {relatedProducts.map((relatedProd) => (
                      <SwiperSlide key={relatedProd.id}>
                        <div className="slide-inner">
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
            )}
          </>
        )}
      </ProductDetailsWrapper>
    </AppTemplate>
  );
};

export default ProductDetails;