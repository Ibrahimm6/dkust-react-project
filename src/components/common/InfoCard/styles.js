import styled from "styled-components";

export const InfoCardStyles = styled.div`
  border: 1px solid var(--border-subtle);
  background-color: var(--surface);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  font-family: var(--arabic-font);

  span {
    color: var(--dark-color);
    font-size: var(--font-size-sm);
  }

  h3 {
    font-size: var(--font-size);
    margin: 0;
  }

  p {
    color: var(--muted-color);
    font-size: var(--font-size-sm);
  }
`;
