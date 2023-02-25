import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const traEn = {
  singup: "Sing up",
};
const traFr = {
  singup: "ثبت نام",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: traEn },
    fa: { translation: traFr },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
