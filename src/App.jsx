import { useEffect, useState } from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

function App() {
  const [language, setLanguage] = useState('es'); 

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    }, []);

    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [isDarkMode]);


  return (
    <>
    <div className={isDarkMode ? 'dark' : ''} id="Master-Container">
      <Header
        language={language} toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme} isDarkMode={isDarkMode}
      />
      <Section1 language={language} toggleLanguage={toggleLanguage} />
      <Section2 language={language} toggleLanguage={toggleLanguage} />
      <Section3 language={language} toggleLanguage={toggleLanguage} />
      <Footer language={language} toggleLanguage={toggleLanguage} />

      </div>
    </>
  );
}

export default App;
