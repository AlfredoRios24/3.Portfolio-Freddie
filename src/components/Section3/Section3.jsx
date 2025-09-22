import PropTypes from 'prop-types';
import CardProject from './CardProject';
import { TRANSLATION_SECTION3 } from '../../data/Translations';

function Section3({ language }) {
    return (
        <section
            id="section3"
            className="container-center py-32 section-anchor scroll-mt-16 sm:scroll-mt-24"
        >
            <h1 className="h2 mb-4">{TRANSLATION_SECTION3[language].titleProject}</h1>
            <p className="text-section mb-8">{TRANSLATION_SECTION3[language].titleProjectDescription}</p>

            <div className="w-full max-w-7xl p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "var(--color-card-bg-section3)" }}>
                <CardProject language={language}/>
            </div>
        </section>
    );
}

Section3.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Section3;
