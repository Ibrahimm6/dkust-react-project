import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-bg-gray);
`;

export const HeroSection = styled.div`
  background: linear-gradient(
    135deg,
    rgb(13, 27, 62) 0%,
    rgb(26, 58, 110) 50%,
    rgb(13, 27, 62) 100%
  );
  padding: 63px 33px;
  text-align: center;
  color: var(--color-text-white);
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const HeroSubtitle = styled.p`
  color: var(--color-text-muted);
  font-size: 15px;
  max-width: 512px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ContentContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 20px;
  width: 100%;
  flex-grow: 1;
`;

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContinueShoppingLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  width: fit-content;
  margin-top: 4px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    color: var(--color-primary);
  }
`;