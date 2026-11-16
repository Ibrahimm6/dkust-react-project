import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../../services/cart/cart.service";
import { getProducts } from "../../services/products/products.service";
import { getLocalizedText } from "../../helpers/product.helpers";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (lang = "en") => {
    const [cartRes, productsRes] = await Promise.all([getCart(), getProducts()]);
    if (
      cartRes.status === 200 &&
      Array.isArray(cartRes.data) &&
      productsRes.status === 200 &&
      Array.isArray(productsRes.data)
    ) {
      return cartRes.data
        .map((cartItem) => {
          const product = productsRes.data.find(
            (p) => Number(p.id) === Number(cartItem.productId)
          );
          if (!product) return null;
          return {
            id: product.id,
            name: getLocalizedText(product.name, lang),
            category: getLocalizedText(product.category, lang),
            price: product.price || 0,
            color: product.color || "",
            quantity: cartItem.quantity || 1,
          };
        })
        .filter(Boolean);
    }
    return [];
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find(
        (item) => Number(item.id) === Number(product.id)
      );
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(
        (item) => Number(item.id) !== Number(productId)
      );
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (quantity < 1) return;
      const existing = state.items.find(
        (item) => Number(item.id) === Number(productId)
      );
      if (existing) {
        existing.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        const merged = [...action.payload];
        state.items.forEach((localItem) => {
          if (!merged.some((item) => Number(item.id) === Number(localItem.id))) {
            merged.push(localItem);
          }
        });
        state.items = merged;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;