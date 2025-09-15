import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Switch from './Switch.jsx';
import { TRANSLATIONS_HEADER } from '../../data/Translations.js';

import esFlag from '../../assets/es.png';
import enFlag from '../../assets/en.png';

const Header = ({ language, toggleLanguage, toggleTheme, isDarkMode }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Ajuste dinámico del scroll-padding-top según el alto del header
  useEffect(() => {
    const header = document.querySelector('nav');
    const updateScrollPadding = () => {
      if (header) {
        document.documentElement.style.scrollPaddingTop = `${header.offsetHeight}px`;
      }
    };
    updateScrollPadding();
    window.addEventListener('resize', updateScrollPadding);
    return () => window.removeEventListener('resize', updateScrollPadding);
  }, []);

  return (
    <nav className="navheader bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text px-4">
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-28 w-full py-4 md:py-0">
        {/* Lista de secciones */}
        <ul className="ulheader flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0">
          {["aboutMe", "courses", "moreInfo"].map((item, i) => (
            <li key={i}>
              <a
                href={`#section${i + 1}`}
                className="linkheadersection whitespace-nowrap text-lg md:text-xl"
              >
                {TRANSLATIONS_HEADER[language][item]}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón de configuración (solo visible si el menú está cerrado) */}
        {!isSettingsOpen && (
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="linkheadersection text-4xl mt-4 md:mt-0 md:ml-8"
          >
            <ion-icon name="settings-outline" style={{ fontSize: "2rem" }}></ion-icon>
          </button>
        )}
      </div>

      {/* Menú de settings */}
      {isSettingsOpen && (
        <>
          {/* 📱 Móvil -> Overlay */}
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-6 md:hidden">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute top-5 right-5 text-5xl"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>

            <ul className="font-bold w-full max-w-xs space-y-3">
              <li>
                <Switch
                  label="Español"
                  checked={language === 'es'}
                  onChange={toggleLanguage}
                  icon={<img src={esFlag} alt="Español" className="w-6 h-6 rounded-sm" />}
                />
              </li>
              <li>
                <Switch
                  label="Inglés"
                  checked={language === 'en'}
                  onChange={toggleLanguage}
                  icon={<img src={enFlag} alt="English" className="w-6 h-6 rounded-sm" />}
                />
              </li>
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

          {/* 💻 Escritorio -> Panel lateral */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute -top-8 right-0 text-5xl z-50"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>

            <div
              className={`settings-menu font-bold p-6 shadow-lg rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-transform duration-300 ${isSettingsOpen ? 'scale-110' : 'scale-100'}`}
            >
              <ul className="space-y-3">
                <li>
                  <Switch
                    label="Español"
                    checked={language === 'es'}
                    onChange={toggleLanguage}
                    icon={<img src={esFlag} alt="Español" className="w-6 h-6 rounded-sm" />}
                  />
                </li>
                <li>
                  <Switch
                    label="Inglés"
                    checked={language === 'en'}
                    onChange={toggleLanguage}
                    icon={<img src={enFlag} alt="English" className="w-6 h-6 rounded-sm" />}
                  />
                </li>
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
