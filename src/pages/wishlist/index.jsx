import React from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import { useWishlist } from "../../contexts/wishlistContext";
import { FiHeart } from "react-icons/fi";
import CustomButton from "../../components/common/custom-button";

import {
  PageWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentContainer,
  EmptyStateWrapper,
  EmptyIcon,
  EmptyText,
  ProductsGrid, //ResultsText
} from "./styles";
import ProductCardProvider from "../../components/common/ProductCardProvider";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  return (
    <AppTemplate pageTitle="My Favorites" path={PathConstants.WISHLIST}>
      <PageWrapper>
        <HeroSection>
          <HeroTitle>My Favorites</HeroTitle>
          <HeroSubtitle>
            {wishlist.length === 1
              ? "1 saved item"
              : `${wishlist.length} saved items`}
          </HeroSubtitle>
        </HeroSection>

        <ContentContainer className="container">
          {wishlist.length > 0 ? (
            <>
              {/* <ResultsText>{wishlist.length} products saved</ResultsText> */}
              <ProductsGrid>
                {wishlist.map((product) => (
                  <ProductCardProvider
                    $variant="normal-grid"
                    key={product.id}
                    product={product}
                  />
                ))}
              </ProductsGrid>
            </>
          ) : (
            <EmptyStateWrapper>
              <EmptyIcon>
                <FiHeart />
              </EmptyIcon>
              <EmptyText>You haven't saved any products yet</EmptyText>
              <div style={{ width: "200px" }}>
                <CustomButton
                  title="Explore Products"
                  onClickFunction={() => navigate(PathConstants.PRODUCTS)}
                  bgColor="var(--color-primary)"
                />
              </div>
            </EmptyStateWrapper>
          )}
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default WishlistPage;
