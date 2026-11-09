import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 20px;
  flex-grow: 1;
  background-color: var(--color-page-bg);

  .login-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 10px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-top: 6px solid #00a63e;
  }

  h2 {
    text-align: center;
    margin-bottom: 5px;
    color: #1a1a2e;
    font-weight: 700;
    font-size: 1.75rem;
  }

  .subtitle {
    text-align: center;
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 28px;
  }

  .forgot-row {
    display: flex;
    justify-content: flex-end;
    margin-top: -12px;
    margin-bottom: 12px;

    a {
      color: #00a651;
      font-size: 12px;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .remember-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 22px;
    font-size: 13px;
    color: #6b7280;

    input {
      cursor: pointer;
      accent-color: #00a651;
      width: 15px;
      height: 15px;
    }

    label {
      cursor: pointer;
      user-select: none;
    }
  }

  .divider {
    text-align: center;
    margin: 16px 0;
    color: #888;
    font-size: 12px;
  }

  .social-grid {
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

  .footer-text {
    text-align: center;
    font-size: 14px;
    color: #6b7280;

    a {
      color: #00a651;
      text-decoration: none;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
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

  @media ${devicesBreakpoints.pocket} {
    padding: 40px 16px;

    .login-card {
      padding: 32px 24px;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 30px 14px;

    .login-card {
      padding: 24px 16px;
    }

    .social-grid {
      grid-template-columns: 1fr;
    }
  }
`;