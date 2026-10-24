import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import AppTemplate from '../../components/app-template';
import PathConstants from '../../routes/pathConstants';
import { useCart } from '../../contexts/cartContext';
import CartItem from '../../components/cart/cart-item';
import OrderSummary from '../../components/cart/order-summary';
import EmptyCart from '../../components/cart/empty-cart';
import {
  PageWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentContainer,
  CartGrid,
  ItemsColumn,
  ItemsList,
  ContinueShoppingLink,
} from './styles';

const CartPage = () => {
  const { cart, cartCount } = useCart();

  const getSubtitleText = () => {
    if (cartCount === 0) return 'Your cart is empty';
    if (cartCount === 1) return '1 item in your cart';
    return `${cartCount} items in your cart`;
  };

  return (
    <AppTemplate pageTitle="Your Cart" path={PathConstants.CART}>
      <PageWrapper>
        <HeroSection>
          <HeroTitle>Your Cart</HeroTitle>
          <HeroSubtitle>{getSubtitleText()}</HeroSubtitle>
        </HeroSection>

        <ContentContainer>
          {cart.length > 0 ? (
            <CartGrid>
              <ItemsColumn>
                <ItemsList>
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ItemsList>

                <ContinueShoppingLink to={PathConstants.PRODUCTS}>
                  <FiArrowLeft size={14} />
                  <span>Continue Shopping</span>
                </ContinueShoppingLink>
              </ItemsColumn>

              <OrderSummary />
            </CartGrid>
          ) : (
            <EmptyCart />
          )}
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default CartPage;