import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import { useWishlist } from "../../contexts/wishlistContext";
import CustomButton from "../../components/common/custom-button";
import ProductCardProvider from "../../components/common/ProductCardProvider";
import MainLoader from "../../components/main-loader";
import {
  PageWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentContainer,
  EmptyStateWrapper,
  EmptyIcon,
  EmptyText,
  ProductsGrid,
} from "./styles";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlist, loading } = useWishlist();

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
          {loading ? (
            <MainLoader />
          ) : wishlist.length > 0 ? (
            <ProductsGrid>
              {wishlist.map((product) => (
                <ProductCardProvider
                  $variant="normal-grid"
                  key={product.id}
                  product={product}
                />
              ))}
            </ProductsGrid>
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