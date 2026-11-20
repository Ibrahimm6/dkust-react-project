import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const AboutPageStyles = styled.div`
  padding-block: 64px;
  background-color: var(--page-bg);
  flex-grow: 1;

  & > div {
    display: flex;
    justify-content: center;
  }

  .about-card {
    width: 100%;
  }

  @media ${devicesBreakpoints.pocket} {
    padding-block: 40px;
  }
`;