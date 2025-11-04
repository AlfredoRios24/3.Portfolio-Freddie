import { useEffect, useState } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";

function App() {
  const [language, setLanguage] = useState("es");
  const [isDarkMode, setIsDarkMode] = useState(true);

  /** 🌍 Cambiar idioma */
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  /** 🌓 Cambiar tema */
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  /** ✅ Detectar idioma del navegador o localStorage */
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.slice(0, 2); // es | en | ca
      const defaultLang = ["es", "en", "ca"].includes(browserLang)
        ? browserLang
        : "en";

      setLanguage(defaultLang);
      localStorage.setItem("language", defaultLang);
    }
  }, []);

  /** ✅ Detectar tema guardado */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setIsDarkMode(savedTheme === "dark");
  }, []);

  /** ✅ Aplicar Dark Mode al body */
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div id="Master-Container">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <main className="px-4 sm:px-6 lg:px-12">
        <Section1 language={language} />
        <Section2 language={language} />
        <Section3 language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
