import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f8fafc;
`;

export const HeroSection = styled.div`
  background-color: #0b1f3a;
  padding: 60px 20px;
  text-align: center;
  color: white;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const HeroSubtitle = styled.p`
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 25px;
`;

export const ScoreBadge = styled.div`
  background-color: #ef4444; 
  color: white;
  padding: 8px 24px;
  border-radius: 20px;
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
`;

export const ContentContainer = styled.div`
  max-width: 800px;
  margin: -20px auto 60px;
  width: 100%;
  padding: 0 20px;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  color: #111827;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 40px;
`;

export const ResultCard = styled.div`
  background-color: #fee2e2;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  margin-top: 60px;
  border: 1px solid #fca5a5;

  h2 {
    color: #1f2937;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    color: #4b5563;
    font-size: 16px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;

  button {
    padding: 10px 24px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }

  .btn-primary {
    background-color: #00a651;
    color: white;
  }
  .btn-primary:hover {
    background-color: #008f45;
  }

  .btn-secondary {
    background-color: white;
    color: #4b5563;
    border: 1px solid #d1d5db;
  }
  .btn-secondary:hover {
    background-color: #f3f4f6;
  }
`;