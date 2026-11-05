import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const HeroSection = styled.div`
  background: linear-gradient(
    135deg,
    rgb(13, 27, 62) 0%,
    rgb(26, 58, 110) 50%,
    rgb(13, 27, 62) 100%
  );
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
  padding-block: 50px;
  flex-grow: 1;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
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

// Root Wrapper & Responsive Media Queries
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-bg-gray);

  @media ${devicesBreakpoints.portable} {
    ${ProductsGrid} {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    ${HeroSection} {
      padding: 45px 20px;
    }

    ${HeroTitle} {
      font-size: 28px;
    }

    ${ContentContainer} {
      padding-block: 35px;
    }

    ${ProductsGrid} {
      grid-template-columns: 1fr;
    }
  }
`;