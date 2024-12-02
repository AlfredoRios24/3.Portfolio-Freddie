import PropTypes from 'prop-types';
import { TRANSLATION_SECTION2 } from '../../data/Translations';
import { CardSkill } from './CardSkill';

function Section2({ language }) {
    return (
        <section className="px-4 sm:px-8 lg:px-16 py-32 flex flex-col items-center" id="section2">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    {TRANSLATION_SECTION2[language].titleCourse}
                </h1>
                <p className="text-lg sm:text-xl mb-6">{TRANSLATION_SECTION2[language].titleCourseDescription}</p>
                <CardSkill language={language} />
            </div>
        </section>
    );
}

Section2.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
};

export default Section2;
