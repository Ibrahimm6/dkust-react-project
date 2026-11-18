import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const ServicesPageStyles = styled.div`
  padding-block: 64px;
  background-color: var(--page-bg);
  flex-grow: 1;

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--muted-color);
    font-size: var(--font-size-sm);
    margin: 0;
  }

  @media ${devicesBreakpoints.portable} {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding-block: 40px;

    .services-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;