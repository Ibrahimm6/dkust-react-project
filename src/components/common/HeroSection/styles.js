import styled from "styled-components";

export const HeroSectionStyles = styled.div`
  background: linear-gradient(
    135deg,
    var(--secondary-color) 0%,
    var(--hero-color) 50%,
    var(--secondary-color) 100%
  );
  color: var(--color-text-white);

  & > div {
    padding-block: 56px;
  }

  h2 {
    font-size: var(--font-size-xl);
    font-weight: 700;
    font-family: var(--arabic-font);
    text-align: center;
  }

  p {
    color: rgb(209, 213, 219);
    font-size: var(--font-size-sm);
    font-family: var(--arabic-font);
    text-align: center;
    margin: 0;
  }
`;
