import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CtaContainer = styled.section`
  background-color: var(--color-navy);
  padding: 60px 0;
  text-align: center;
  color: var(--color-text-white);

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: var(--container-padding);
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--color-text-muted);
  text-align: center;
  margin-bottom: 32px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (max-width: 576px) {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: var(--color-primary);
  color: var(--color-text-white) !important;
  padding: 12px 32px;
  border-radius: var(--border-radius-btn);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary-hover);
    color: var(--color-text-white) !important;
    text-decoration: none !important;
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--color-text-white) !important;
  padding: 12px 32px;
  border-radius: var(--border-radius-btn);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: var(--color-text-white);
    color: var(--color-text-white) !important;
    text-decoration: none !important;
  }
`;