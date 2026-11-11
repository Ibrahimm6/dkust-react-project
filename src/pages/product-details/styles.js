import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const ProductDetailsWrapper = styled.div`
  background-color: var(--color-bg-gray);
  width: 100%;
  flex-grow: 1;
  padding-block: 40px 60px;

  .breadcrumb-nav {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;

    a {
      color: #6b7280;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-primary);
      }
    }

    span.current {
      color: var(--color-text-dark);
      font-weight: 600;
    }
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #4b5563;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 28px;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  .related-section {
    margin-top: 10px;
  }

  .related-title {
    font-size: 22px;
    color: var(--color-text-dark);
    margin-bottom: 20px;
    font-weight: 700;
  }

  .related-swiper-box {
    padding: 0;
    max-width: 100%;

    .slide-inner {
      height: 100%;
      padding-bottom: 12px;
    }
  }

  .not-found-box {
    text-align: center;
    padding: 60px 20px;

    h2 {
      font-size: 24px;
      font-weight: 700;
      color: var(--color-text-dark);
      margin-bottom: 12px;
    }

    p {
      color: var(--color-text-gray);
      font-size: 15px;
      margin-bottom: 24px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding-block: 28px 45px;

    .back-link {
      margin-bottom: 20px;
    }

    .related-title {
      font-size: 19px;
      margin-bottom: 16px;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding-block: 20px 35px;

    .breadcrumb-nav {
      font-size: 13px;
    }
  }
`;