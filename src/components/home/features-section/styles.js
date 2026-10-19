import styled from 'styled-components';

export const FeaturesContainer = styled.section`
  padding: 80px 20px;
  background-color: #ffffff;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f0fdf4; 
  color: #00a651; 
  border-radius: 18px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
`;

export const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #9ca3af; 
  line-height: 1.6;
  max-width: 320px;
`;