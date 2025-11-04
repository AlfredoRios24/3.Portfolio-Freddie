import PropTypes from "prop-types";
import { useState } from "react";
import { PROFILE_INFO } from "../../data/Profile";
import { TRANSLATIONS_SECTION1 } from "../../data/Translations";

function Section1({ language }) {
  // Fallback seguro si el idioma no existe
  const t = TRANSLATIONS_SECTION1[language] || TRANSLATIONS_SECTION1["es"];

  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="container-center py-32 section-anchor" id="section1">
      {/* NOMBRE */}
      {PROFILE_INFO?.Name && (
        <h1 className="h1 text-cyan-400 mb-6 pt-20 sm:pt-0">
          {PROFILE_INFO.Name}
        </h1>
      )}

      {/* FOTO */}
      {PROFILE_INFO?.Image && (
        <img
          src={PROFILE_INFO.Image}
          alt="perfil"
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-8 border-double border-primary mb-6"
        />
      )}

      {/* TRADUCCIÓN DEL TÍTULO Y DESCRIPCIÓN */}
      <h2 className="h2 mt-4">{t.TitleJob}</h2>
      <p className="text-section mt-4">{t.DescriptionJob}</p>

      {/* BOTÓN EXPANDIBLE EXPERIENCIA */}
      <button
        className="btn btn-primary2 mt-8"
        onClick={() => setIsVisible(!isVisible)}
      >
        {t.TitleMoreInfo}
        <ion-icon
          name={isVisible ? "chevron-up-outline" : "chevron-down-outline"}
          className="ml-2"
        ></ion-icon>
      </button>

      {/* TEXTO QUE SE MOSTRARÁ AL ABRIR EXPERIENCIA */}
      {isVisible && (
        <div className="mt-6 text-section">
          <p>{t.MoreInfo}</p>
          <hr className="my-4 border-t border-gray-200 dark:border-gray-600" />
          <p>{t.Experiencie}</p>
        </div>
      )}

      {/* BOTONES SOCIALES + DESCARGAR CV */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="https://www.linkedin.com/in/alfredo-rios-010860101/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <ion-icon name="logo-linkedin" className="mr-2"></ion-icon>
          LinkedIn
        </a>

        <a
          href="https://github.com/AlfredoRios24"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <ion-icon name="logo-github" className="mr-2"></ion-icon>
          AlfredoRios24
        </a>

        <a
          href="/download/CV-Alfredo-Rios-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {t.textDownloadButton}
        </a>
      </div>
    </section>
  );
}

Section1.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Section1;
