import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgb(13, 27, 62) 0%, rgb(26, 58, 110) 50%, rgb(13, 27, 62) 100%);
  color: var(--color-text-white);
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
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--container-padding);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 520px;
`;

export const Badge = styled.div`
  display: inline-block;
  background-color: rgba(0, 166, 81, 0.2);
  color: #7bf1a8;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid rgba(0, 166, 81, 0.4);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 15px;

  span {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: var(--color-primary);
  color: var(--color-text-white) !important;
  padding: 12px 28px;
  border-radius: var(--border-radius-btn);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
  padding: 12px 28px;
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

export const StatsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  max-width: 500px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const StatCard = styled.div`
  background: #ffffff1a;
  backdrop-filter: blur(8px);
  border: 1px solid #ffffff26;
  border-radius: 16px;
  padding: 20px 15px;
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: var(--color-accent);
  margin-bottom: 5px;
`;

export const StatText = styled.div`
  font-size: 0.8rem;
  color: var(--color-text-muted);
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
    fill: var(--color-bg-gray);
  }
`;