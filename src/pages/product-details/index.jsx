import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProductCardProvider from "../../components/common/ProductCardProvider";
import ProductsSwiper from "../../components/common/ProductsSwiper";
import MainLoader from "../../components/main-loader";
import {
  getProductById,
  getProducts,
} from "../../services/products/products.service";
import { mapProductData } from "../../helpers/product.helpers";
import { ProductDetailsWrapper } from "./styles";

const ProductDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

        if (
          allProductsRes.status === 200 &&
          Array.isArray(allProductsRes.data)
        ) {
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

    fetchProductDetails();
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
                <ProductsSwiper
                  products={relatedProducts}
                  cardVariant="compact"
                  spaceBetween={25}
                />
              </section>
            )}
          </>
        )}
      </ProductDetailsWrapper>
    </AppTemplate>
  );
};

export default ProductDetails;