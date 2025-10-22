import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardProject from './CardProject';
import { TRANSLATION_SECTION3 } from '../../data/Translations';
import { PROJECT_INFO } from '../../data/Projects';

function Section3({ language }) {
    const [page, setPage] = useState(0); // 0 = primera página, 1 = segunda

    const totalPages = Math.ceil(PROJECT_INFO.length / 3);

    const handleScroll = (direction) => {
        if (direction === 'left') {
            setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
        } else {
            setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
        }
    };

    // Proyectos a mostrar en la página actual
    const projectsToShow = PROJECT_INFO.slice(page * 3, page * 3 + 3);

    return (
        <section
            id="section3"
            className="container-center py-32 section-anchor scroll-mt-16 sm:scroll-mt-24"
        >
            <h1 className="h2 mb-4">{TRANSLATION_SECTION3[language].titleProject}</h1>
            <p className="text-section mb-8">
                {TRANSLATION_SECTION3[language].titleProjectDescription}
            </p>

            <div
                className="relative w-full max-w-7xl p-8 rounded-2xl shadow-lg"
                style={{ backgroundColor: 'var(--color-card-bg-section3)' }}
            >
                {/* Botón izquierda */}
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-cyan-500 transition z-10"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Tarjetas de la página actual */}
                <CardProject language={language} projects={projectsToShow} />

                {/* Botón derecha */}
                <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-cyan-500 transition z-10"
                >
                    <ChevronRight size={32}/>
                </button>
            </div>
        </section>
    );
}

Section3.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Section3;
