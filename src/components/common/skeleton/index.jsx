import React from "react";
import {
  SkeletonBox,
  SkeletonSwiperGrid,
  SkeletonGridCard,
  SkeletonListCard,
  SkeletonDetailsContainer,
  SkeletonCartLayout,
  SkeletonProfileLayout,
  SkeletonInfoCard,
  SkeletonQuizCard,
} from "./styles";

export { SkeletonBox, SkeletonSwiperGrid };

export const ProductCardSkeleton = () => (
  <SkeletonGridCard aria-hidden="true">
    <SkeletonBox $height="165px" $radius="0" />
    <div className="skeleton-content">
      <SkeletonBox $width="35%" $height="12px" />
      <SkeletonBox $width="80%" $height="16px" />
      <SkeletonBox $width="100%" $height="12px" />
      <SkeletonBox $width="70%" $height="12px" />
      <SkeletonBox $width="45%" $height="12px" $margin="4px 0 0" />
      <div className="skeleton-footer">
        <SkeletonBox $width="70px" $height="22px" />
        <div className="skeleton-actions">
          <SkeletonBox $width="64px" $height="32px" $radius="10px" />
          <SkeletonBox $width="68px" $height="32px" $radius="10px" />
        </div>
      </div>
    </div>
  </SkeletonGridCard>
);

export const ProductListSkeleton = () => (
  <SkeletonListCard aria-hidden="true">
    <SkeletonBox className="skeleton-thumb" $radius="12px" />
    <div className="skeleton-body">
      <div className="skeleton-row">
        <SkeletonBox $width="45%" $height="16px" />
        <SkeletonBox $width="72px" $height="20px" />
      </div>
      <SkeletonBox $width="22%" $height="12px" />
      <SkeletonBox $width="95%" $height="13px" />
      <SkeletonBox $width="75%" $height="13px" />
      <div className="skeleton-row" style={{ marginTop: "6px" }}>
        <SkeletonBox $width="120px" $height="14px" />
        <div className="skeleton-actions">
          <SkeletonBox $width="90px" $height="32px" $radius="10px" />
          <SkeletonBox $width="100px" $height="32px" $radius="10px" />
        </div>
      </div>
    </div>
  </SkeletonListCard>
);

export const ProductDetailsSkeleton = () => (
  <SkeletonDetailsContainer className="container" aria-hidden="true">
    <SkeletonBox $width="220px" $height="14px" $margin="0 0 16px" />
    <SkeletonBox $width="130px" $height="14px" $margin="0 0 28px" />

    <div className="skeleton-card">
      <SkeletonBox className="skeleton-image" />
      <div className="skeleton-info">
        <SkeletonBox $width="25%" $height="12px" />
        <SkeletonBox $width="75%" $height="28px" />
        <SkeletonBox $width="40%" $height="14px" />
        <SkeletonBox $width="100%" $height="14px" />
        <SkeletonBox $width="88%" $height="14px" />
        <div className="skeleton-features">
          <SkeletonBox $width="85%" $height="14px" />
          <SkeletonBox $width="80%" $height="14px" />
          <SkeletonBox $width="75%" $height="14px" />
          <SkeletonBox $width="90%" $height="14px" />
        </div>
        <SkeletonBox $width="110px" $height="32px" $margin="6px 0" />
        <SkeletonBox $width="150px" $height="38px" $radius="8px" />
        <div className="skeleton-buttons">
          <SkeletonBox $width="100%" $height="44px" $radius="6px" />
          <SkeletonBox $width="100%" $height="44px" $radius="6px" />
        </div>
      </div>
    </div>
  </SkeletonDetailsContainer>
);

export const CartSkeleton = () => (
  <SkeletonCartLayout aria-hidden="true">
    <div className="skeleton-items">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div className="skeleton-item-card" key={idx}>
          <SkeletonBox $width="60px" $height="60px" $radius="12px" />
          <div className="skeleton-item-body">
            <div className="skeleton-row">
              <SkeletonBox $width="55%" $height="15px" />
              <SkeletonBox $width="24px" $height="24px" $radius="6px" />
            </div>
            <SkeletonBox $width="25%" $height="12px" />
            <div className="skeleton-row">
              <SkeletonBox $width="110px" $height="36px" $radius="8px" />
              <SkeletonBox $width="75px" $height="18px" />
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="skeleton-summary">
      <SkeletonBox $width="45%" $height="18px" $margin="0 0 6px" />
      <div className="skeleton-row">
        <SkeletonBox $width="50%" $height="13px" />
        <SkeletonBox $width="55px" $height="13px" />
      </div>
      <div className="skeleton-row">
        <SkeletonBox $width="40%" $height="13px" />
        <SkeletonBox $width="45px" $height="13px" />
      </div>
      <SkeletonBox $width="100%" $height="1px" $radius="0" />
      <div className="skeleton-row">
        <SkeletonBox $width="35%" $height="18px" />
        <SkeletonBox $width="80px" $height="18px" />
      </div>
      <SkeletonBox
        $width="100%"
        $height="44px"
        $radius="14px"
        $margin="8px 0 0"
      />
    </div>
  </SkeletonCartLayout>
);

export const ProfileSkeleton = () => (
  <SkeletonProfileLayout aria-hidden="true">
    <div className="skeleton-hero">
      <SkeletonBox
        className="skeleton-hero-box"
        $width="80px"
        $height="80px"
        $radius="50%"
      />
      <SkeletonBox className="skeleton-hero-box" $width="180px" $height="24px" />
      <SkeletonBox className="skeleton-hero-box" $width="220px" $height="14px" />
      <SkeletonBox
        className="skeleton-hero-box"
        $width="130px"
        $height="24px"
        $radius="9999px"
      />
    </div>

    <div className="skeleton-content">
      <div className="skeleton-stats">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className="skeleton-stat-card" key={idx}>
            <SkeletonBox $width="40px" $height="40px" $radius="10px" />
            <div className="skeleton-stat-text">
              <SkeletonBox $width="45px" $height="22px" />
              <SkeletonBox $width="75px" $height="12px" />
            </div>
          </div>
        ))}
      </div>

      <div className="skeleton-grid">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className="skeleton-section-card" key={idx}>
            <SkeletonBox $width="40%" $height="18px" />
            <SkeletonBox $width="100%" $height="44px" $radius="10px" />
            <SkeletonBox $width="100%" $height="44px" $radius="10px" />
            <SkeletonBox $width="80%" $height="44px" $radius="10px" />
          </div>
        ))}
      </div>
    </div>
  </SkeletonProfileLayout>
);

export const InfoCardSkeleton = () => (
  <SkeletonInfoCard aria-hidden="true">
    <SkeletonBox $width="32%" $height="13px" />
    <SkeletonBox $width="70%" $height="18px" />
    <SkeletonBox $width="100%" $height="13px" />
    <SkeletonBox $width="85%" $height="13px" />
  </SkeletonInfoCard>
);

export const QuizQuestionSkeleton = () => (
  <SkeletonQuizCard aria-hidden="true">
    <SkeletonBox $width="78%" $height="18px" $margin="0 0 8px" />
    <SkeletonBox $width="100%" $height="46px" $radius="10px" />
    <SkeletonBox $width="100%" $height="46px" $radius="10px" />
    <SkeletonBox $width="100%" $height="46px" $radius="10px" />
    <SkeletonBox $width="100%" $height="46px" $radius="10px" />
  </SkeletonQuizCard>
);