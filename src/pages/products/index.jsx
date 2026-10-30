import React, { useState } from "react";
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
import ProductCardGrid from "../../components/products/ProductCardGrid";
import ProductCardList from "../../components/products/ProductCardList";
import { productsArray } from "../../data";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import { useCart } from "../../contexts/cartContext";

const categories = [
  "All",
  "Software",
  "AI",
  "Hardware",
  "Robotics",
  "Security",
];

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const { addToCart } = useCart();

  let filteredProducts = productsArray.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory,
  );

  if (sortOption === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

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
                  isActive={selectedCategory === category}
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
                  isActive={viewMode === "grid"}
                  onClick={() => setViewMode("grid")}
                >
                  <i className="fas fa-th-large"></i>
                </IconButton>
                <IconButton
                  isActive={viewMode === "list"}
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

          {filteredProducts.length === 0 ? (
            <div
              style={{ textAlign: "center", padding: "40px", color: "#888" }}
            >
              No products found.
            </div>
          ) : viewMode === "grid" ? (
            <ProductsGrid>
              {filteredProducts.map((product) => (
                <ProductCardGrid
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </ProductsGrid>
          ) : (
            <ProductsList>
              {filteredProducts.map((product) => (
                <ProductCardList
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
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
