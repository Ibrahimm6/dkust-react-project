import styled from "styled-components";
import { Link } from "react-router-dom";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0;
`;

export const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  flex: 1;
`;

export const QuickActionButton = styled(Link)`
  border: 1px solid #ebe6e7;
  border-radius: 10px;
  padding: 18px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--color-text-dark);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;

  svg {
    color: var(--color-text-gray);
    transition: color 0.2s ease;
  }

  &:hover {
    border-color: var(--color-primary);
    background-color: #f0fdf4;
    color: var(--color-primary);

    svg {
      color: var(--color-primary);
    }
  }
`;

export const SectionCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;

  @media ${devicesBreakpoints.thumb} {
    padding: 18px;

    ${QuickActionsGrid} {
      grid-template-columns: 1fr;
    }
  }
`;