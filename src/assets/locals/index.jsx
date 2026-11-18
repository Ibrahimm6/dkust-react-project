import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import environment from "../../environment";
import { getLocalStorage, setLocalStorage } from "../../helpers/local-storage";
import enTranslation from "./en/translation.json";
import arTranslation from "./ar/translation.json";

const savedLang =
  getLocalStorage(environment.lang) ||
  getLocalStorage(environment.localLang) ||
  "en";

const initialLang = savedLang === "ar" ? "ar" : "en";

document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = initialLang;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  const normalized = lng === "ar" ? "ar" : "en";
  setLocalStorage(environment.lang, normalized);
  setLocalStorage(environment.localLang, normalized);
  document.documentElement.dir = normalized === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = normalized;
});

export default i18n;