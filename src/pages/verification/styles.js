import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const VerificationContentStyles = styled.div`
  .email-fallback {
    text-align: left;
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
      font-weight: 600;
      color: #374151;
    }

    input {
      width: 100%;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1px solid #d1d5db;
      font-size: 14px;
      outline: none;

      &:focus {
        border-color: #00a651;
      }
    }
  }

  .otp-inputs {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 24px;

    input {
      width: 48px;
      height: 54px;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;
      color: #111827;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      outline: none;
      transition: all 0.2s ease;

      &:focus {
        border-color: #00a651;
        box-shadow: 0 0 0 3px rgba(0, 166, 81, 0.15);
      }
    }
  }

  .resend-section {
    margin-top: 18px;
    font-size: 14px;
    color: #6b7280;
    text-align: center;

    button {
      background: none;
      border: none;
      color: #00a651;
      font-weight: 700;
      cursor: pointer;
      padding: 0;
      margin-left: 5px;
      text-decoration: underline;

      &:disabled {
        color: #9ca3af;
        cursor: not-allowed;
        text-decoration: none;
      }
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .otp-inputs {
      gap: 6px;

      input {
        width: 40px;
        height: 48px;
        font-size: 1.1rem;
      }
    }
  }
`;