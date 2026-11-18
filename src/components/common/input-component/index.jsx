import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 22px;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
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
  padding-right: ${(props) => (props.$isPassword ? "40px" : "12px")};
  border-radius: 6px;
  border: 1px solid ${(props) => (props.$hasError ? "#ef4444" : "#d1d5db")};
  box-sizing: border-box;
  font-size: 15px;
  font-family: inherit;
  color: #111827;
  outline: none;
  resize: ${(props) => (props.$isTextarea ? "vertical" : "none")};
  transition: border-color 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${(props) => (props.$hasError ? "#ef4444" : "#00a651")};
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
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  color: #ef4444;
  font-size: 11px;
  line-height: 1.2;
`;

const InputComponent = ({
  fieldLabel,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isTextarea = type === "textarea";
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <InputWrapper>
      <StyledLabel>{fieldLabel}</StyledLabel>
      <InputFieldContainer>
        <StyledInput
          as={isTextarea ? "textarea" : "input"}
          rows={isTextarea ? 4 : undefined}
          name={name}
          type={isTextarea ? undefined : inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          $isPassword={isPassword}
          $isTextarea={isTextarea}
          $hasError={touched && Boolean(error)}
        />
        {isPassword && (
          <IconWrapper onClick={() => setShowPassword(!showPassword)}>
            <i className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </IconWrapper>
        )}
      </InputFieldContainer>
      {touched && error ? <ErrorText>{error}</ErrorText> : null}
    </InputWrapper>
  );
};

export default InputComponent;