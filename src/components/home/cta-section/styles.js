import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CtaContainer = styled.section`
  background-color: #0b1f3a;
  padding: 60px 20px;
  text-align: center;
  color: white;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
  margin-bottom: 25px;
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
  background-color: #00a651;
  color: white !important;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00e676;
    color: white !important;
    text-decoration: none !important;
    box-shadow: 0 4px 12px rgba(0, 166, 81, 0.4);
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white !important;
  padding: 10px 24px;
  border-radius: 6px;
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
    border-color: #ffffff;
    color: white !important;
    text-decoration: none !important;
  }
`;