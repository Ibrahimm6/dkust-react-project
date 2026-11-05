import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
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
  margin: 0;
`;

//Root Wrapper & Responsive Media Queries

export const FeaturesContainer = styled.section`
  padding: 60px 0;
  background-color: var(--color-bg-white);

  @media ${devicesBreakpoints.portable} {
    ${FeaturesGrid} {
      gap: 20px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding: 45px 0;

    ${FeaturesGrid} {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }
`;