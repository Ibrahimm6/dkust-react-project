import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  position: relative;
  background: linear-gradient(135deg, #0b1f3a 0%, #16305c 100%);
  color: white;
  padding: 100px 0 150px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 1;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const Badge = styled.div`
  display: inline-block;
  background-color: rgba(0, 166, 81, 0.2);
  color: #00a651;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  
  span {
    color: #00a651;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 35px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: #00a651;
  color: white;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none !important; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  
  &:link, &:visited, &:active {
      color: white;
  }
  
  &:hover {
    background-color: #00e676; 
    color: white;
    text-decoration: none;
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none !important; 
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:link, &:visited, &:active {
      color: white;
  }
  
  &:hover {
    border-color: #ffffff; 
    color: white;
    text-decoration: none;
  }
`;

export const StatsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease;
  
  /* &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08); */
  /* } */
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00a651;
  margin-bottom: 5px;
`;

export const StatText = styled.div`
  font-size: 0.95rem;
  color: #cbd5e1;
`;

export const WaveBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
  }
  
  .shape-fill {
    fill: #f8fafc;
  }
`;