import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const FooterWrapper = styled.footer`
  background-color: var(--color-bg-white);
  border-top: 1px solid #ebe6e7;
  padding: 52px 0 20px;
  width: 100%;

  .footer-top {
    display: grid;
    grid-template-columns: 1.25fr 1fr 1fr 1.35fr;
    gap: 32px;
    margin-bottom: 32px;
  }

  .footer-col {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .col-title {
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--color-text-dark);
    font-size: 0.8rem;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      color: var(--color-text-gray);
      font-size: 13px;
      line-height: 1.6;
    }

    a {
      color: var(--color-text-gray);
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .newsletter-text {
    color: var(--color-text-gray);
    font-size: 13px;
    margin-bottom: 14px;
    line-height: 1.5;
  }

  .newsletter-form {
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 310px;
    height: 40px;

    input {
      flex: 1;
      min-width: 0;
      padding: 0 12px;
      font-size: 13px;
      color: var(--color-text-dark);
      background-color: #ffffff;
      border: 1px solid #d1d5db;
      border-right: none;
      border-radius: 8px 0 0 8px;
      outline: none;
      transition: border-color 0.2s ease;

      &:focus {
        border-color: var(--color-primary);
      }

      &:disabled {
        background-color: #f3f4f6;
        cursor: not-allowed;
      }
    }

    button {
      background-color: var(--color-primary);
      color: var(--color-text-white);
      border: 1px solid var(--color-primary);
      padding: 0 14px;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: var(--color-primary-hover);
        border-color: var(--color-primary-hover);
      }

      &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }

      svg {
        transform: rotate(45deg) translate(-1px, 1px);
        font-size: 0.95rem;
      }
    }
  }

  .subscribe-feedback {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;

    &.success {
      color: #16a34a;
    }

    &.error {
      color: #dc2626;
    }
  }

  .footer-divider {
    border: 0;
    border-top: 1px solid #e5e7eb;
    margin: 0;
    opacity: 1;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 18px;
    gap: 16px;
  }

  .copyright {
    color: #9ca3af;
    font-size: 12px;
    margin: 0;
  }

  .social-icons {
    display: flex;
    gap: 10px;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #f3f4f6;
      color: #4b5563;
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 0.9rem;

      &:hover {
        background-color: var(--color-primary);
        color: var(--color-text-white);
        transform: translateY(-2px);
      }
    }
  }

  @media ${devicesBreakpoints.portable} {
    .footer-top {
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding: 40px 0 20px;

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 34px 0 18px;

    .footer-top {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .newsletter-form {
      max-width: 100%;
    }
  }
`;