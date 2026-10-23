import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  background-color: #ffffff;
  padding: 48px 0 16px;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 33px;
  width: 100%;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterCol = styled.div``;

export const ColumnTitle = styled.h6`
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
  font-size: 0.8rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 8px;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.6;
`;

export const StyledFooterLink = styled(Link)`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #00a651;
  }
`;

export const NewsletterText = styled.p`
  color: #6b7280;
  font-size: 12px;
  margin-bottom: 16px;
`;

export const NewsletterForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 280px;
  height: 38px;
`;

export const EmailInput = styled.input`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 12px; 
  font-size: 12px;
  border: 1px solid #e5e7eb;
  border-right: none;
  border-radius: 4px 0 0 4px;
  outline: none;

  &:focus {
    border-color: #00c951;
  }
`;

export const SubmitButton = styled.button`
  background-color: #00c951;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008f45;
  }

  svg {
    transform: rotate(45deg) translate(-2px, 1px);
    font-size: 1rem;
  }
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 0;
  opacity: 1;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const CopyrightText = styled.p`
  color: #99a1af;
  font-size: 12px;
  margin: 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border-color: #0000001a;
  background-color: #f6f3f4;
  color: #4b5563;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #00c951;
    color: #ffffff;
  }
`;