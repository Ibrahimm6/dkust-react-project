import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const SummaryTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0 0 18px 0;
`;

export const ItemsBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

export const ItemNameText = styled.span`
  color: var(--color-text-gray);
`;

export const ItemPriceText = styled.span`
  font-weight: 600;
  color: var(--color-text-dark);
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #f3f4f6;
  margin: 16px 0;
  opacity: 1;
`;

export const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--color-text-gray);
  margin-bottom: 10px;

  strong {
    color: var(--color-text-dark);
    font-weight: 600;
  }
`;

export const TaxRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--color-text-gray);
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 24px;

  strong {
    font-size: 16px;
    color: var(--color-primary);
  }
`;

export const CheckoutError = styled.p`
  color: #dc2626;
  font-size: 12px;
  text-align: center;
  margin: 0 0 12px 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #008236;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const SecureNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 12px;
  font-size: 12px;
  color: #9ca3af;
`;

export const SummaryCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: calc(var(--header-height) + 24px);

  @media ${devicesBreakpoints.portable} {
    position: static;
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 18px;
  }
`;

export const MobileCheckoutBar = styled.div`
  display: none;

  @media ${devicesBreakpoints.pocket} {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    inset-inline: 0;
    z-index: 1030;
    background-color: var(--color-bg-white);
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 -4px 16px rgba(11, 31, 58, 0.08);
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  }
`;

export const MobileBarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

export const MobileTotalGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const MobileTotalLabel = styled.span`
  font-size: 11px;
  color: var(--color-text-gray);
`;

export const MobileTotalValue = styled.strong`
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
`;

export const MobileCheckoutButton = styled(CheckoutButton)`
  flex: 1;
  width: auto;
  min-height: 44px;
  padding: 10px 18px;
`;