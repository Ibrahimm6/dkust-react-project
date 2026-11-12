import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 20px;
  flex-grow: 1;
  background-color: var(--color-page-bg);

  .verify-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 10px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-top: 6px solid #00a63e;
    text-align: center;
  }

  .icon-box {
    width: 64px;
    height: 64px;
    background-color: #dcfce7;
    color: #00a651;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    margin: 0 auto 20px;
  }

  h2 {
    color: #1a1a2e;
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 32px;
  }

  .subtitle {
    color: #6b7280;
    font-size: 0.9rem;
    margin-bottom: 24px;
    line-height: 1.5;

    strong {
      color: #111827;
      display: block;
      margin-top: 4px;
    }
  }

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

  .back-link {
    margin-top: 20px;
    color: #ffffff;
    font-size: 14px;
    text-decoration: underline;
    opacity: 0.85;

    &:hover {
      opacity: 1;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 30px 14px;

    .verify-card {
      padding: 28px 18px;
    }

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