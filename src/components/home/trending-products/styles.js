import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/Breakpoints";

export const TrendingWrapper = styled.section`
  padding: 60px 0;
  background-color: var(--color-bg-gray);

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto 30px auto;
  }

  .hot-badge {
    color: var(--color-primary);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
    display: block;
  }

  .section-title {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--color-text-dark);
    margin-bottom: 8px;
  }

  .section-subtitle {
    color: var(--color-text-gray);
    font-size: 0.9rem;
    margin: 0;
  }

  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: var(--border-radius-btn);
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    background-color: var(--color-bg-white);
    flex-shrink: 0;

    &:hover {
      background-color: #f0fdf4;
      color: var(--color-primary);
    }

    i {
      font-size: 12px;
    }
  }

  @media ${devicesBreakpoints.pocket} {
    padding: 45px 0;

    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }

    .section-title {
      font-size: 1.5rem;
    }
  }
`;