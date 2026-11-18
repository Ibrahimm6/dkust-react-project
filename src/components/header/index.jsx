import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import PathConstants from "../../routes/pathConstants";
import { useAuth } from "../../context/auth/useAuth";
import { selectCartCount } from "../../store/cart/cartSelectors";
import { selectWishlistCount } from "../../store/wishlist/wishlistSelectors";
import LanguageSwitcher from "../language-switcher";
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
  { key: "nav.home", path: PathConstants.HOME },
  { key: "nav.products", path: PathConstants.PRODUCTS },
  { key: "nav.services", path: PathConstants.SERVICES },
  { key: "nav.blog", path: PathConstants.BLOG },
  { key: "nav.quiz", path: PathConstants.QUIZ },
  { key: "nav.about", path: PathConstants.ABOUT },
  { key: "nav.contact", path: PathConstants.CONTACT },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();
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
              {t(link.key)}
            </NavItem>
          ))}
        </NavSection>

        <RightSection>
          <IconGroup>
            <LanguageSwitcher />

            <IconButton to={PathConstants.WISHLIST} aria-label={t("nav.favorites")}>
              <FiHeart />
              {wishlistCount > 0 && <IconBadge>{wishlistCount}</IconBadge>}
            </IconButton>
            <IconButton to={PathConstants.CART} aria-label={t("nav.cart")}>
              <FiShoppingCart />
              {cartCount > 0 && <IconBadge>{cartCount}</IconBadge>}
            </IconButton>
            <IconButton to={PathConstants.PROFILE} aria-label={t("nav.profile")}>
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
                    <span>{t("nav.loggingOut")}</span>
                  </>
                ) : (
                  t("nav.logout")
                )}
              </LogoutButton>
            ) : (
              <>
                <LoginLink to={PathConstants.LOGIN}>{t("nav.login")}</LoginLink>
                <RegisterButton to={PathConstants.REGISTER}>
                  {t("nav.register")}
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
            {t(link.key)}
          </MobileNavItem>
        ))}
        <MobileNavItem to={PathConstants.WISHLIST}>
          {t("nav.favorites")}
        </MobileNavItem>
        <MobileNavItem to={PathConstants.CART}>{t("nav.cart")}</MobileNavItem>
        <MobileNavItem to={PathConstants.PROFILE}>
          {t("nav.profile")}
        </MobileNavItem>
        {isAuthenticated ? (
          <MobileLogoutButton
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            {loggingOut ? t("nav.loggingOut") : t("nav.logout")}
          </MobileLogoutButton>
        ) : (
          <>
            <MobileNavItem to={PathConstants.LOGIN}>
              {t("nav.login")}
            </MobileNavItem>
            <MobileNavItem to={PathConstants.REGISTER}>
              {t("nav.register")}
            </MobileNavItem>
          </>
        )}
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;