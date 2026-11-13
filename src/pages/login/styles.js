import styled from "styled-components";

export const LoginFormStyles = styled.form`
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
`;