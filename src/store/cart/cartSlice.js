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
  async (lang = "en", { rejectWithValue }) => {
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
            nameEn: getLocalizedText(product.name, "en"),
            nameAr: getLocalizedText(product.name, "ar"),
            category: getLocalizedText(product.category, lang),
            price: product.price || 0,
            color: product.color || "",
            quantity: cartItem.quantity || 1,
            cartItemId: cartItem.id,
          };
        })
        .filter(Boolean);
    }
    return rejectWithValue("Failed to fetch cart");
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ product, quantity = 1 }, { getState, rejectWithValue }) => {
    const existing = getState().cart.items.find(
      (item) => Number(item.id) === Number(product.id)
    );
    const wasAlreadyInCart = existing && !existing._isOptimisticNew;

    if (wasAlreadyInCart) {
      const response = await updateCartItem(existing.cartItemId, {
        quantity: existing.quantity,
      });
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return { action: "updated", productId: product.id };
      }
      return rejectWithValue({
        type: "decrement",
        productId: product.id,
        delta: quantity,
      });
    }

    const payload = {
      id: Number(product.id),
      productId: Number(product.id),
      quantity,
    };
    const response = await addCartItem(payload);
    if (response.status === 200 || response.status === 201) {
      return {
        action: "added",
        productId: product.id,
        cartItemId: response.data?.id ?? product.id,
      };
    }
    return rejectWithValue({ type: "remove", productId: product.id });
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, quantity }, { getState, rejectWithValue }) => {
    if (quantity < 1) return rejectWithValue(null);

    const existing = getState().cart.items.find(
      (item) => Number(item.id) === Number(productId)
    );
    const targetId = existing?.cartItemId ?? productId;

    const response = await updateCartItem(targetId, { quantity });
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      return { productId, quantity };
    }
    return rejectWithValue(null);
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { getState, rejectWithValue }) => {
    const targetId =
      getState().cart._lastRemovedCartItemId ?? productId;

    const response = await removeCartItem(targetId);
    if (response.status === 200 || response.status === 204) {
      return productId;
    }
    return rejectWithValue(null);
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    _lastRemovedCartItemId: null,
  },
  reducers: {
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
          if (!merged.some((i) => Number(i.id) === Number(localItem.id))) {
            merged.push(localItem);
          }
        });
        state.items = merged;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      })

      .addCase(addToCart.pending, (state, action) => {
        const { product, quantity = 1 } = action.meta.arg;
        const existing = state.items.find(
          (item) => Number(item.id) === Number(product.id)
        );
        if (existing) {
          existing.quantity += quantity;
        } else {
          state.items.push({
            ...product,
            quantity,
            cartItemId: product.id,
            _isOptimisticNew: true,
          });
        }
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const item = state.items.find(
          (i) => Number(i.id) === Number(action.payload.productId)
        );
        if (item) {
          delete item._isOptimisticNew;
          if (action.payload.action === "added") {
            item.cartItemId = action.payload.cartItemId;
          }
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        const rollback = action.payload;
        if (!rollback) return;
        if (rollback.type === "remove") {
          state.items = state.items.filter(
            (i) => Number(i.id) !== Number(rollback.productId)
          );
        } else if (rollback.type === "decrement") {
          const item = state.items.find(
            (i) => Number(i.id) === Number(rollback.productId)
          );
          if (item) {
            item.quantity = Math.max(1, item.quantity - rollback.delta);
          }
        }
      })

      .addCase(updateQuantity.pending, (state, action) => {
        const { productId, quantity } = action.meta.arg;
        if (quantity < 1) return;
        const existing = state.items.find(
          (item) => Number(item.id) === Number(productId)
        );
        if (existing) {
          existing._prevQuantity = existing.quantity;
          existing.quantity = quantity;
        }
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const existing = state.items.find(
          (item) => Number(item.id) === Number(action.payload.productId)
        );
        if (existing) {
          delete existing._prevQuantity;
        }
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        const { productId } = action.meta.arg;
        const existing = state.items.find(
          (item) => Number(item.id) === Number(productId)
        );
        if (existing && existing._prevQuantity !== undefined) {
          existing.quantity = existing._prevQuantity;
          delete existing._prevQuantity;
        }
      })

      .addCase(removeFromCart.pending, (state, action) => {
        const productId = action.meta.arg;
        const index = state.items.findIndex(
          (item) => Number(item.id) === Number(productId)
        );
        if (index !== -1) {
          const removed = state.items[index];
          state._lastRemovedCartItemId = removed.cartItemId ?? removed.id;
          action.meta._removedItem = removed;
          state.items.splice(index, 1);
        }
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        if (action.meta._removedItem) {
          state.items.push(action.meta._removedItem);
        }
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;