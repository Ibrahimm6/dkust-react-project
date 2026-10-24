import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-bg-gray);
  padding-bottom: 60px;
`;

export const ContentContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 40px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;