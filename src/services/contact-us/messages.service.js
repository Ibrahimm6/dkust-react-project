import environment from "../../environment";
import { POST } from "../http.service";

export const sendMessage = async (payload) => {
  return await POST(environment.messages, payload);
};
