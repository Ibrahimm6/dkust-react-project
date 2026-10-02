import styled from 'styled-components';

export const theme = {
  green: '#16a34a',
  greenHover: '#15803d',
  lightGreen: '#dcfce7',
  darkGreenText: '#15803d',
  textDark: '#111827',
  textGray: '#6b7280',
  textLight: '#9ca3af',
  border: '#e5e7eb',
};

// ==========================================
// 1. List View Styles 
// ==========================================
export const ListCard = styled.div`
  background-color: #fff;
  border: 1px solid ${theme.border};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const ListImageArea = styled.div`
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || '#1a3a6e'};
  color: rgba(255, 255, 255, 0.8);
  font-size: 40px;
`;

export const ListContentArea = styled.div`
  flex: 1;
  min-width: 0; /* Prevents text overflow */
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
  background-color: ${theme.lightGreen};
  color: ${theme.darkGreenText};
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 9999px;
  margin-bottom: 4px;
`;

export const ListTitle = styled.h3`
  color: ${theme.textDark};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
`;

export const ListCategory = styled.p`
  color: ${theme.textLight};
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 0;
`;

export const ListPrice = styled.p`
  color: ${theme.green};
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
  margin: 0;

  span {
    color: ${theme.textLight};
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ListDesc = styled.p`
  color: ${theme.textGray};
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
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #facc15;
    font-size: 14px;
  }

  .reviews {
    font-size: 12px;
    color: ${theme.textGray};
  }
`;

// ==========================================
// 2. Action Buttons 
// ==========================================
export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;

  > div { margin-bottom: 0; } 
  & > button:first-child,
  & > div:first-child button {
    background-color: transparent !important;
    border: 1px solid ${theme.green} !important;
    color: ${theme.green} !important;
    padding: 6px 16px !important;
    font-size: 12px !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
  }

  & > button:first-child:hover,
  & > div:first-child button:hover {
    background-color: ${theme.green} !important;
    color: #fff !important;
  }

  & > button:last-child,
  & > div:last-child button {
    background-color: ${theme.green} !important;
    border: 1px solid ${theme.green} !important;
    color: #fff !important;
    padding: 6px 16px !important;
    font-size: 12px !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 4px !important;
  }

  & > button:last-child:hover,
  & > div:last-child button:hover {
    background-color: ${theme.greenHover} !important;
    border-color: ${theme.greenHover} !important;
  }
`;

// ==========================================
// 3. Grid View Styles
// ==========================================
export const GridCard = styled.div`
  background-color: #fff;
  border: 1px solid ${theme.border};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

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

export const GridImageArea = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || '#1a3a6e'};
  color: rgba(255, 255, 255, 0.8);
  font-size: 50px;
  position: relative; 
`;

export const GridBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${(props) => handleBadgeColor(props.text).bg}; 
  color: ${(props) => handleBadgeColor(props.text).text};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const GridContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const GridCategory = styled.p`
  color: ${theme.textLight};
  font-size: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const GridFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;