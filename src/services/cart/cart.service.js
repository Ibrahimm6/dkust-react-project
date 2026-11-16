import environment from "../../environment";
import { GET, POST, PATCH, DELETE } from "../http.service";

export const getCart = async () => {
  return await GET(environment.cart);
};

export const addCartItem = async (payload) => {
  return await POST(environment.cart, payload);
};

export const updateCartItem = async (id, payload) => {
  return await PATCH(`${environment.cart}/${id}`, payload);
};

export const removeCartItem = async (id) => {
  return await DELETE(`${environment.cart}/${id}`);
};