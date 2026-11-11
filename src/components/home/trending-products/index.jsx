import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PathConstants from "../../../routes/pathConstants";
import ProductsSwiper from "../../common/ProductsSwiper";
import MainLoader from "../../main-loader";
import { getProducts } from "../../../services/products/products.service";
import { mapProductData } from "../../../helpers/product.helpers";
import { TrendingWrapper } from "./styles";

const TrendingProducts = () => {
  const { i18n } = useTranslation();
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
          <span className="hot-badge">HOT RIGHT NOW</span>
          <h2 className="section-title">Trending Products</h2>
          <p className="section-subtitle">
            Our most popular tools and solutions, loved by teams around the
            world.
          </p>
        </div>
        <Link to={PathConstants.PRODUCTS} className="view-all-btn">
          View All <i className="fas fa-chevron-right"></i>
        </Link>
      </div>

      <div className="container">
        {loading ? (
          <MainLoader />
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