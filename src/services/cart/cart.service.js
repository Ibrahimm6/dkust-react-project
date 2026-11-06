import environment from "../../environment";
import { GET } from "../http.service";

export const getCart = async () => {
  const response = await GET(environment.cart);
  return response;
};