import PropTypes from 'prop-types';
import { TRANSLATION_SECTION2 } from '../../data/Translations';
import { CardSkill } from './CardSkill';

function Section2({ language }) {
    return (
        <section className="container-center py-32 section-anchor" id="section2">
            <h1 className="h2 mb-4">{TRANSLATION_SECTION2[language].titleCourse}</h1>
            <p className="text-section mb-6">{TRANSLATION_SECTION2[language].titleCourseDescription}</p>

            <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
                <CardSkill language={language} />
            </div>
        </section>
    );
}

Section2.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Section2;
