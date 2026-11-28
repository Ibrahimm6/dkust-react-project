import styled, { keyframes } from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonBox = styled.div`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "16px"};
  border-radius: ${({ $radius }) => $radius || "8px"};
  margin: ${({ $margin }) => $margin || "0"};
  background: linear-gradient(90deg, #eef2f6 25%, #e2e8f0 50%, #eef2f6 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
  flex-shrink: 0;
`;

export const SkeletonSwiperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 4px 20px 28px;

  @media ${devicesBreakpoints.portable} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${devicesBreakpoints.thumb} {
    grid-template-columns: 1fr;
    padding: 4px 4px 28px;
  }
`;

export const SkeletonGridCard = styled.div`
  width: 100%;
  background-color: var(--color-bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .skeleton-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .skeleton-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    gap: 8px;
  }

  .skeleton-actions {
    display: flex;
    gap: 8px;
  }
`;

export const SkeletonListCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;

  .skeleton-thumb {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    flex-shrink: 0;
  }

  .skeleton-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .skeleton-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .skeleton-actions {
    display: flex;
    gap: 8px;
  }

  @media ${devicesBreakpoints.pocket} {
    flex-direction: column;
    padding: 16px;
    gap: 14px;

    .skeleton-thumb {
      width: 100%;
      height: 140px;
    }
  }
`;

export const SkeletonDetailsContainer = styled.div`
  .skeleton-card {
    display: flex;
    background-color: var(--color-bg-white);
    border: 1px solid #ebe6e7;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 50px;
  }

  .skeleton-image {
    width: 45%;
    min-height: 360px;
    border-radius: 0;
  }

  .skeleton-info {
    width: 55%;
    padding: 32px 36px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .skeleton-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 16px;
    margin-block: 6px;
  }

  .skeleton-buttons {
    display: flex;
    gap: 14px;
    margin-top: 8px;
  }

  @media ${devicesBreakpoints.portable} {
    .skeleton-card {
      flex-direction: column;
    }

    .skeleton-image {
      width: 100%;
      min-height: 240px;
    }

    .skeleton-info {
      width: 100%;
      padding: 28px 24px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    .skeleton-features {
      grid-template-columns: 1fr;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .skeleton-info {
      padding: 20px 16px;
    }

    .skeleton-buttons {
      flex-direction: column;
    }
  }
`;

export const SkeletonCartLayout = styled.div`
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: 28px;
  align-items: start;

  .skeleton-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .skeleton-item-card {
    background-color: var(--color-bg-white);
    border: 1px solid #ebe6e7;
    border-radius: 14px;
    padding: 20px;
    display: flex;
    gap: 18px;
    align-items: flex-start;
  }

  .skeleton-item-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .skeleton-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .skeleton-summary {
    background-color: var(--color-bg-white);
    border: 1px solid #ebe6e7;
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media ${devicesBreakpoints.portable} {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media ${devicesBreakpoints.thumb} {
    .skeleton-item-card {
      padding: 14px;
      gap: 12px;
    }

    .skeleton-summary {
      padding: 18px;
    }
  }
`;

export const SkeletonProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .skeleton-hero {
    background: linear-gradient(
      135deg,
      rgb(13, 27, 62) 0%,
      rgb(26, 58, 110) 50%,
      rgb(13, 27, 62) 100%
    );
    padding: 56px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .skeleton-hero-box {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.12) 25%,
      rgba(255, 255, 255, 0.24) 50%,
      rgba(255, 255, 255, 0.12) 75%
    );
    background-size: 200% 100%;
  }

  .skeleton-content {
    max-width: 1020px;
    margin: 0 auto;
    padding: 40px 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .skeleton-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .skeleton-stat-card {
    background-color: var(--color-bg-white);
    border: 1px solid #ebe6e7;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .skeleton-stat-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
  }

  .skeleton-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .skeleton-section-card {
    background-color: var(--color-bg-white);
    border: 1px solid #ebe6e7;
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media ${devicesBreakpoints.portable} {
    .skeleton-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .skeleton-grid {
      grid-template-columns: 1fr;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    .skeleton-content {
      padding: 28px 20px;
      gap: 20px;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .skeleton-stats {
      grid-template-columns: 1fr;
    }

    .skeleton-section-card {
      padding: 18px;
    }
  }
`;

export const SkeletonInfoCard = styled.div`
  border: 1px solid var(--border-subtle);
  background-color: var(--surface);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SkeletonQuizCard = styled.div`
  background: #ffffff;
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${devicesBreakpoints.pocket} {
    padding: 20px;
    margin-bottom: 18px;
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 16px;
  }
`;