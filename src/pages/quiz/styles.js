import styled from 'styled-components';

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
  padding: 55px 20px;
  text-align: center;
  color: var(--color-text-white);
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const HeroSubtitle = styled.p`
  color: var(--color-text-muted);
  font-size: 14px;
  margin-bottom: 22px;
`;

export const ScoreBadge = styled.div`
  background-color: ${(props) => (props.$isPassed ? '#00a651' : '#ef4444')};
  color: #ffffff;
  padding: 6px 22px;
  border-radius: 9999px;
  display: inline-block;
  font-weight: 700;
  font-size: 14px;
`;

export const ContentContainer = styled.div`
  max-width: 680px;
  margin: 0 auto 60px;
  width: 100%;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: var(--color-text-dark);
  font-size: 24px;
  font-weight: 700;
  margin-top: 45px;
  margin-bottom: 30px;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;

export const SubmitQuizButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`;

export const ResultCard = styled.div`
  background-color: ${(props) => (props.$isPassed ? '#f0fdf4' : '#fee2e2')};
  border-radius: 14px;
  padding: 35px 20px;
  text-align: center;
  margin-top: 30px;
  border: 1px solid ${(props) => (props.$isPassed ? '#86efac' : '#fca5a5')};

  h2 {
    color: #1f2937;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    color: #4b5563;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;

  button {
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background-color: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--color-primary-hover);
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