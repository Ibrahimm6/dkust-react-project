import React, { useState, useEffect,useMemo } from "react";
import { useParams } from "react-router-dom";
import {useTranslation} from "react-i18next";
import { getProducts, getProductById } from "../../services/products/products.service";
import {
  PageWrapper,
  Breadcrumb,
  BackLink,
  RelatedSectionTitle,
  RelatedSwiperArea,
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

const localize = (value, lang) => {
  if (Array.isArray(value)) return value.map((v) => localize(v, lang));
  if (value && typeof value === "object") {
    if ("en" in value || "ar" in value) {
      return value[lang] ?? value.en ?? value.ar;
    }
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localize(v, lang)])
    );
  }
  return value;
};
  const ProductDetails=()=>
  {
    const {id}=useParams();
    const {t,i18n}=useTranslation();
    const lang=i18n.language?.startsWith("ar")?"ar":"en";
const [rawProduct, setRawProduct] = useState(null);
const [rawRelated, setRawRelated] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
        setLoading(true);
        const currentRes=await getProductById(id);
        const allRes=await getProducts();
        const current = currentRes?.data;
        const all=allRes?.data || [];
        setRawProduct(current || null);
        setRawRelated(all.filter((p) => p.id !== current?.id));
        setLoading(false);
      };
      fetchData();
      },[id]);

      const product = useMemo(() => localize(rawProduct, lang), [rawProduct, lang]);
      const relatedProducts = useMemo(
        () => localize(rawRelated, lang),
        [rawRelated, lang]
      );

      if(loading) return null;
      if(!product){
    return (
      <AppTemplate pageTitle={t("productDetails.notFoundTitle")}
      path={PathConstants.PRODUCT_DETAILS}
      >
        <PageWrapper>
         {t("productDetails.notFoundTitle")}
        </PageWrapper>
      </AppTemplate>
    );
  }
  return (
    <AppTemplate pageTitle={product.name} path={PathConstants.PRODUCT_DETAILS}>
      <div style={{ backgroundColor: "#f8fafc", width: "100%", flexGrow: 1 }}>
        <PageWrapper>
         <Breadcrumb className="container">
        {t("productDetails.home", "Home")} /{" "}
        {t("productDetails.products", "Products")} /{" "}
          <span>{product.name}</span>
        </Breadcrumb>

          <div className="container">
            <BackLink to="/products">
              <i className="fas fa-chevron-left"></i>{" "}
              {t("productDetails.backToProducts", "Back to Products")}
            </BackLink>
          </div>

          <ProductCardProvider $variant="detailed" product={product} />

          <section className="container">
            <RelatedSectionTitle>
            {t("productDetails.relatedProducts", "Related Products")}
            </RelatedSectionTitle>
            <RelatedSwiperArea>            <SwiperWrapper style={{ padding: 0, maxWidth: "100%" }}>
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
            </RelatedSwiperArea>
          </section>
        </PageWrapper>
      </div>
    </AppTemplate>
  );
};

export default ProductDetails;
