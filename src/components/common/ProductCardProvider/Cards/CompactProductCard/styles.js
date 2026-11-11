import styled from "styled-components";
import { Link } from "react-router-dom";
import { devicesBreakpoints } from "../../../../../constants/Breakpoints";

export const CompactCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--color-bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .image-area {
    height: 130px;
    background-color: ${({ $bgColor }) => $bgColor || "#3b1f6b"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    i {
      font-size: 42px;
      color: rgba(255, 255, 255, 0.8);
    }

    .compact-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: rgba(255, 255, 255, 0.9);
      color: #111827;
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 999px;
    }
  }

  .info-area {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .category {
    font-size: 12px;
    color: #9ca3af;
    margin-bottom: 4px;
  }

  .name {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-text-dark);
    margin-bottom: 10px;
  }

  .price {
    margin-top: auto;
    font-size: 16px;
    font-weight: 700;
    color: var(--color-primary);

    span {
      font-weight: 400;
      font-size: 12px;
      color: #9ca3af;
    }
  }

  @media ${devicesBreakpoints.thumb} {
    .image-area {
      height: 115px;
    }

    .info-area {
      padding: 14px;
    }
  }
`;