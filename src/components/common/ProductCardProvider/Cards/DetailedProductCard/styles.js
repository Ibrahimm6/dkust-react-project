import styled from "styled-components";
import { devicesBreakpoints } from "../../../../../constants/Breakpoints";

export const DetailedCardWrapper = styled.div`
  display: flex;
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 50px;

  .image-area {
    width: 45%;
    min-height: 360px;
    background-color: ${({ $bgColor }) => $bgColor || "#1a3a6e"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    color: #ffffff;
    position: relative;

    i.product-icon {
      font-size: 84px;
      opacity: 0.85;
    }

    .badge-pill {
      background-color: #22c55e;
      color: #ffffff;
      padding: 5px 14px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
      margin-top: 20px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
  }

  .info-area {
    width: 55%;
    padding: 32px 36px;
    display: flex;
    flex-direction: column;
  }

  .category-tag {
    color: var(--color-text-gray);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .product-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--color-text-dark);
    margin-bottom: 10px;
  }

  .rating-box {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    color: var(--color-text-gray);

    .stars {
      color: #facc15;
      display: flex;
      gap: 3px;
    }
  }

  .description {
    color: #4b5563;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 22px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 16px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #374151;
      font-size: 14px;

      i {
        color: var(--color-primary);
        flex-shrink: 0;
      }
    }
  }

  .price-box {
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 18px;

    span {
      font-size: 14px;
      color: var(--color-text-gray);
      font-weight: 400;
    }
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 22px;

    .qty-label {
      font-weight: 600;
      font-size: 14px;
      color: #374151;
    }

    .controls {
      display: inline-flex;
      align-items: center;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      overflow: hidden;

      button {
        background: #f3f4f6;
        border: none;
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        color: #374151;
        transition: background-color 0.2s ease;

        &:hover:not(:disabled) {
          background: #e5e7eb;
        }

        &:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
      }

      .qty-value {
        padding: 8px 20px;
        font-weight: 700;
        font-size: 14px;
        border-left: 1px solid #d1d5db;
        border-right: 1px solid #d1d5db;
      }
    }
  }

  .action-buttons {
    display: flex;
    gap: 14px;
    margin-top: auto;

    & > button {
      margin-bottom: 0;
    }

    & > button:first-child {
      flex: 2;
    }

    & > button:last-child {
      flex: 1;
      background-color: transparent !important;
      border: 2px solid var(--color-primary) !important;
      color: var(--color-primary) !important;

      &:hover {
        background-color: #f0fdf4 !important;
      }
    }
  }

  @media ${devicesBreakpoints.portable} {
    flex-direction: column;

    .image-area {
      width: 100%;
      min-height: 240px;
    }

    .info-area {
      width: 100%;
      padding: 28px 24px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    margin-bottom: 36px;

    .product-title {
      font-size: 24px;
    }

    .features-list {
      grid-template-columns: 1fr;
    }

    .price-box {
      font-size: 26px;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .info-area {
      padding: 20px 16px;
    }

    .action-buttons {
      flex-direction: column;

      & > button:first-child,
      & > button:last-child {
        flex: none;
        width: 100%;
      }
    }
  }
`;