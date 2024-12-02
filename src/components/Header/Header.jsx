    import PropTypes from 'prop-types';
    import { useState } from 'react';
    import Switch from './Switch.jsx';
    import { TRANSLATIONS_HEADER } from '../../data/Translations.js'


    const Header = ({ language, toggleLanguage, toggleTheme, isDarkMode }) => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(true);


    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen); 
    };

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen); 
    };



    return (
        <nav className="navheader dark:bg-gray-900">
        <div className="flex justify-between items-center">
            <span className="text-4xl linkheadersection">
            <button onClick={toggleHeader}>
                <ion-icon
                name={isHeaderOpen ? "return-down-back-outline" : "menu-outline"}
                ></ion-icon>
            </button>
            </span>
        </div>

        {isHeaderOpen && (
            <ul className="ulheader">
            <li className="mx-4 my-5 md:my-0">
                <a href="#section1" className="linkheadersection">
                    {TRANSLATIONS_HEADER[language].aboutMe}
                </a>
            </li>
            <li className="mx-4 my-5 md:my-0">
                <a href="#section2" className="linkheadersection">
                    {TRANSLATIONS_HEADER[language].courses}
                </a>
            </li>
            <li className="mx-4 my-5 md:my-0">
                <a href="#section3" className="linkheadersection">
                    {TRANSLATIONS_HEADER[language].moreInfo}
                </a>
            </li>

            <li className="mx-4 my-5 md:my-0">
                <button onClick={toggleSettings} className="linkheadersection">
                <ion-icon name={isSettingsOpen ? "close-circle-outline" : "settings-outline"}></ion-icon>
                </button>
            </li>

            {isSettingsOpen && (
                <div className="settings-menu bg-indigo-800 font-bold p-4 absolute top-24 right-0 shadow-lg rounded-lg">
                <ul>
                    <li className="my-3">
                    <Switch
                        label="Inglés"
                        checked={language === 'en'}
                        onChange={toggleLanguage}
                    />
                    </li>

                    <li className="my-3">
                    <Switch
                        label="Español"
                        checked={language === 'es'}
                        onChange={toggleLanguage}
                    />
                    </li>

                    <li className="my-3">
                    <Switch
                        label="Modo Oscuro"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    </li>

                    <li className="my-3">
                    <Switch
                        label="Modo Claro"
                        checked={!isDarkMode}
                        onChange={toggleTheme}
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
