import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const UpdatePasswordWrapper = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-text-dark);
    margin: 0 0 16px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    input {
      width: 100%;
      padding: 10px 12px;
      font-size: 14px;
      font-family: inherit;
      border: 1px solid #d1d5db;
      border-radius: 10px;
      color: var(--color-text-dark);
      outline: none;
      transition: border-color 0.2s ease;

      &:focus {
        border-color: var(--color-primary);
      }
    }

    .form-message {
      margin: 0;
      font-size: 13px;
      color: ${({ $error }) => ($error ? "#dc2626" : "#00a651")};
    }

    button {
      align-self: flex-start;
      padding: 10px 22px;
      border: none;
      border-radius: 10px;
      background-color: var(--color-primary);
      color: var(--color-text-white);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: #008236;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 18px;

    form button {
      width: 100%;
    }
  }
`;