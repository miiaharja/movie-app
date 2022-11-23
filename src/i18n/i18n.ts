import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fi from "./fi.json";

export const defaultNS = "translation";
export const resources = {
  en,
  fi,
} as const;

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// eslint-disable-next-line import/no-default-export
export default i18n;
