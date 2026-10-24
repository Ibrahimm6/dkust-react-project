import styled from "styled-components";

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
`;

export const StatIconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background-color: ${(props) => props.$bg || "#f3f4f6"};
  color: ${(props) => props.$color || "var(--color-primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-dark);
  line-height: 1.2;
`;

export const StatLabel = styled.span`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
`;