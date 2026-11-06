import React, { useState, useMemo, useEffect } from "react";
import {useTranslation} from "react-i18next";
import {
  PageWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentContainer,
  FilterSection,
  FilterContainer,
  CategoriesWrapper,
  CategoryButton,
  ControlsWrapper,
  SortSelect,
  ViewToggle,
  IconButton,
  ResultsText,
  ProductsGrid,
  ProductsList,
} from "./styles";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProductCardProvider from "../../components/common/ProductCardProvider";
import { getProducts } from "../../services/products/products.service";
import MainLoader from "../../components/main-loader";

const categories = [
  "All",
  "Software",
  "AI",
  "Hardware",
  "Robotics",
  "Security",
];

const ProductsPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const response = await getProducts();
    
    if (response.status === 200 && Array.isArray(response.data)) {
      const mappedData = response.data.map((p) => {
        const badgeText = p.badge?.[lang] || "";
        
        return {
          id: p.id,
          name: p.name?.[lang] || "",
          category: p.category?.[lang] || "",
          description: p.description?.[lang] || "",
          badge: badgeText.trim() === "" ? null : badgeText,
          reviewsCount: p.reviews || 0,
          price: p.price || 0,
          rating: p.rating || 0,
          color: p.color || "",
        };
      });
      setData(mappedData);
    } else {
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [lang]);

  const filteredProducts = useMemo(() => {
    const filtered = data.filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory
    );

    if (sortOption === "price-asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      return [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, sortOption, data]);

  return (
    <AppTemplate pageTitle="Products" path={PathConstants.PRODUCTS}>
      <PageWrapper>
        <HeroSection>
          <HeroTitle>Our Products</HeroTitle>
          <HeroSubtitle>
            Explore our range of software, AI tools, hardware kits, and robotics
            solutions built for modern teams.
          </HeroSubtitle>
        </HeroSection>

        <FilterSection>
          <FilterContainer className="container">
            <CategoriesWrapper>
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  $isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </CategoryButton>
              ))}
            </CategoriesWrapper>

            <ControlsWrapper>
              <SortSelect
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </SortSelect>

              <ViewToggle>
                <IconButton
                  $isActive={viewMode === "grid"}
                  onClick={() => setViewMode("grid")}
                >
                  <i className="fas fa-th-large"></i>
                </IconButton>
                <IconButton
                  $isActive={viewMode === "list"}
                  onClick={() => setViewMode("list")}
                >
                  <i className="fas fa-list-ul"></i>
                </IconButton>
              </ViewToggle>
            </ControlsWrapper>
          </FilterContainer>
        </FilterSection>

        <ContentContainer className="container">
          <ResultsText>{filteredProducts.length} products found</ResultsText>

          {loading ? (
            <MainLoader />
          ) : filteredProducts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
              No products found.
            </div>
          ) : viewMode === "grid" ? (
            <ProductsGrid>
              {filteredProducts.map((product) => (
                <ProductCardProvider
                  key={product.id}
                  $variant="normal-grid"
                  product={product}
                />
              ))}
            </ProductsGrid>
          ) : (
            <ProductsList>
              {filteredProducts.map((product) => (
                <ProductCardProvider
                  key={product.id}
                  $variant="normal-list"
                  product={product}
                />
              ))}
            </ProductsList>
          )}
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default ProductsPage;