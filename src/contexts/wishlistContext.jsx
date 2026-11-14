import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../services/favorites/favorites.service";
import { getProducts } from "../services/products/products.service";
import { mapProductData } from "../helpers/product.helpers";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = i18n?.language || "en";

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInitialWishlist = async () => {
    setLoading(true);
    try {
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
        const allProducts = productsRes.data;
        const apiFavorites = favRes.data;

        const mergedWishlist = apiFavorites
          .map((favItem) => {
            const targetProdId = favItem.productId ?? favItem.id;
            const productDetails = allProducts.find(
              (p) => Number(p.id) === Number(targetProdId)
            );
            if (productDetails) {
              return {
                ...mapProductData(productDetails, lang),
                favoriteId: favItem.id,
              };
            }
            return null;
          })
          .filter(Boolean);

        setWishlist(mergedWishlist);
      }
    } catch (error) {
      console.error("Error loading wishlist:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialWishlist();
  }, [lang]);

  const toggleWishlist = async (product) => {
    const existingItem = wishlist.find(
      (item) => Number(item.id) === Number(product.id)
    );

    if (existingItem) {
      setWishlist((prev) =>
        prev.filter((item) => Number(item.id) !== Number(product.id))
      );

      const deleteTargetId = existingItem.favoriteId ?? existingItem.id;
      const response = await removeFavorite(deleteTargetId);

      if (
        response.status &&
        response.status !== 200 &&
        response.status !== 204
      ) {
        setWishlist((prev) => [...prev, existingItem]);
      }
    } else {
      const tempItem = { ...product, favoriteId: product.id };
      setWishlist((prev) => [...prev, tempItem]);

      const response = await addFavorite({
        id: Number(product.id),
        productId: Number(product.id),
      });

      if (
        (response.status === 200 || response.status === 201) &&
        response.data?.id
      ) {
        setWishlist((prev) =>
          prev.map((item) =>
            Number(item.id) === Number(product.id)
              ? { ...item, favoriteId: response.data.id }
              : item
          )
        );
      }
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => Number(item.id) === Number(productId));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};