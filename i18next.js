import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const traEn = {
  singup: "Sing up",
  login: "Login",
  header1a: "IRAN",
  header1b: " ANCIENT LAND",
  header2:"If you are a student, working or passing time, it is important for you This site is right for you, just register",
getStart:"Get Srart",
  };
  const traFr = { 
    singup: "ثبت نام",
     login: "ورود" ,
     header1a: "ایران",
     header1b: "سرزمین کهن",
     getStart:"همین الان شروع کن",   };
  


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: traEn },
    fa: { translation: traFr },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  // whiteList : languages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
