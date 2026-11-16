import styled, { css } from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const ServicesPageStyles = styled.div`
  padding-block: 64px;
  background-color: var(--page-bg);

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media ${devicesBreakpoints.portable} {
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
  }
`;
