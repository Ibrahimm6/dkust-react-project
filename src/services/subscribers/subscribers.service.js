import environment from "../../environment";
import { POST } from "../http.service";

export const subscribeNewsletter = async (payload) => {
  return await POST(environment.subscribers, payload);
};