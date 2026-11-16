import styled, { css } from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const AboutPageStyles = styled.div`
  padding-block: 64px;
  background-color: var(--page-bg);

  & > div {
    display: flex;
    justify-content: center;
    /* gap: 24px; */
  }

  .about-card {
    width: 100%;
  }

  /* @media ${devicesBreakpoints.portable} {
    & > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding-block: 40px;

    & > div {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  } */
`;
