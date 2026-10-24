import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    rgb(13, 27, 62) 0%,
    rgb(26, 58, 110) 50%,
    rgb(13, 27, 62) 100%
  );
  padding: 55px 20px;
  text-align: center;
  color: var(--color-text-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AvatarCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-text-white);
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  box-shadow: 0 4px 15px rgba(0, 166, 81, 0.35);
`;

export const HeroName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--color-text-white);
`;

export const HeroEmail = styled.p`
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
`;

export const VerifiedBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(0, 166, 81, 0.2);
  color: #7bf1a8;
  padding: 4px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(0, 166, 81, 0.4);
  font-size: 11px;
  font-weight: 600;
`;