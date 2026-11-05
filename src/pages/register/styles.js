import styled from "styled-components";
import { Link } from "react-router-dom";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const RegisterCard = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-top: 6px solid #00a63e;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 5px;
  color: #1a1a2e;
  font-weight: 700;
  font-size: 1.75rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 4px;
  margin-bottom: 26px;
  font-size: 14px;
  color: #555;

  input {
    cursor: pointer;
    margin-top: 4px;
  }
`;

export const TermsError = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  color: #ef4444;
  font-size: 11px;
  line-height: 1.2;
`;

export const DividerText = styled.div`
  text-align: center;
  margin: 15px 0;
  color: #888;
  font-size: 12px;
`;

export const FooterText = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: #00a651;
  text-decoration: none;
  font-weight: bold;
`;

export const BackLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
`;

export const BackLinkContainer = styled.div`
  margin-top: 20px;
`;

export const GreenText = styled.span`
  color: #00a651;
  cursor: pointer;
`;

export const PasswordStrengthBar = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const StrengthSegment = styled.div`
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background-color: ${(props) => props.color || "#e5e7eb"};
`;

export const StrengthLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 15px;
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 10px;

  .icon-circle {
    width: 60px;
    height: 60px;
    background-color: #dcfce7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    i {
      color: #16a34a;
      font-size: 24px;
    }
  }

  h2 {
    color: #111827;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    color: #6b7280;
    margin-bottom: 30px;
    font-size: 15px;
  }
`;

// Root Wrapper & Responsive Media Queries
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 20px;
  flex-grow: 1;
  background-color: var(--color-page-bg);

  @media ${devicesBreakpoints.pocket} {
    padding: 40px 16px;

    ${RegisterCard} {
      padding: 32px 24px;
    }

    ${Title} {
      font-size: 1.5rem;
    }

    ${Subtitle} {
      margin-bottom: 24px;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    padding: 30px 14px;

    ${RegisterCard} {
      padding: 24px 16px;
    }

    ${Row} {
      flex-direction: column;
      gap: 0;
    }

    ${CheckboxContainer} {
      font-size: 13px;
    }
  }
`;