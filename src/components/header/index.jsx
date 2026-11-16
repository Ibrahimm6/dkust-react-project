import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import PathConstants from "../../routes/pathConstants";
import { useAuth } from "../../context/auth/useAuth";
import { selectCartCount } from "../../store/cart/cartSelectors";
import { selectWishlistCount } from "../../store/wishlist/wishlistSelectors";
import {
  HeaderWrapper,
  HeaderContainer,
  LogoSection,
  Logo,
  NavSection,
  NavItem,
  RightSection,
  IconGroup,
  IconButton,
  IconBadge,
  Divider,
  AuthGroup,
  LoginLink,
  RegisterButton,
  LogoutButton,
  MenuButton,
  MobileMenu,
  MobileNavItem,
  MobileLogoutButton,
} from "./styles";

const NAV_LINKS = [
  { label: "Home", path: PathConstants.HOME },
  { label: "Products", path: PathConstants.PRODUCTS },
  { label: "Services", path: PathConstants.SERVICES },
  { label: "Blog", path: PathConstants.BLOG },
  { label: "Quiz", path: PathConstants.QUIZ },
  { label: "About", path: PathConstants.ABOUT },
  { label: "Contact", path: PathConstants.CONTACT },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();
  const wishlistCount = useSelector(selectWishlistCount);
  const cartCount = useSelector(selectCartCount);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    setLoggingOut(false);
    navigate(PathConstants.LOGIN);
  };

  return (
    <HeaderWrapper $isOpen={isMenuOpen}>
      <HeaderContainer className="container">
        <LogoSection>
          <Logo to={PathConstants.HOME}>DKUST</Logo>
        </LogoSection>

        <NavSection>
          {NAV_LINKS.map((link) => (
            <NavItem key={link.path} to={link.path}>
              {link.label}
            </NavItem>
          ))}
        </NavSection>

        <RightSection>
          <IconGroup>
            <IconButton to={PathConstants.WISHLIST} aria-label="Wishlist">
              <FiHeart />
              {wishlistCount > 0 && <IconBadge>{wishlistCount}</IconBadge>}
            </IconButton>
            <IconButton to={PathConstants.CART} aria-label="Cart">
              <FiShoppingCart />
              {cartCount > 0 && <IconBadge>{cartCount}</IconBadge>}
            </IconButton>
            <IconButton to={PathConstants.PROFILE} aria-label="User Profile">
              <FiUser />
            </IconButton>
          </IconGroup>

          <Divider />

          <AuthGroup>
            {isAuthenticated ? (
              <LogoutButton
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
              >
                {loggingOut ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>Logging out...</span>
                  </>
                ) : (
                  "Logout"
                )}
              </LogoutButton>
            ) : (
              <>
                <LoginLink to={PathConstants.LOGIN}>Login</LoginLink>
                <RegisterButton to={PathConstants.REGISTER}>
                  Register
                </RegisterButton>
              </>
            )}
          </AuthGroup>

          <MenuButton
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </RightSection>
      </HeaderContainer>

      <MobileMenu>
        {NAV_LINKS.map((link) => (
          <MobileNavItem key={link.path} to={link.path}>
            {link.label}
          </MobileNavItem>
        ))}
        <MobileNavItem to={PathConstants.WISHLIST}>Favorites</MobileNavItem>
        <MobileNavItem to={PathConstants.CART}>Cart</MobileNavItem>
        <MobileNavItem to={PathConstants.PROFILE}>Profile</MobileNavItem>

        {isAuthenticated ? (
          <MobileLogoutButton
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </MobileLogoutButton>
        ) : (
          <>
            <MobileNavItem to={PathConstants.LOGIN}>Login</MobileNavItem>
            <MobileNavItem to={PathConstants.REGISTER}>Register</MobileNavItem>
          </>
        )}
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;