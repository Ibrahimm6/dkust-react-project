import styled from "styled-components";

export const BlogStyles = styled.div`
  padding-block: 64px;
  background-color: var(--page-bg);

  & > div {
    display: grid;
    /* place-items: center; */
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
