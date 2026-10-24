import styled from 'styled-components';

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
`;

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
  font-size: 15px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 20px;

  strong {
    font-size: 16px;
    color: var(--color-primary);
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const SecureNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 14px;
  font-size: 11px;
  color: #9ca3af;
`;