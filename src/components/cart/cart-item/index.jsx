import React from 'react';
import { FiBox, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../../contexts/cartContext';
import {
  ItemCard,
  IconBox,
  ItemContent,
  TopRow,
  ItemInfo,
  ItemTitle,
  ItemCategory,
  DeleteButton,
  BottomRow,
  QuantityControl,
  QtyBtn,
  QtyValue,
  ItemPrice,
} from './styles';

const getBgColor = (category) => {
  const colors = {
    Software: '#1e3a8a',
    Robotics: '#14532d',
    AI: '#1e40af',
    Hardware: '#451a03',
    Security: '#0f172a',
  };
  return colors[category] || '#1e3a8a';
};

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <ItemCard>
      <IconBox $bgColor={getBgColor(item.category)}>
        <FiBox size={28} />
      </IconBox>

      <ItemContent>
        <TopRow>
          <ItemInfo>
            <ItemTitle to={`/products/${item.id}`}>{item.name}</ItemTitle>
            <ItemCategory>{item.category}</ItemCategory>
          </ItemInfo>

          <DeleteButton
            type="button"
            onClick={() => removeFromCart(item.id)}
            aria-label="Remove item"
          >
            <FiTrash2 size={15} />
          </DeleteButton>
        </TopRow>

        <BottomRow>
          <QuantityControl>
            <QtyBtn
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              −
            </QtyBtn>
            <QtyValue>{item.quantity}</QtyValue>
            <QtyBtn
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </QtyBtn>
          </QuantityControl>

          <ItemPrice>
            ${(item.price * item.quantity).toLocaleString()}
            <span>/mo</span>
          </ItemPrice>
        </BottomRow>
      </ItemContent>
    </ItemCard>
  );
};

export default CartItem;