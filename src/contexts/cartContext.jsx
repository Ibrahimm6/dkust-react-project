import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getCart } from "../services/cart/cart.service";
import { getProducts } from "../services/products/products.service";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const getLocalizedText = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
};

export const CartProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = i18n?.language || "en";

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInitialCart = async () => {
    setLoading(true);
    try {
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
        const allProducts = productsRes.data;
        const apiCart = cartRes.data;

        const mergedCart = apiCart
          .map((cartItem) => {
            const productDetails = allProducts.find(
              (p) => Number(p.id) === Number(cartItem.productId)
            );
            if (productDetails) {
              return {
                id: productDetails.id,
                name: getLocalizedText(productDetails.name, lang),
                category: getLocalizedText(productDetails.category, lang),
                price: productDetails.price || 0,
                quantity: cartItem.quantity || 1,
              };
            }
            return null;
          })
          .filter(Boolean);

        setCart((prevCart) => {
          const combined = [...mergedCart];
          prevCart.forEach((localItem) => {
            if (!combined.some((item) => Number(item.id) === Number(localItem.id))) {
              combined.push(localItem);
            }
          });
          return combined;
        });
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialCart();
  }, [lang]);

  const addToCart = (product, quantityToAdd = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => Number(item.id) === Number(product.id)
      );
      if (existingItem) {
        return prevCart.map((item) =>
          Number(item.id) === Number(product.id)
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => Number(item.id) !== Number(productId))
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        Number(item.id) === Number(productId)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};