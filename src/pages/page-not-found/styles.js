import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const NotFoundWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 20px;
  background-color: var(--color-bg-gray);

  .not-found-card {
    background-color: var(--color-bg-white);
    border: 1px solid #ebe6e7;
    border-top: 6px solid var(--color-primary);
    border-radius: 16px;
    padding: 48px 36px;
    max-width: 520px;
    width: 100%;
    text-align: center;
    box-shadow: 0 10px 30px rgba(11, 31, 58, 0.06);
  }

  .icon-badge {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background-color: #f0fdf4;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 0 auto 20px;
  }

  .error-code {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1;
    color: var(--color-navy);
    letter-spacing: -2px;
    margin-bottom: 12px;

    span {
      color: var(--color-primary);
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-dark);
    margin-bottom: 10px;
  }

  p {
    font-size: 0.925rem;
    color: var(--color-text-gray);
    line-height: 1.6;
    margin: 0 auto 28px;
    max-width: 400px;
  }

  .actions-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 11px 24px;
      border-radius: var(--border-radius-btn);
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .btn-home {
      background-color: var(--color-primary);
      color: var(--color-text-white);
      border: 1px solid var(--color-primary);

      &:hover {
        background-color: var(--color-primary-hover);
        border-color: var(--color-primary-hover);
        transform: translateY(-1px);
      }
    }

    .btn-products {
      background-color: transparent;
      color: var(--color-text-dark);
      border: 1px solid #d1d5db;

      &:hover {
        border-color: var(--color-primary);
        color: var(--color-primary);
        background-color: #f0fdf4;
      }
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding: 45px 16px;

    .not-found-card {
      padding: 36px 24px;
    }

    .error-code {
      font-size: 3.75rem;
    }

    h1 {
      font-size: 1.3rem;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .not-found-card {
      padding: 30px 18px;
    }

    .error-code {
      font-size: 3.25rem;
    }

    .actions-group {
      flex-direction: column;
      width: 100%;

      a {
        width: 100%;
      }
    }
  }
`;