import environment from "../../environment";
import { GET, POST, DELETE } from "../http.service";

export const getFavorites = async () => {
  return await GET(environment.favorites);
};

export const addFavorite = async (payload) => {
  return await POST(environment.favorites, payload);
};

export const removeFavorite = async (id) => {
  return await DELETE(`${environment.favorites}/${id}`);
};