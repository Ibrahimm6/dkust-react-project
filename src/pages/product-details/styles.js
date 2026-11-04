import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  padding-block: 40px;
  /* width: 100%; */
  flex-grow: 1;
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
  span {
    color: #111827;
    font-weight: 600;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 30px;
  font-weight: 500;
  &:hover {
    color: #00a651;
  }
`;

export const RelatedSectionTitle = styled.h2`
  font-size: 22px;
  color: #111827;
  margin-bottom: 20px;
  font-weight: bold;
`;
