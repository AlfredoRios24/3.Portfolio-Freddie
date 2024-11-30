import PropTypes from 'prop-types';
import { TRANSLATION_SECTION2 } from '../../data/Translations';
import { CardSkill } from './CardSkill';

function Section2({ language }) {

    return (
        <section className="p-36 md:flex md:items-center md:justify-between" id="section2">
            <div className="container py-2 mx-auto">
                <div className="flex flex-wrap justify-center items-center mx-auto">
                    <div className="w-full">
                        <h1 className="text-center mt-1 text-4xl py-1 font-bold text-wrap snap-start">
                            {TRANSLATION_SECTION2[language].titleCourse}
                        </h1>
                        <p className="mb-1 text-center py-4 text-xl">
                            {TRANSLATION_SECTION2[language].titleCourseDescription}
                        </p>
                        <CardSkill language={language} />
                    </div>
                </div>
            </div>
        </section>
    );
}

Section2.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
};

export default Section2;
