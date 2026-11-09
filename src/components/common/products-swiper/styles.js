import styled, { css } from "styled-components";

export const SwiperWrapper = styled.div`
  position: relative;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--container-padding);
  width: 100%;

  .swiper {
    padding-bottom: 20px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
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
  .swiper-button-prev::after {
    content: "" !important;
    display: none !important;
  }

  .swiper-button-next svg,
  .swiper-button-prev svg {
    display: none !important;
  }

  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'/%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 16px !important;
  }

  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'/%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 16px !important;
  }

  .swiper-button-next:hover:not(.swiper-button-disabled),
  .swiper-button-prev:hover:not(.swiper-button-disabled) {
    border-color: var(--color-primary) !important;
  }

  .swiper-button-next:hover:not(.swiper-button-disabled) {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a651' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'/%3E%3C/svg%3E") !important;
  }

  .swiper-button-prev:hover:not(.swiper-button-disabled) {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a651' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'/%3E%3C/svg%3E") !important;
  }

  .swiper-button-disabled {
    opacity: 0.4 !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
    border: 1px solid #e5e7eb !important;
    pointer-events: auto !important;
  }

  .swiper-button-prev {
    left: 0px !important;
  }
  .swiper-button-next {
    right: 0px !important;
  }
  ${({ $flush }) =>
    $flush &&
    css`
      padding: 0;
      max-width: 100%;

      .swiper {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    `}
`;