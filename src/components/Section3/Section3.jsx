import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardProject from './CardProject';

import { TRANSLATIONS_SECTION3 } from '../../data/Translations';
import { PROJECT_INFO } from '../../data/Projects';

function Section3({ language }) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(PROJECT_INFO.length / 3);

  const handleScroll = (direction) => {
    setPage((prev) => {
      if (direction === 'left') return prev > 0 ? prev - 1 : totalPages - 1;
      return prev < totalPages - 1 ? prev + 1 : 0;
    });
  };

  const projectsToShow = PROJECT_INFO.slice(page * 3, page * 3 + 3);

  // ✅ Fallback seguro para idioma
  const tProjects = TRANSLATIONS_SECTION3[language] || TRANSLATIONS_SECTION3["es"];

  return (
    <section id="section3" className="container-center py-32 section-anchor">
      {/* Título y descripción */}
      <h1 className="h2 mb-4">{tProjects.titleProject}</h1>

      <div
        className="relative w-full max-w-7xl p-8 rounded-2xl shadow-lg"
        style={{ backgroundColor: 'var(--color-card-bg-section3)' }}
      >
        {/* Flecha Izquierda */}
        <button
          onClick={() => handleScroll('left')}
          className="pulse-arrow absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-cyan-500 transition z-10"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Tarjetas actuales */}
        <CardProject language={language} projects={projectsToShow} />

        {/* Flecha Derecha */}
        <button
          onClick={() => handleScroll('right')}
          className="pulse-arrow absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-cyan-500 transition z-10"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}

Section3.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Section3;
