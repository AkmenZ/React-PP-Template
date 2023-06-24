import React from "react";
import "./App.css";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Container from 'react-bootstrap/Container';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "lv",
    detection: {
      checkWhitelist: true,
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "moboLang",
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  });

function App() {
  const { t } = useTranslation();

  return (
    <Container>
    <div className="App">
      <header className="App-header">
        <h1>{t('title')}</h1>
      </header>
      <div>
        <h3>{t('policy.intro')}</h3>
        <p>• {t('intro.point1')}</p>
        <p>• {t('intro.point2')}</p>
      </div>
    </div>
    </Container>
  );
}

export default App;
