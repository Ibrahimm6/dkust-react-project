import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin-bottom: 24px;
`;

export const QuestionText = styled.h4`
  font-size: 15px;
  color: #111827;
  margin-bottom: 18px;
  font-weight: 700;
  line-height: 1.5;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 18px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.$borderColor || '#e5e7eb'};
  background-color: ${(props) => props.$bgColor || '#ffffff'};
  margin-bottom: 12px;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  transition: all 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-color: ${(props) =>
      props.$disabled ? props.$borderColor : '#22c55e'};
  }

  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: ${(props) => props.$textColor || '#1f2937'};
    font-weight: ${(props) => props.$fontWeight || '400'};
  }

  input[type='radio'] {
    cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
    width: 15px;
    height: 15px;
    accent-color: #00a651;
    margin: 0;
  }

  .status {
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.$statusColor || 'inherit'};
  }
`;