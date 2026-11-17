import styled from "styled-components";
import { Link } from "react-router-dom";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0;
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  max-height: 255px;
  overflow-y: auto;
  padding-inline-end: 6px;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 9999px;
    transition: background-color 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary);
  }
`;

export const EmptyOrders = styled.p`
  color: #9ca3af;
  font-size: 14px;
  text-align: center;
  margin: auto 0;
  padding: 24px 0;
`;

export const OrderCard = styled.div`
  background-color: #f8fafc;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-shrink: 0;
`;

export const OrderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

export const OrderLogoBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background-color: var(--color-navy);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

export const OrderTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-dark);
`;

export const OrderDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #9ca3af;
`;

export const OrderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
`;

export const OrderPrice = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: var(--color-text-dark);
`;

export const OrderStatusBadge = styled.span`
  font-size: 10px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 9999px;
  background-color: ${(props) => (props.$isActive ? "#dcfce7" : "#f3f4f6")};
  color: ${(props) => (props.$isActive ? "#15803d" : "#6b7280")};
`;

export const BrowseMoreButton = styled(Link)`
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #00a63e;
    color: #fff;
  }
`;

export const SectionCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  @media ${devicesBreakpoints.thumb} {
    padding: 18px;

    ${OrderCard} {
      padding: 12px;
    }

    ${OrderLeft} {
      gap: 10px;
    }
  }
`;