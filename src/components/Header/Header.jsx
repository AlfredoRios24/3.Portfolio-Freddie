import PropTypes from 'prop-types';
import { useState } from 'react';
import Switch from './Switch.jsx';
import { TRANSLATIONS_HEADER } from '../../data/Translations.js'

import esFlag from '../../assets/es.png';
import enFlag from '../../assets/en.png';

const Header = ({ language, toggleLanguage, toggleTheme, isDarkMode }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <nav className="navheader bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <div className="flex justify-between items-center h-20">
        <button onClick={() => setIsHeaderOpen(!isHeaderOpen)} className="text-4xl">
          <ion-icon name={isHeaderOpen ? "return-down-back-outline" : "menu-outline"}></ion-icon>
        </button>
      </div>

      {isHeaderOpen && (
        <ul className="ulheader flex justify-end items-center space-x-8">
          {["aboutMe", "courses", "moreInfo"].map((item, i) => (
            <li key={i}>
              <a
                href={`#section${i+1}`}
                className="linkheadersection"
              >
                {TRANSLATIONS_HEADER[language][item]}
              </a>
            </li>
          ))}

          <li>
            <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} className="linkheadersection">
              <ion-icon name={isSettingsOpen ? "close-circle-outline" : "settings-outline"}></ion-icon>
            </button>
          </li>

          {isSettingsOpen && (
            <div className="settings-menu font-bold p-4 absolute top-24 right-0 shadow-lg rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text ">
              <ul>
                <li className="my-3">
                    
                  <Switch
                    label="Español"
                    checked={language === 'es'}
                    onChange={toggleLanguage}
                    icon={<img src={esFlag} alt="English" className="w-6 h-6 rounded-sm" />}
                  />
                  <li className="my-3">
                  <Switch
                    label="Inglés"
                    checked={language === 'en'}
                    onChange={toggleLanguage}
                     icon={<img src={enFlag} alt="English" className="w-6 h-6 rounded-sm" />}
                  />
                </li>
                </li>
                <li className="my-3">
                  <Switch
                    label="Modo Oscuro"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    icon={<ion-icon name="moon-outline"></ion-icon>}
                  />
                </li>
                <li className="my-3">
                  <Switch
                    label="Modo Claro"
                    checked={!isDarkMode}
                    onChange={toggleTheme}
                    icon={<ion-icon name="sunny-outline"></ion-icon>}
                  />
                </li>
              </ul>
            </div>
          )}
        </ul>
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
