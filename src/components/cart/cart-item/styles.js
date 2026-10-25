import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: ${(props) => props.$bgColor || 'var(--color-navy)'};
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ItemContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-dark);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export const ItemCategory = styled.span`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: #ef4444;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityControl = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  height: 32px;
`;

export const QtyBtn = styled.button`
  background-color: var(--color-bg-white);
  border: none;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--color-text-gray);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #f3f4f6;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const QtyValue = styled.span`
  padding: 0 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-dark);
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: var(--color-primary);

  span {
    font-size: 12px;
    font-weight: 400;
    color: #9ca3af;
  }
`;