import environment from "../../environment";
import { GET, POST } from "../http.service";

export const getOrders = async (userId) => {
  const path = userId
    ? `${environment.orders}?userId=${userId}`
    : environment.orders;
  return await GET(path);
};

export const createOrder = async (payload) => {
  return await POST(environment.orders, payload);
};