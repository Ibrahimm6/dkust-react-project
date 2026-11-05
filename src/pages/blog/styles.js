import styled, { css } from "styled-components";

export const BlogStyles = styled.div`
  padding-block: 64px;
  background-color: var(--page-bg);

  & > div {
    display: grid;
    /* place-items: center; */
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;
