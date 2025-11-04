import PropTypes from 'prop-types';
import { TRANSLATIONS_SECTION2, TRANSLATIONS_SECTION2_BOOKS } from '../../data/Translations';
import { CardSkill } from './CardSkill';
import { CardBook } from './CardBook';

function Section2({ language }) {
  // Fallback seguro en caso de idioma no definido
  const tCourses = TRANSLATIONS_SECTION2[language] || TRANSLATIONS_SECTION2["es"];
  const tBooks = TRANSLATIONS_SECTION2_BOOKS[language] || TRANSLATIONS_SECTION2_BOOKS["es"];

  return (
    <section className="container-center py-32 section-anchor" id="section2">
      {/* 🔹 TÍTULO DE CURSOS */}
      <h1 className="h2 mb-4">{tCourses.titleCourse}</h1>
      <p className="text-section mb-6">{tCourses.titleCourseDescription}</p>

      {/* 🔹 TARJETAS DE HABILIDADES */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        <CardSkill language={language} />
      </div>

      {/* 🔹 TÍTULO DE LIBROS */}
      <h1 className="h2 mt-16 mb-4">{tBooks.titleBooks}</h1>

      {/* 🔹 TARJETAS DE LIBROS */}
      <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
        <CardBook language={language} />
      </div>
    </section>
  );
}

Section2.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Section2;
