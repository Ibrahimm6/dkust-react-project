import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { devicesBreakpoints } from "../../constants/Breakpoints";

export const HeaderContainer = styled.div`
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
`;

export const NavItem = styled(NavLink)`
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &.active,
  &:hover {
    color: var(--color-accent);
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled(Link)`
  color: var(--color-text-white);
  font-size: 18px;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition:
    color 0.3s ease,
    background-color 0.2s ease;
  position: relative;

  &:hover {
    color: var(--color-primary);
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const IconBadge = styled.span`
  position: absolute;
  top: 1px;
  inset-inline-end: 1px;
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
`;

export const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
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

export const LogoutButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition:
    background-color 0.3s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
    color: var(--color-text-white);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-white);
  font-size: 1.5rem;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const MenuBackdrop = styled.div`
  display: none;
  position: fixed;
  top: var(--header-height);
  inset-inline: 0;
  bottom: 0;
  background-color: rgba(11, 31, 58, 0.55);
  backdrop-filter: blur(2px);
  z-index: 1049;
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: var(--header-height);
  inset-inline: 0;
  width: 100%;
  max-height: calc(100dvh - var(--header-height));
  overflow-y: auto;
  background-color: var(--color-navy);
  padding: 8px 20px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  z-index: 1051;
`;

export const MobileNavItem = styled(NavLink)`
  color: var(--color-text-white);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 13px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: color 0.3s ease;

  &.active,
  &:hover {
    color: var(--color-primary);
  }
`;

export const MobileItemLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 17px;
    color: var(--color-accent);
  }
`;

export const MobileBadge = styled.span`
  background-color: var(--color-primary);
  color: var(--color-text-white);
  font-size: 11px;
  font-weight: 700;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const MobileDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.14);
  margin: 6px 0;
`;

export const MobileAuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
`;

export const MobileLoginLink = styled(Link)`
  flex: 1;
  text-align: center;
  color: var(--color-text-white);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

export const MobileRegisterButton = styled(Link)`
  flex: 1;
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-text-white);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
    color: var(--color-text-white);
  }
`;

export const MobileLogoutButton = styled.button`
  width: 100%;
  background-color: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #fca5a5;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 11px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #ef4444;
    border-color: #ef4444;
    color: var(--color-text-white);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: var(--color-navy);
  position: sticky;
  top: 0;
  z-index: 1050;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  height: var(--header-height);
  display: flex;
  align-items: center;

  @media ${devicesBreakpoints.portable} {
    ${NavSection},
    ${IconButton},
    ${Divider},
    ${AuthGroup} {
      display: none;
    }

    ${MenuButton} {
      display: flex;
    }

    ${MenuBackdrop} {
      display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    }

    ${MobileMenu} {
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    }
  }

  @media ${devicesBreakpoints.thumb} {
    ${RightSection} {
      gap: 8px;
    }
  }
`;