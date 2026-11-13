import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const RegisterFormStyles = styled.form`
  .name-row {
    display: flex;
    gap: 15px;
    width: 100%;
  }

  .strength-bar {
    display: flex;
    gap: 5px;
    margin-top: 4px;
    margin-bottom: 4px;

    .segment {
      height: 4px;
      flex: 1;
      border-radius: 2px;
      background-color: #e5e7eb;
      transition: background-color 0.2s ease;
    }
  }

  .strength-label {
    font-size: 12px;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .checkbox-row {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 4px;
    margin-bottom: 26px;
    font-size: 14px;
    color: #555;

    input {
      cursor: pointer;
      margin-top: 4px;
      accent-color: #00a651;
    }

    .green-text {
      color: #00a651;
      cursor: pointer;
      font-weight: 600;
    }

    .terms-error {
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      color: #ef4444;
      font-size: 11px;
      line-height: 1.2;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .name-row {
      flex-direction: column;
      gap: 0;
    }

    .checkbox-row {
      font-size: 13px;
    }
  }
`;