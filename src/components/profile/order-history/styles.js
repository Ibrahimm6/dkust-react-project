import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
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
`;

export const OrderCard = styled.div`
  background-color: #f8fafc;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const OrderLogoBox = styled.div`
  width: 40px;
  height: 40px;
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
  margin-top: 18px;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0fdf4;
    color: var(--color-primary);
  }
`;