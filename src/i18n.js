import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DateTime } from "luxon";

import translationEN from "./translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
    format: function (value, format) {
      if (value instanceof Date)
        return DateTime.fromJSDate(value).toFormat(format);
      return value;
    },
  },
});

export default i18n;
