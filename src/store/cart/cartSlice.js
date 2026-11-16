import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
} from "../../services/cart/cart.service";
import { getProducts } from "../../services/products/products.service";
import { getLocalizedText } from "../../helpers/product.helpers";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (lang = "en") => {
    const [cartRes, productsRes] = await Promise.all([
      getCart(),
      getProducts(),
    ]);
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
            cartItemId: cartItem.id, 
          };
        })
        .filter(Boolean);
    }
    return [];
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ product, quantity = 1 }, { getState, rejectWithValue }) => {
    const state = getState().cart;
    const existing = state.items.find(
      (item) => Number(item.id) === Number(product.id)
    );

    if (existing) {
      const newQuantity = existing.quantity + quantity;
      const response = await updateCartItem(existing.cartItemId, {
        quantity: newQuantity,
      });
      if (response.status === 200 || response.status === 201 || response.status === 204) {
        return { action: "updated", productId: product.id, quantity: newQuantity };
      }
      return rejectWithValue("Failed to update quantity");
    } else {
      const payload = {
        id: Number(product.id),
        productId: Number(product.id),
        quantity: quantity,
      };
      const response = await addCartItem(payload);
      if (response.status === 200 || response.status === 201) {
        return {
          action: "added",
          product: { ...product, quantity, cartItemId: response.data.id || product.id },
        };
      }
      return rejectWithValue("Failed to add item");
    }
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, quantity }, { getState, rejectWithValue }) => {
    if (quantity < 1) return rejectWithValue("Quantity must be at least 1");
    
    const existing = getState().cart.items.find(
      (item) => Number(item.id) === Number(productId)
    );
    
    if (existing) {
      const response = await updateCartItem(existing.cartItemId, { quantity });
      if (response.status === 200 || response.status === 201 || response.status === 204) {
        return { productId, quantity };
      }
    }
    return rejectWithValue("Failed to update quantity");
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { getState, rejectWithValue }) => {
    const existing = getState().cart.items.find(
      (item) => Number(item.id) === Number(productId)
    );
    if (existing) {
      const response = await removeCartItem(existing.cartItemId);
      if (response.status === 200 || response.status === 204) {
        return productId;
      }
    }
    return rejectWithValue("Failed to remove item");
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      })
      // Add To Cart
      .addCase(addToCart.fulfilled, (state, action) => {
        if (action.payload.action === "added") {
          state.items.push(action.payload.product);
        } else if (action.payload.action === "updated") {
          const existing = state.items.find(
            (item) => Number(item.id) === Number(action.payload.productId)
          );
          if (existing) {
            existing.quantity = action.payload.quantity;
          }
        }
      })
      // Update Quantity
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const { productId, quantity } = action.payload;
        const existing = state.items.find(
          (item) => Number(item.id) === Number(productId)
        );
        if (existing) {
          existing.quantity = quantity;
        }
      })
      // Remove From Cart
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const productId = action.payload;
        state.items = state.items.filter(
          (item) => Number(item.id) !== Number(productId)
        );
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;