import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../../services/favorites/favorites.service";
import { getProducts } from "../../services/products/products.service";
import { mapProductData } from "../../helpers/product.helpers";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (lang = "en", { rejectWithValue }) => {
    const [favRes, productsRes] = await Promise.all([
      getFavorites(),
      getProducts(),
    ]);
    if (
      favRes.status === 200 &&
      Array.isArray(favRes.data) &&
      productsRes.status === 200 &&
      Array.isArray(productsRes.data)
    ) {
      return favRes.data
        .map((favItem) => {
          const targetId = favItem.productId ?? favItem.id;
          const product = productsRes.data.find(
            (p) => Number(p.id) === Number(targetId)
          );
          if (!product) return null;
          return {
            ...mapProductData(product, lang),
            favoriteId: favItem.id,
          };
        })
        .filter(Boolean);
    }
    return rejectWithValue("Failed to fetch wishlist");
  }
);

export const toggleWishlistItem = createAsyncThunk(
  "wishlist/toggleWishlistItem",
  async (product, { getState, rejectWithValue }) => {
    const removedItem = getState().wishlist._lastRemovedItem;
    const wasRemoved =
      removedItem && Number(removedItem.id) === Number(product.id);

    if (wasRemoved) {
      const targetId = removedItem.favoriteId ?? removedItem.id;
      const res = await removeFavorite(targetId);
      if (res.status !== 200 && res.status !== 204) {
        return rejectWithValue({ action: "remove_failed", item: removedItem });
      }
      return { action: "removed", productId: product.id };
    } else {
      const res = await addFavorite({
        id: Number(product.id),
        productId: Number(product.id),
      });
      if (res.status !== 200 && res.status !== 201) {
        return rejectWithValue({ action: "add_failed", productId: product.id });
      }
      return {
        action: "added",
        productId: product.id,
        favoriteId: res.data?.id ?? product.id,
      };
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    loading: false,
    _lastRemovedItem: null,
  },
  reducers: {
    clearWishlist: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const merged = [...action.payload];
        state.items.forEach((localItem) => {
          if (!merged.some((i) => Number(i.id) === Number(localItem.id))) {
            merged.push(localItem);
          }
        });
        state.items = merged;
      })
      .addCase(fetchWishlist.rejected, (state) => {
        state.loading = false;
      })
      .addCase(toggleWishlistItem.pending, (state, action) => {
        const product = action.meta.arg;
        const existing = state.items.find(
          (item) => Number(item.id) === Number(product.id)
        );
        if (existing) {
          state._lastRemovedItem = existing;
          state.items = state.items.filter(
            (item) => Number(item.id) !== Number(product.id)
          );
        } else {
          state._lastRemovedItem = null;
          state.items.push({ ...product, favoriteId: product.id });
        }
      })
      .addCase(toggleWishlistItem.fulfilled, (state, action) => {
        state._lastRemovedItem = null;
        if (action.payload.action === "added") {
          const item = state.items.find(
            (i) => Number(i.id) === Number(action.payload.productId)
          );
          if (item) {
            item.favoriteId = action.payload.favoriteId;
          }
        }
      })
      .addCase(toggleWishlistItem.rejected, (state, action) => {
        state._lastRemovedItem = null;
        const payload = action.payload;
        if (!payload) return;
        if (payload.action === "remove_failed" && payload.item) {
          state.items.push(payload.item);
        } else if (payload.action === "add_failed") {
          state.items = state.items.filter(
            (i) => Number(i.id) !== Number(payload.productId)
          );
        }
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;