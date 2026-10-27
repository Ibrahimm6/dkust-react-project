import React, { useState } from 'react';
import PathConstants from '../../routes/pathConstants';
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
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
  MenuButton,
  MobileMenu,
  MobileNavItem
} from './styles';
import { useWishlist } from '../../contexts/wishlistContext';
import { useCart } from '../../contexts/cartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { wishlist } = useWishlist();
  const { cartCount } = useCart();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        
        <LogoSection>
          <Logo to={PathConstants.HOME} onClick={closeMenu}>DKUST</Logo>
        </LogoSection>

        <NavSection>
          <NavItem to={PathConstants.HOME}>HOME</NavItem>
          <NavItem to={PathConstants.PRODUCTS}>PRODUCTS</NavItem>
          <NavItem to={PathConstants.SERVICES}>SERVICES</NavItem>
          <NavItem to={PathConstants.BLOG}>BLOG</NavItem>
          <NavItem to={PathConstants.QUIZ}>QUIZ</NavItem>
          <NavItem to={PathConstants.ABOUT}>ABOUT</NavItem>
          <NavItem to={PathConstants.CONTACT}>CONTACT</NavItem>
        </NavSection>

        <RightSection>
          <IconGroup>
            <IconButton to={PathConstants.WISHLIST} aria-label="Wishlist">
             <FiHeart />
             {wishlist.length > 0 && <IconBadge>{wishlist.length > 9 ? '9+' : wishlist.length}</IconBadge>}
            </IconButton>

            <IconButton to={PathConstants.CART} aria-label="Cart">
              <FiShoppingCart />
             {cartCount > 0 && <IconBadge>{cartCount > 9 ? '9+' : cartCount}</IconBadge>}
            </IconButton>

            <IconButton to={PathConstants.PROFILE} aria-label="User Profile">
             <FiUser />
            </IconButton>
          </IconGroup>

          <Divider />

          <AuthGroup>
            <LoginLink to={PathConstants.LOGIN}>Login</LoginLink>
            <RegisterButton to={PathConstants.REGISTER}>Register</RegisterButton>
          </AuthGroup>

          <MenuButton onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </RightSection>

      </HeaderContainer>

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavItem to={PathConstants.HOME} onClick={closeMenu}>Home</MobileNavItem>
        <MobileNavItem to={PathConstants.PRODUCTS} onClick={closeMenu}>Products</MobileNavItem>
        <MobileNavItem to={PathConstants.SERVICES} onClick={closeMenu}>Services</MobileNavItem>
        <MobileNavItem to={PathConstants.BLOG} onClick={closeMenu}>Blog</MobileNavItem>
        <MobileNavItem to={PathConstants.QUIZ} onClick={closeMenu}>Quiz</MobileNavItem>
        <MobileNavItem to={PathConstants.ABOUT} onClick={closeMenu}>About</MobileNavItem>
        <MobileNavItem to={PathConstants.CONTACT} onClick={closeMenu}>Contact</MobileNavItem>
        <MobileNavItem to={PathConstants.WISHLIST} onClick={closeMenu}>Favorites</MobileNavItem>
        <MobileNavItem to={PathConstants.CART} onClick={closeMenu}>Cart</MobileNavItem>
        <MobileNavItem to={PathConstants.PROFILE} onClick={closeMenu}>Profile</MobileNavItem>
        <MobileNavItem to={PathConstants.LOGIN} onClick={closeMenu}>Login</MobileNavItem>
        <MobileNavItem to={PathConstants.REGISTER} onClick={closeMenu}>Register</MobileNavItem>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;