import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const ProductsSwiperWrapper = styled.div`
  position: relative;
  width: 100%;

  .swiper {
    padding: 4px 20px 28px !important;
  }

  .slide-inner {
    height: 100%;
    padding-bottom: 10px;
  }

  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-pagination-bullet {
    width: 8px !important;
    height: 8px !important;
    background-color: #d1d5db !important;
    opacity: 1 !important;
    transition: all 0.3s ease !important;
    margin: 0 5px !important;
  }

  .swiper-pagination-bullet-active {
    width: 20px !important;
    border-radius: 4px !important;
    background-color: var(--color-primary) !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 36px !important;
    height: 36px !important;
    background-color: var(--color-bg-white) !important;
    border-radius: 50% !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08) !important;
    border: 1px solid #e5e7eb !important;
    transition: all 0.3s ease !important;
    margin-top: -25px !important;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after,
  .swiper-button-next svg,
  .swiper-button-prev svg {
    content: "" !important;
    display: none !important;
  }

  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'/%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 16px !important;
    right: 0px !important;
  }

  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'/%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 16px !important;
    left: 0px !important;
  }

  .swiper-button-next:hover:not(.swiper-button-disabled) {
    border-color: var(--color-primary) !important;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a651' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'/%3E%3C/svg%3E") !important;
  }

  .swiper-button-prev:hover:not(.swiper-button-disabled) {
    border-color: var(--color-primary) !important;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a651' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'/%3E%3C/svg%3E") !important;
  }

  .swiper-button-disabled {
    opacity: 0.4 !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
    border: 1px solid #e5e7eb !important;
    pointer-events: auto !important;
  }

  @media ${devicesBreakpoints.thumb} {
    .swiper {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
`;