import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
padding-block:40px;
flex-grow:1;
@media (max-width: 768px) {
  padding-block: 24px;
}
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
  span {
    color: #111827;
    font-weight: 600;
  }
    @media (max-width: 576px) {
    font-size: 12px;
    margin-bottom: 14px;
  } 
`;
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 30px;
  font-weight: 500;
  &:hover {
    color: #00a651;
  }
    @media (max-width: 576px) {
    font-size: 13px;
    margin-bottom: 20px;
    }
`;

export const RelatedSectionTitle = styled.h2`
  font-size: 22px;
  color: #111827;
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: 18px;
    }
`;
export const RelatedSwiperArea=styled.div`
@media (max-width: 576px) {
.swiper-button-next,
.swiper-button-prev {
display: none !important; 
  }
}
`;