import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Switch from "./Switch.jsx";
import { TRANSLATIONS_HEADER } from "../../data/Translations.js";

import esFlag from "../../assets/es.png";
import enFlag from "../../assets/en.png";
import caFlag from "../../assets/ca.png";

const Header = ({ language, toggleLanguage, toggleTheme, isDarkMode }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Ajustar scroll-padding-top dinámico según el alto del header
  useEffect(() => {
    const header = document.querySelector("nav");
    const updateScrollPadding = () => {
      if (header) {
        document.documentElement.style.scrollPaddingTop = `${header.offsetHeight}px`;
      }
    };
    updateScrollPadding();
    window.addEventListener("resize", updateScrollPadding);
    return () => window.removeEventListener("resize", updateScrollPadding);
  }, []);

  // Fallback seguro: si el idioma no existe, usar "es"
  const t = TRANSLATIONS_HEADER[language] || TRANSLATIONS_HEADER["es"];

  return (
    <nav className="navheader bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text px-4">
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-2 w-full py-4 md:py-0">

        {/* Secciones del menú */}
        <ul className="ulheader flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0">
          {["aboutMe", "courses", "moreInfo"].map((item, i) => (
            <li key={i}>
              <a
                href={`#section${i + 1}`}
                className="linkheadersection whitespace-nowrap text-lg md:text-xl"
              >
                {t[item] ?? ""}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón abrir settings */} 
        {!isSettingsOpen && (
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="linkheadersection text-4xl mt-4 md:mt-0 md:ml-8"
          >
            <ion-icon name="settings-outline" style={{ fontSize: "2rem" }}></ion-icon>
          </button>
        )}
      </div>

      {/* Panel configuración (móvil + desktop) */}
      {isSettingsOpen && (
        <>
          {/* móvil overlay */}
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-6 md:hidden">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute top-5 right-5 text-5xl"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>

            <ul className="font-bold w-full max-w-xs space-y-3">
              {/** Idiomas */}
              <li>
                <Switch
                  label="Español"
                  checked={language === "es"}
                  onChange={() => toggleLanguage("es")}
                  icon={<img src={esFlag} alt="Español" className="w-6 h-6 rounded-sm" />}
                />
              </li>

              <li>
                <Switch
                  label="Català"
                  checked={language === "ca"}
                  onChange={() => toggleLanguage("ca")}
                  icon={<img src={caFlag} alt="Català" className="w-6 h-6 rounded-sm" />}
                />
              </li>

              <li>
                <Switch
                  label="Inglés"
                  checked={language === "en"}
                  onChange={() => toggleLanguage("en")}
                  icon={<img src={enFlag} alt="English" className="w-6 h-6 rounded-sm" />}
                />
              </li>

              {/** Tema */}
              <li>
                <Switch
                  label="Modo Oscuro"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  icon={<ion-icon name="moon-outline"></ion-icon>}
                />
              </li>

              <li>
                <Switch
                  label="Modo Claro"
                  checked={!isDarkMode}
                  onChange={toggleTheme}
                  icon={<ion-icon name="sunny-outline"></ion-icon>}
                />
              </li>
            </ul>
          </div>

          {/* escritorio lateral */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute -top-8 right-0 text-5xl z-50"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>

            <div className="settings-menu font-bold p-6 shadow-lg rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-transform duration-300">
              <ul className="space-y-3">
                {/** Idiomas */}
                <li>
                  <Switch
                    label="Español"
                    checked={language === "es"}
                    onChange={() => toggleLanguage("es")}
                    icon={<img src={esFlag} alt="Español" className="w-6 h-6 rounded-sm" />}
                  />
                </li>

                <li>
                  <Switch
                    label="Català"
                    checked={language === "ca"}
                    onChange={() => toggleLanguage("ca")}
                    icon={<img src={caFlag} alt="Català" className="w-6 h-6 rounded-sm" />}
                  />
                </li>

                <li>
                  <Switch
                    label="Inglés"
                    checked={language === "en"}
                    onChange={() => toggleLanguage("en")}
                    icon={<img src={enFlag} alt="English" className="w-6 h-6 rounded-sm" />}
                  />
                </li>

                {/** Tema */}
                <li>
                  <Switch
                    label="Modo Oscuro"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    icon={<ion-icon name="moon-outline"></ion-icon>}
                  />
                </li>

                <li>
                  <Switch
                    label="Modo Claro"
                    checked={!isDarkMode}
                    onChange={toggleTheme}
                    icon={<ion-icon name="sunny-outline"></ion-icon>}
                  />
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

Header.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
