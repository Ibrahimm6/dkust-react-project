import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const ContentContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 40px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-bg-gray);
  padding-bottom: 60px;

  @media ${devicesBreakpoints.portable} {
    ${TwoColumnGrid} {
      grid-template-columns: 1fr;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding-bottom: 40px;
    ${ContentContainer} {
      padding: 28px 20px;
      gap: 20px;
    }
  }
`;

export const ProfileCard = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 28px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--color-text-dark);
  font-size: 16px;
`;

export const FieldGroup = styled.div`
  margin-bottom: 18px;
`;

export const FieldLabel = styled.div`
  font-size: 13px;
  color: #9ca3af;
  margin-bottom: 4px;
`;

export const FieldDisplay = styled.span`
  display: block;
  min-height: 24px;
  cursor: ${({ $readOnly }) => ($readOnly ? "default" : "text")};
  color: ${({ $hasValue }) => ($hasValue ? "#111827" : "#9ca3af")};
`;

export const FieldInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #00a651;
  border-radius: 6px;
  font: inherit;
  outline: none;
`;

export const PasswordCard = styled.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
`;

export const PasswordTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 16px 0;
  letter-spacing: -0.01em;
`;

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  font: inherit;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #00a651;
  }
`;

export const FormMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ $error }) => ($error ? "#dc2626" : "#00a651")};
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  background: #00a651;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;