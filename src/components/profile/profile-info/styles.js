import styled from "styled-components";

export const SectionCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0fdf4;
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const InfoIconCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #f8fafc;
  color: var(--color-text-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const InfoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InfoLabel = styled.span`
  font-size: 11px;
  color: #9ca3af;
  margin-bottom: 2px;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-dark);
`;

export const BioWrapper = styled.div`
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
`;

export const BioText = styled.p`
  font-size: 13px;
  color: var(--color-text-gray);
  margin: 6px 0 0 0;
  line-height: 1.6;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-gray);
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  color: var(--color-text-dark);
  background-color: var(--color-bg-white);
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  color: var(--color-text-dark);
  background-color: var(--color-bg-white);
  outline: none;
  resize: none;
  line-height: 1.5;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const SaveChangesButton = styled.button`
  margin-top: 4px;
  width: 100%;
  padding: 12px;
  background-color: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;