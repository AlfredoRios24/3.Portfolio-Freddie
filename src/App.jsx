import { useEffect, useState } from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

function App() {
  const [language, setLanguage] = useState('es');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Leer tema guardado en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Aplicar tema y guardar en localStorage
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
    <div className={isDarkMode ? 'dark' : ''} id="Master-Container">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <main className="px-4 sm:px-6 lg:px-12 ">
        <Section1 language={language} />
        <Section2 language={language} />
        <Section3 language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
