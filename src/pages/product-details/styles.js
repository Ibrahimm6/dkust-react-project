import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
  flex-grow: 1;
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
  span { color: #111827; font-weight: 600; }
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
  &:hover { color: #00a651; }
`;

export const ProductSection = styled.div`
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 50px;
@media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ProductImageArea = styled.div`
  width: 50%;
  background-color: ${(props) => props.bgColor || '#1a3a6e'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: white;
  i { font-size: 80px; opacity: 0.8; }
  .badge { background-color: #22c55e; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 20px; }
  @media (max-width: 992px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const ProductInfoArea = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
    padding: 25px;
  }
`;

export const CategoryTag = styled.span`
  color: #6b7280; font-size: 13px; text-transform: uppercase; margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  font-size: 28px; color: #111827; margin-bottom: 15px;
`;

export const RatingBox = styled.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 14px; color: #6b7280;
  .stars { color: #facc15; }
`;

export const Description = styled.p`
  color: #4b5563; line-height: 1.6; margin-bottom: 25px;
`;

export const FeaturesList = styled.ul`
  list-style: none; margin-bottom: 30px;
  li { display: flex; align-items: center; gap: 10px; color: #4b5563; margin-bottom: 10px; font-size: 15px; }
  li i { color: #00a651; }
`;

export const Price = styled.div`
  font-size: 32px; font-weight: bold; color: #00a651; margin-bottom: 25px;
  span { font-size: 14px; color: #6b7280; font-weight: normal; }
`;

export const QuantityControl = styled.div`
  display: flex; align-items: center; gap: 15px; margin-bottom: 30px;
  span { font-weight: 500; color: #374151; }
  .controls {
    display: flex; align-items: center; border: 1px solid #d1d5db; border-radius: 6px; overflow: hidden;
    button { background: #f3f4f6; border: none; padding: 8px 15px; font-size: 16px; cursor: pointer; color: #374151; }
    button:hover:not(:disabled) { background: #e5e7eb; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .qty-value { padding: 8px 20px; font-weight: bold; border-left: 1px solid #d1d5db; border-right: 1px solid #d1d5db; }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;

  & > button:first-child {
    flex: 2; 
  }

  & > button:last-child {
    flex: 1; 
    background-color: transparent !important;
    border: 2px solid #00a651 !important;
    color: #00a651 !important;
  }

  & > button:last-child:hover {
    background-color: #f0fdf4 !important;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    
    & > button:first-child,
    & > button:last-child {
      flex: none;
      width: 100%; 
    }
  }
`;

export const RelatedSectionTitle = styled.h2`
  font-size: 22px; color: #111827; margin-bottom: 20px; font-weight: bold;
`;

