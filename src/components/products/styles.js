import styled from 'styled-components';

const handleBadgeColor = (text) => {
  switch (text?.toLowerCase()) {
    case 'best seller': return { bg: '#dcfce7', text: '#15803d' };
    case 'new': return { bg: '#dbeafe', text: '#1d4ed8' };
    case 'popular': return { bg: '#f3e8ff', text: '#7e22ce' };
    case 'sale': return { bg: '#fee2e2', text: '#b91c1c' };
    case 'top rated': return { bg: '#fef9c3', text: '#b45309' };
    default: return { bg: '#f3f4f6', text: '#374151' };
  }
};

export const ListCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #ebe6e7;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: box-shadow 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const ListImageArea = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor || 'var(--color-navy)'};
  color: rgba(255, 255, 255, 0.8);
  font-size: 55px; 
  position: relative; 

  & > button {
    top: 4px !important;
    right: 4px !important;
    width: 28px !important; 
    height: 28px !important;
  }
`;

export const ListContentArea = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ListTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ListInfo = styled.div``;

export const ListBadge = styled.span`
  display: inline-block;
  background-color: ${(props) => handleBadgeColor(props.text).bg};
  color: ${(props) => handleBadgeColor(props.text).text};
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px; 
  border-radius: 3.40282e38px;
  margin-bottom: 4px;
`;

export const ListTitle = styled.h3`
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;
  margin: 0;
`;

export const ListCategory = styled.p`
  color: var(--color-text-gray);
  font-size: 11px;
  margin-top: 4px;
  margin-bottom: 0;
`;

export const ListPrice = styled.p`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
  margin: 0;

  span {
    color: var(--color-text-gray);
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ListDesc = styled.p`
  color: var(--color-text-gray);
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ListBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  flex-wrap: wrap;
  gap: 8px;

  & > div:last-child {
    gap: 8px !important;
  }

  /* (View Details) */
  & > div:last-child > button:first-child {
    background-color: var(--color-bg-white) !important;
    border: 1px solid var(--color-primary) !important;
    color: var(--color-primary) !important;
    padding: 6px 16px !important;
    border-radius: 10px !important; 
    font-size: 12px !important;
    font-weight: 500 !important;
    width: fit-content !important;
  }

  & > div:last-child > button:first-child:hover {
    background-color: #f0fdf4 !important;
  }

  /* (Add to Cart) */
  & > div:last-child > button:last-child {
    background-color: var(--color-primary) !important;
    border: 1px solid var(--color-primary) !important;
    color: var(--color-text-white) !important;
    padding: 6px 16px !important;
    border-radius: 10px !important; 
    font-size: 12px !important;
    font-weight: 500 !important;
    width: fit-content !important;
  }

  & > div:last-child > button:last-child:hover {
    background-color: var(--color-primary-hover) !important;
    border-color: var(--color-primary-hover) !important;
  }
`;

export const ListWishlistButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f4f6; 
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e5e7eb;
    color: var(--color-primary);
  }

  &.active {
    color: #ef4444;
    background-color: #fee2e2;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #facc15;
    font-size: 12px;
  }

  .reviews {
    font-size: 11px;
    color: var(--color-text-gray);
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;

  > div { margin-bottom: 0; }

  & > button:first-child,
  & > div:first-child button {
    border: 1px solid #d1d5dc !important; 
    padding: 6px 12px !important;
    font-size: 12px !important;
    border-radius: 10px !important;
    font-weight: 500 !important;
    transition: all 0.2s ease;
  }

  & > button:first-child:hover,
  & > div:first-child button:hover {
    /* background-color: var(--color-primary) !important; */
    border-color: var(--color-primary) !important;
    color: var(--color-primary) !important;
  }

  & > button:last-child,
  & > div:last-child button {
    background-color: var(--color-primary) !important;
    border: 1px solid var(--color-primary) !important;
    color: var(--color-text-white) !important;
    padding: 6px 12px !important;
    font-size: 11px !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 4px !important;
  }

  & > button:last-child:hover,
  & > div:last-child button:hover {
    background-color: var(--color-primary-hover) !important;
    border-color: var(--color-primary-hover) !important;
  }
`;

export const GridCard = styled.div`
  background-color: var(--color-bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    /* transform: translateY(-5px); */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;


export const GridImageArea = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor || 'var(--color-navy)'};
  color: rgba(255, 255, 255, 0.8);
  font-size: 40px;
  position: relative;
`;

export const GridBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => handleBadgeColor(props.text).bg};
  color: ${(props) => handleBadgeColor(props.text).text};
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const GridContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const GridCategory = styled.p`
  color: var(--color-text-gray);
  font-size: 11px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const GridFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  & > div:last-child {
    gap: 8px !important;
  }

  & > div:last-child > button:first-child {
    width: fit-content !important;
    padding: 6px 12px !important;
    border-radius: 10px !important; 
    font-size: 12px !important;
  }

  & > div:last-child > button:last-child {
    width: fit-content !important;
    padding: 6px 12px !important;
    border-radius: 10px !important;
    font-size: 12px !important;
  }
`;

export const WishlistButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2); 
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-white); 
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3); 
  }

  &.active {
    color: #ef4444; 
  }
`;