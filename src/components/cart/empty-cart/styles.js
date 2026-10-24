import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 0;
`;

export const EmptyIcon = styled.div`
  color: #d1d5dc;
  margin-bottom: 16px;
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
  font-size: 15px;
  margin-bottom: 24px;
`;

export const BrowseBtn = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  padding: 12px 26px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;