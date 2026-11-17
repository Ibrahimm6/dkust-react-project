import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const ProfileInfoWrapper = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3 {
      font-size: 16px;
      font-weight: 700;
      color: var(--color-text-dark);
      margin: 0;
    }

    .edit-btn {
      background: none;
      border: none;
      color: var(--color-primary);
      font-size: 12px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 6px;
      transition: background-color 0.2s ease;

      &:hover:not(:disabled) {
        background-color: #f0fdf4;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    .icon-circle {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background-color: #f6f3f4;
      color: var(--color-text-gray);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .text-group {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }
  }

  .info-label {
    font-size: 12px;
    color: #99a1af;
    margin-bottom: 3px;
  }

  .field-display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 28px;
    padding: 3px 8px;
    margin-inline-start: -8px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-dark);
    word-break: break-word;
    cursor: pointer;
    transition: background-color 0.2s ease;

    .inline-edit-icon {
      color: var(--color-primary);
      opacity: 0;
      flex-shrink: 0;
      transition: opacity 0.2s ease;
    }

    &:hover {
      background-color: #f8fafc;

      .inline-edit-icon {
        opacity: 1;
      }
    }

    &.empty {
      color: #9ca3af;
      font-style: italic;
    }

    &.readonly {
      cursor: default;

      &:hover {
        background-color: transparent;
      }
    }
  }

  .field-input {
    width: 100%;
    padding: 6px 10px;
    font-size: 14px;
    font-family: inherit;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 166, 81, 0.12);
    transition: border-color 0.2s ease;

    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
  }

  textarea.field-input {
    resize: none;
    line-height: 1.5;
  }

  .bio-wrapper {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid #f3f4f6;
    display: flex;
    flex-direction: column;

    .field-display {
      line-height: 1.6;
      font-weight: 400;
      color: #4a5565;

      &.empty {
        color: #9ca3af;
      }
    }
  }

  .edit-form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-size: 12px;
        font-weight: 600;
        color: var(--color-text-gray);
      }

      input,
      textarea {
        width: 100%;
        padding: 9px 12px;
        font-size: 14px;
        font-family: inherit;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        color: var(--color-text-dark);
        background-color: var(--color-bg-white);
        outline: none;
        transition: border-color 0.2s ease;

        &:focus {
          border-color: var(--color-primary);
        }

        &:disabled {
          background-color: #f9fafb;
          color: #9ca3af;
          cursor: not-allowed;
        }
      }

      textarea {
        resize: none;
        line-height: 1.5;
      }
    }

    .save-btn {
      margin-top: 4px;
      width: 100%;
      padding-block: 10px;
      background-color: var(--color-primary);
      color: var(--color-text-white);
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: #008236;
      }

      &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }
    }
  }

  .status-msg {
    margin: 12px 0 0 0;
    font-size: 12px;
    color: #dc2626;
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 18px;
  }
`;