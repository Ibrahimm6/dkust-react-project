import environment from "../../environment";
import { GET } from "../http.service";

export const getProducts = async () => {
  const response = await GET(environment.products);
  return response;
};

export const getProductById = async (id) => {
  const response = await GET(`${environment.products}/${id}`);
  return response;
};
