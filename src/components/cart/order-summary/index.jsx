import React from 'react';
import { FiShield } from 'react-icons/fi';
import { useCart } from '../../../contexts/cartContext';
import {
  SummaryCard,
  SummaryTitle,
  ItemsBreakdown,
  SummaryRow,
  ItemNameText,
  ItemPriceText,
  Divider,
  SubtotalRow,
  TaxRow,
  TotalRow,
  CheckoutButton,
  SecureNote,
} from './styles';

const OrderSummary = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const truncateName = (name) =>
    name.length > 20 ? `${name.slice(0, 20)}...` : name;

  return (
    <SummaryCard>
      <SummaryTitle>Order Summary</SummaryTitle>

      <ItemsBreakdown>
        {cart.map((item) => (
          <SummaryRow key={item.id}>
            <ItemNameText>
              {truncateName(item.name)} ×{item.quantity}
            </ItemNameText>
            <ItemPriceText>
              ${(item.price * item.quantity).toLocaleString()}
            </ItemPriceText>
          </SummaryRow>
        ))}
      </ItemsBreakdown>

      <Divider />

      <SubtotalRow>
        <span>Subtotal</span>
        <strong>${subtotal.toLocaleString()}</strong>
      </SubtotalRow>

      <TaxRow>
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </TaxRow>

      <Divider />

      <TotalRow>
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </TotalRow>

      {/* Proceed to Checkout button intentionally does nothing */}
      <CheckoutButton type="button">Proceed to Checkout</CheckoutButton>

      <SecureNote>
        <FiShield size={13} />
        <span>Secure checkout</span>
      </SecureNote>
    </SummaryCard>
  );
};

export default OrderSummary;