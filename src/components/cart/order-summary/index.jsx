import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShield } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../../store/cart/cartSelectors";
import { clearCart } from "../../../store/cart/cartSlice";
import { useAuth } from "../../../context/auth/useAuth";
import { getProfile } from "../../../services/profile/profile.service";
import { createOrder } from "../../../services/orders/orders.service";
import { removeCartItem } from "../../../services/cart/cart.service";
import PathConstants from "../../../routes/pathConstants";
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
  CheckoutError,
  CheckoutButton,
  SecureNote,
  MobileCheckoutBar,
  MobileBarRow,
  MobileTotalGroup,
  MobileTotalLabel,
  MobileTotalValue,
  MobileCheckoutButton,
} from "./styles";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const { user, isAuthenticated } = useAuth();

  const [checkingOut, setCheckingOut] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const truncateName = (name) =>
    name.length > 20 ? `${name.slice(0, 20)}...` : name;

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate(PathConstants.LOGIN);
      return;
    }
    if (cart.length === 0) return;

    setCheckingOut(true);
    setErrorMsg("");

    try {
      let userId = user?.id;
      if (!userId) {
        const profileRes = await getProfile();
        userId = profileRes?.data?.id;
      }

      if (!userId) {
        setCheckingOut(false);
        setErrorMsg("Unable to verify user session. Please sign in again.");
        return;
      }

      const formattedDate = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      const orderResponses = await Promise.all(
        cart.map((item, idx) =>
          createOrder({
            id: 0,
            orderNumber: `ORD-${Date.now()}-${idx + 1}`,
            userId: Number(userId),
            productId: Number(item.id),
            date: formattedDate,
            amount: Number((item.price * item.quantity).toFixed(2)),
            status: {
              en: "Active",
              ar: "نشط",
            },
            product: {
              en: item.nameEn || item.name,
              ar: item.nameAr || item.name,
            },
          }),
        ),
      );

      const allSucceeded = orderResponses.every(
        (res) => res.status === 200 || res.status === 201,
      );

      if (allSucceeded) {
        await Promise.all(
          cart.map((item) => removeCartItem(item.cartItemId ?? item.id)),
        );
        dispatch(clearCart());
        navigate(PathConstants.PROFILE);
      } else {
        setErrorMsg("Some items could not be ordered. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Checkout failed. Please try again.");
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <>
      <SummaryCard>
        <SummaryTitle>Order Summary</SummaryTitle>
        <ItemsBreakdown>
          {cart.map((item) => (
            <SummaryRow key={item.id}>
              <ItemNameText>
                {truncateName(item.name)} × {item.quantity}
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

        {errorMsg && <CheckoutError>{errorMsg}</CheckoutError>}

        <CheckoutButton
          type="button"
          onClick={handleCheckout}
          disabled={checkingOut || cart.length === 0}
        >
          {checkingOut ? "Processing..." : "Proceed to Checkout"}
        </CheckoutButton>

        <SecureNote>
          <FiShield size={13} />
          <span>Secure checkout</span>
        </SecureNote>
      </SummaryCard>

      {cart.length > 0 && (
        <MobileCheckoutBar>
          {errorMsg && <CheckoutError>{errorMsg}</CheckoutError>}
          <MobileBarRow>
            <MobileTotalGroup>
              <MobileTotalLabel>Total</MobileTotalLabel>
              <MobileTotalValue>${total.toFixed(2)}</MobileTotalValue>
            </MobileTotalGroup>
            <MobileCheckoutButton
              type="button"
              onClick={handleCheckout}
              disabled={checkingOut || cart.length === 0}
            >
              {checkingOut ? "Processing..." : "Proceed to Checkout"}
            </MobileCheckoutButton>
          </MobileBarRow>
        </MobileCheckoutBar>
      )}
    </>
  );
};

export default OrderSummary;