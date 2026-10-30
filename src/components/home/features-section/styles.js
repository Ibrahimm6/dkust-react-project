import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding: 60px 0;
  background-color: var(--color-bg-white);
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  /* max-width: var(--container-max-width); */
  /* margin: 0 auto; */
  /* padding: var(--container-padding); */
  /* width: 100%; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0fdf4;
  color: var(--color-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 15px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 0.85rem;
  color: var(--color-text-gray);
  line-height: 1.6;
  max-width: 320px;
`;
