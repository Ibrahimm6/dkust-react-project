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
  async (lang = "en") => {
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
    return [];
  }
);

export const toggleWishlistItem = createAsyncThunk(
  "wishlist/toggleWishlistItem",
  async (product, { getState, rejectWithValue }) => {
    const existing = getState().wishlist.items.find(
      (item) => Number(item.id) === Number(product.id)
    );

    if (existing) {
      const targetId = existing.favoriteId ?? existing.id;
      const res = await removeFavorite(targetId);
      if (res.status && res.status !== 200 && res.status !== 204) {
        return rejectWithValue(existing);
      }
      return { action: "removed", productId: product.id };
    } else {
      const res = await addFavorite({
        id: Number(product.id),
        productId: Number(product.id),
      });
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state) => {
        state.loading = false;
      })
      .addCase(toggleWishlistItem.pending, (state, action) => {
        const product = action.meta.arg;
        const exists = state.items.some(
          (item) => Number(item.id) === Number(product.id)
        );
        if (exists) {
          state.items = state.items.filter(
            (item) => Number(item.id) !== Number(product.id)
          );
        } else {
          state.items.push({ ...product, favoriteId: product.id });
        }
      })
      .addCase(toggleWishlistItem.fulfilled, (state, action) => {
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
        if (action.payload) {
          state.items.push(action.payload);
        }
      });
  },
});

export default wishlistSlice.reducer;