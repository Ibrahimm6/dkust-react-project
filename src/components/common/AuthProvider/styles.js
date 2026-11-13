import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const AuthProviderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 20px;
  flex-grow: 1;
  background-color: var(--color-page-bg);

  .auth-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 10px;
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth || "480px"};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-top: 6px solid #00a63e;
    text-align: ${({ $centered }) => ($centered ? "center" : "left")};
  }

  .auth-icon-box {
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

  .auth-title {
    text-align: center;
    margin-bottom: 6px;
    color: #1a1a2e;
    font-weight: 700;
    font-size: 1.75rem;
  }

  .auth-description {
    text-align: center;
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 28px;
    line-height: 1.5;

    strong {
      color: #111827;
      display: block;
      margin-top: 4px;
    }
  }

  .auth-divider {
    text-align: center;
    margin: 16px 0;
    color: #888;
    font-size: 12px;
  }

  .auth-social-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 22px;

    button {
      background-color: #ffffff;
      color: #111827;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 9px 12px;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f9fafb;
      }

      i {
        color: #1877f2;
        font-size: 16px;
      }
    }
  }

  .auth-footer-text {
    text-align: center;
    font-size: 14px;
    color: #6b7280;
    margin-top: 10px;

    a {
      color: #00a651;
      text-decoration: none;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .auth-back-link {
    margin-top: 20px;
    color: #ffffff;
    font-size: 14px;
    text-decoration: underline;
    opacity: 0.85;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
      color: #ffffff;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding: 40px 16px;

    .auth-card {
      padding: 32px 24px;
    }

    .auth-title {
      font-size: 1.5rem;
    }

    .auth-description {
      margin-bottom: 24px;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 30px 14px;

    .auth-card {
      padding: 24px 16px;
    }

    .auth-social-grid {
      grid-template-columns: 1fr;
    }
  }
`;