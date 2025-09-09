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
          language={language}
          toggleLanguage={toggleLanguage}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        <main className="px-4 sm:px-6 lg:px-12">
          <Section1 language={language} toggleLanguage={toggleLanguage} />
          <Section2 language={language} toggleLanguage={toggleLanguage} />
          <Section3 language={language} toggleLanguage={toggleLanguage} />
        </main>
        <Footer language={language} toggleLanguage={toggleLanguage} />
      </div>
    </>
  );
}

export default App;

// cada cambio, ejecutar "" ./deploy.sh "" en gitBash para subir contenido a AWS servidor

/* Para actualizarlo al servidor aws
# 1. Editas código
# 2. Ejecutas:
npm run build
# 3. Luego:
aws s3 sync dist/ s3://mi-bucket-portfolio --delete
# 4. (Opcional) Invalidas caché de CloudFront si lo necesitas

CODIGO PARA GIT BASH
rm -rf dist node_modules/.vite
npm install
npm run build


deploy_s3.sh → el archivo donde está tu script.

chmod +x deploy_s3.sh → lo vuelve ejecutable.

./deploy_s3.sh → lo corres en Git Bash.
*/