import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-bottom: 20px;
`;

export const QuestionText = styled.h4`
  font-size: 16px;
  color: #111827;
  margin-bottom: 20px;
  font-weight: 600;
  line-height: 1.5;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.borderColor || '#e5e7eb'};
  background-color: ${(props) => props.bgColor || '#fff'};
  margin-bottom: 12px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => (props.disabled ? props.borderColor : '#00a651')};
  }

  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    color: ${(props) => props.textColor || '#374151'};
    font-weight: ${(props) => (props.disabled ? '600' : 'normal')};
  }

  input[type="radio"] {
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    width: 16px;
    height: 16px;
    accent-color: #00a651;
  }

  .status {
    font-size: 13px;
    font-weight: bold;
    color: ${(props) => props.statusColor || 'inherit'};
  }
`;