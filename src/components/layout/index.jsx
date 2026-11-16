import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../../helpers/ScrollToTop";
import { useAuth } from "../../context/auth/useAuth";
import { fetchCart, clearCart } from "../../store/cart/cartSlice";
import { fetchWishlist, clearWishlist } from "../../store/wishlist/wishlistSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { isAuthenticated } = useAuth();
  const lang = i18n?.language || "en";

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCart(lang));
      dispatch(fetchWishlist(lang));
    } else {
      dispatch(clearCart());
      dispatch(clearWishlist());
    }
  }, [dispatch, lang, isAuthenticated]);

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center p-5 text-success fw-bold">
          Loading...
        </div>
      }
    >
      <ScrollToTop />
      <Outlet />
    </Suspense>
  );
};

export default Layout;