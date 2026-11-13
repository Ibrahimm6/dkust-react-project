import environment from "../../environment";
import { GET } from "../http.service";

export const getAboutData = async () => {
  return await GET(environment.about);
};
