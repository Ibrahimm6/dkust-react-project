import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const InputFieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px; 
  padding-right: ${(props) => (props.type === 'password' ? '40px' : '12px')};
  border-radius: 6px;
  border: 1px solid ${(props) => (props.$hasError ? '#ef4444' : '#d1d5db')}; 
  box-sizing: border-box;
  font-size: 15px;
  color: #111827;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: #9ca3af; 
  }

  &:focus {
    border-color: ${(props) => (props.$hasError ? '#ef4444' : '#00a651')};
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
`;

const ErrorText = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 5px;
`;

const InputComponent = ({ fieldLabel, name, value, onChange, onBlur, placeholder, type, error, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <InputWrapper>
      <StyledLabel>{fieldLabel}</StyledLabel>
      <InputFieldContainer>
        <StyledInput
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          $hasError={touched && error}
        />
        {type === 'password' && (
          <IconWrapper onClick={() => setShowPassword(!showPassword)}>
           {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </IconWrapper>
        )}
      </InputFieldContainer>
      {touched && error ? <ErrorText>{error}</ErrorText> : null}
    </InputWrapper>
  );
};

export default InputComponent;