import PropTypes from 'prop-types';
import CardProject from './CardProject';
import { TRANSLATION_SECTION3 } from '../../data/Translations';

function Section3({ language }) {
    return (
        <section id="section3" className="px-4 sm:px-8 lg:px-16 py-32">
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    {TRANSLATION_SECTION3[language].titleProject}
                </h1>
                <p className="text-lg sm:text-xl mb-8">
                    {TRANSLATION_SECTION3[language].titleProjectDescription}
                </p>
            </div>

            <div className="mx-auto p-8 rounded-2xl bg-white dark:bg-indigo-950 max-w-7xl">
                <CardProject />
            </div>
        </section>
    );
}

Section3.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
};

export default Section3;
