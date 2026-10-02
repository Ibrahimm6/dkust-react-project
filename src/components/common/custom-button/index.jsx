import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.bgColor || '#00a651'};
  color: ${(props) => props.color || '#fff'};
  border: 1px solid ${(props) => props.bgColor || '#00a651'};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px); 
    opacity: 0.9;
  }
`;

const CustomButton = ({ title, onClickFunction, bgColor, color }) => {
  return (
    <StyledButton type="button" onClick={onClickFunction} bgColor={bgColor} color={color}>
      {title}
    </StyledButton>
  );
};

export default CustomButton;