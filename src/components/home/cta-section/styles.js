import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CtaContainer = styled.section`
  background-color: #0b1f3a; 
  padding: 80px 20px;
  text-align: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: #00a651;
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #00c853;
    color: white;
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3); 
  transition: all 0.3s ease;
  
  &:hover {
    background-color: transparent;
    border-color: #ffffff; 
    color: white;
  }
`;