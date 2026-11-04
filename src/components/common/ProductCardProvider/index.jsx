import DetailedProductCard from "./Cards/DetailedProductCard";
import ProductCardGrid from "./Cards/ProductCardGrid";
import ProductCardList from "./Cards/ProductCardList";
import CompactProductCard from "./Cards/CompactProductCard";

function ProductCardProvider({ $variant, product }) {
  switch ($variant) {
    case "normal-list":
      return <ProductCardList product={product} />;
    case "detailed":
      return <DetailedProductCard product={product} />;
    case "compact":
      // return <CompactProductCard product={product} />;
      return <ProductCardGrid compact product={product} />;
    case "normal-grid":
    default:
      return <ProductCardGrid product={product} />;
  }
}

export default ProductCardProvider;
