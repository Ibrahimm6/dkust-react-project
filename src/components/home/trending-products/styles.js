import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingContainer = styled.section`
  padding: 60px 0;
  background-color: var(--color-bg-gray);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* max-width: var(--container-max-width); */
  margin: 0 auto 30px auto;
  /* padding: var(--container-padding); */
  /* width: 100%; */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const HeaderContent = styled.div``;

export const HotBadge = styled.span`
  color: var(--color-primary);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
  display: block;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-text-dark);
  margin-bottom: 8px;
`;

export const SectionSubtitle = styled.p`
  color: var(--color-text-gray);
  font-size: 0.9rem;
  margin: 0;
`;

export const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: var(--border-radius-btn);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  background-color: var(--color-bg-white);
  margin-right: 10px;

  &:hover {
    background-color: #f0fdf4;
    color: var(--color-primary);
  }
`;

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
    content: '' !important;
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

  .swiper-button-prev { left: 0px !important; }
  .swiper-button-next { right: 0px !important; }
`;