import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f8fafc; 
`;

export const HeroSection = styled.div`
  background-color: #0b1f3a;
  padding: 60px 20px;
  text-align: center;
  color: white;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const HeroSubtitle = styled.p`
  color: #cbd5e1;
  font-size: 1.1rem;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 8px 18px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.isActive ? '#00a651' : '#d1d5db')};
  background-color: ${(props) => (props.isActive ? '#00a651' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#4b5563')};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#00a651' : '#f3f4f6')};
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SortSelect = styled.select`
  padding: 8px 15px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: #fff;
  color: #374151;
  font-size: 14px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #00a651;
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  overflow: hidden;
`;

export const IconButton = styled.button`
  border: none;
  background-color: ${(props) => (props.isActive ? '#00a651' : 'transparent')};
  color: ${(props) => (props.isActive ? '#fff' : '#6b7280')};
  width: 38px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:first-child {
    border-right: 1px solid #d1d5db;
  }
`;

export const ResultsText = styled.p`
  color: #9ca3af;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;