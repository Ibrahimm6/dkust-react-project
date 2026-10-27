import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: var(--color-navy);
  position: sticky;
  top: 0;
  z-index: 1050;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  height: var(--header-height);
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--container-padding);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-white);
  text-decoration: none;
  letter-spacing: 1.5px;
`;

export const NavSection = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &.active, &:hover {
    color: var(--color-accent);
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const IconButton = styled(Link)`
  color: var(--color-text-white);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--color-primary);
  }
`;

export const IconBadge = styled.span`
  position: absolute;
  top: -8px; 
  right: -10px; 
  background-color: var(--color-primary-hover); 
  color: var(--color-text-white);
  font-size: 10px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-navy); 
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.2);

  @media (max-width: 992px) {
    display: none;
  }
`;

export const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const LoginLink = styled(Link)`
  color: var(--color-text-white);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export const RegisterButton = styled(Link)`
  background-color: var(--color-primary);
  color: var(--color-text-white);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-hover);
    color: var(--color-text-white);
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-white);
  font-size: 1.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 992px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background-color: var(--color-navy);
    padding: 10px 20px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileNavItem = styled(NavLink)`
  color: var(--color-text-white);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: color 0.3s ease;

  &.active, &:hover {
    color: var(--color-primary);
  }
  
  &:last-child {
      border-bottom: none;
  }
`;