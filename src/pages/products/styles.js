import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const HeroSection = styled.div`
  background: linear-gradient(
    135deg,
    rgb(13, 27, 62) 0%,
    rgb(26, 58, 110) 50%,
    rgb(13, 27, 62) 100%
  );
  padding: 55px 33px;
  text-align: center;
  color: var(--color-text-white);
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const HeroSubtitle = styled.p`
  color: var(--color-text-muted);
  font-size: 14px;
  max-width: 512px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ContentContainer = styled.div`
  padding-block: 40px;
`;

export const FilterSection = styled.section`
  position: sticky;
  top: var(--header-height);
  z-index: 1040;
  background-color: var(--color-bg-gray);
  border-bottom: 1px solid #ebe6e7;
  width: 100%;
`;

export const FilterContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  min-width: 0;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  min-width: 0;
`;

export const CategoryButton = styled.button`
  padding: 6px 16px;
  border-radius: var(--border-radius-btn);
  border: 1px solid
    ${(props) => (props.$isActive ? "var(--color-primary)" : "#d1d5db")};
  background-color: ${(props) =>
    props.$isActive ? "var(--color-primary)" : "var(--color-bg-white)"};
  color: ${(props) =>
    props.$isActive ? "var(--color-text-white)" : "var(--color-text-gray)"};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "var(--color-primary-hover)" : "#f3f4f6"};
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const SortSelect = styled.select`
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: var(--color-bg-white);
  color: var(--color-text-gray);
  font-size: 12px;
  outline: none;
  cursor: pointer;
  min-width: 0;

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  background-color: var(--color-bg-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #d1d5db;
  flex-shrink: 0;
`;

export const IconButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.$isActive ? "var(--color-primary)" : "transparent"};
  color: ${(props) =>
    props.$isActive ? "var(--color-text-white)" : "var(--color-text-gray)"};
  width: 32px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) =>
      props.$isActive ? "var(--color-text-white)" : "var(--color-primary)"};
  }
`;

export const ResultsText = styled.p`
  color: #99a1af;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Root Wrapper & Responsive Media Queries
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-bg-gray);
  overflow-x: clip;

  @media ${devicesBreakpoints.portable} {
    ${ProductsGrid} {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    ${HeroSection} {
      padding: 40px 20px;
    }

    ${HeroTitle} {
      font-size: 28px;
    }

    ${FilterContainer} {
      flex-direction: column;
      align-items: stretch;
      padding-block: 12px;
      gap: 10px;
    }

    ${CategoriesWrapper} {
      width: 100%;
      gap: 6px;
    }

    ${CategoryButton} {
      padding: 5px 12px;
      font-size: 11px;
    }

    ${ControlsWrapper} {
      width: 100%;
      justify-content: space-between;
    }

    ${SortSelect} {
      flex: 1;
      width: 100%;
    }

    ${ContentContainer} {
      padding-block: 30px;
    }

    ${ProductsGrid} {
      grid-template-columns: 1fr;
    }
  }
`;