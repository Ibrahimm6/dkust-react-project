import environment from "../../environment";
import { GET } from "../http.service";

export const getServices = async () => {
  return await GET(environment.services);
};
