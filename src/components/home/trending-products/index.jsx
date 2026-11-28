import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PathConstants from "../../../routes/pathConstants";
import ProductsSwiper from "../../common/ProductsSwiper";
import {
  ProductCardSkeleton,
  SkeletonSwiperGrid,
} from "../../common/skeleton";
import { getProducts } from "../../../services/products/products.service";
import { mapProductData } from "../../../helpers/product.helpers";
import { TrendingWrapper } from "./styles";

const TrendingProducts = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      const response = await getProducts();
      if (response.status === 200 && Array.isArray(response.data)) {
        setProducts(response.data.map((p) => mapProductData(p, lang)));
      } else {
        setProducts([]);
      }
      setLoading(false);
    };

    fetchTrending();
  }, [lang]);

  return (
    <TrendingWrapper>
      <div className="container section-header">
        <div>
          <span className="hot-badge">{t("home.hotBadge")}</span>
          <h2 className="section-title">{t("home.trendingTitle")}</h2>
          <p className="section-subtitle">{t("home.trendingSubtitle")}</p>
        </div>
        <Link to={PathConstants.PRODUCTS} className="view-all-btn">
          {t("common.viewAll")} <i className="fas fa-chevron-right"></i>
        </Link>
      </div>

      <div className="container">
        {loading ? (
          <SkeletonSwiperGrid>
            {Array.from({ length: 3 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
          </SkeletonSwiperGrid>
        ) : (
          <ProductsSwiper
            products={products}
            cardVariant="normal-grid"
            spaceBetween={30}
          />
        )}
      </div>
    </TrendingWrapper>
  );
};

export default TrendingProducts;