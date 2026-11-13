import styled, { css } from "styled-components";

export const InfoCardStyles = styled.article`
  border: 1px solid var(--border-subtle);
  background-color: var(--surface);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* align-items: flex-start; */
  font-family: var(--arabic-font);

  width: 100%;

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
    max-width: 576px;
  }

  ${(props) =>
    props.$variant === "aboutPageCard" &&
    css`
      text-align: center;
      align-items: center;
      h3 {
        font-size: var(--font-size-lg);
        font-weight: 800;
      }
    `}
`;
