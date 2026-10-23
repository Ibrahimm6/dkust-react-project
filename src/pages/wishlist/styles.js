import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-bg-gray); 
`;

export const HeroSection = styled.div`
  background: linear-gradient(135deg, rgb(13, 27, 62) 0%, rgb(26, 58, 110) 50%, rgb(13, 27, 62) 100%);
  padding: 63px 33px; 
  text-align: center;
  color: var(--color-text-white);
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px; 
`;

export const HeroSubtitle = styled.p`
  color: var(--color-text-muted);
  font-size: 15px; 
  max-width: 512px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ContentContainer = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 50px 33px; 
  width: 100%;
  flex-grow: 1;
`;

// export const ResultsText = styled.p`
//   color: #99a1af;
//   font-size: 12px;
//   margin-bottom: 20px;
// `;

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

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 0;
`;

export const EmptyIcon = styled.div`
  color: #d1d5dc; 
  margin-bottom: 16px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 64px;
    height: 64px;
  }
`;

export const EmptyText = styled.p`
  color: #9ca3af;
  font-size: 16px;
  margin-bottom: 30px; 
`;