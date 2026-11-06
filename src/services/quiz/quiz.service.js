import environment from "../../environment";
import { GET, getLang } from "../http.service";

export const getQuiz = async (lang) => {
  const currentLang = lang || getLang() || "en";
  const response = await GET(`${environment.quiz}?lang=${currentLang}`);
  return response;
};