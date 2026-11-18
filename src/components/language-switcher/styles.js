import styled from "styled-components";

export const SwitcherButton = styled.button`
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-text-white);
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    font-size: 14px;
    color: var(--color-accent);
  }

  &:hover {
    background-color: rgba(0, 166, 81, 0.2);
    border-color: var(--color-primary);
    color: var(--color-text-white);
  }
`;