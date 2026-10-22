import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: #0b1f3a;
  position: sticky;
  top: 0;
  z-index: 1050;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  height: 65px;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 33px;
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
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 1.5px;
`;

export const NavSection = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  color: #d1d5dc;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &.active, &:hover {
    color: #00a651;
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
  gap: 18px;
`;

export const IconButton = styled(Link)`
  color: #ffffff;
  font-size: 12 px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00a651;
  }
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
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #00a651;
  }
`;

export const RegisterButton = styled(Link)`
  background-color: #00a651;
  color: #ffffff;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c951;
    color: #ffffff;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
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
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #0b1f3a;
    padding: 10px 20px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileNavItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: color 0.3s ease;

  &.active, &:hover {
    color: #00a651;
  }
  
  &:last-child {
      border-bottom: none;
  }
`;