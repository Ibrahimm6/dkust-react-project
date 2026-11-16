import React from "react";
import { FiBox, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../../store/cart/cartSlice";
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
} from "./styles";
import { getProductBgColor } from "../../../helpers/product.helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <ItemCard>
      <IconBox $bgColor={getProductBgColor(item.category, item.color)}>
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
            onClick={() => dispatch(removeFromCart(item.id))}
            aria-label="Remove item"
          >
            <FiTrash2 size={15} />
          </DeleteButton>
        </TopRow>

        <BottomRow>
          <QuantityControl>
            <QtyBtn
              type="button"
              onClick={() =>
                dispatch(updateQuantity({ productId: item.id, quantity: item.quantity - 1 }))
              }
              disabled={item.quantity <= 1}
            >
              -
            </QtyBtn>
            <QtyValue>{item.quantity}</QtyValue>
            <QtyBtn
              type="button"
              onClick={() =>
                dispatch(updateQuantity({ productId: item.id, quantity: item.quantity + 1 }))
              }
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