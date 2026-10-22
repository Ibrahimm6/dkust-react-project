import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingContainer = styled.section`
  padding: 60px 20px;
  background-color: #f8fafc;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const HeaderContent = styled.div``;

export const HotBadge = styled.span`
  color: #00a651;
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
  color: #111827;
  margin-bottom: 8px;
`;

export const SectionSubtitle = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
`;

export const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 14px;
  border: 1px solid #00a651;
  color: #00a651;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  background-color: white;
  margin-right: 10px;

  &:hover {
    background-color: #f0fdf4;
    color: #00a651;
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .swiper {
    padding-bottom: 20px!important; 
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
    background-color: #00a651 !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 36px !important;
    height: 36px !important;
    background-color: #ffffff !important;
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
    border-color: #00a651 !important;
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