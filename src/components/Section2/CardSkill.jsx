import PropTypes from 'prop-types';
import { COURSES_INFO } from '../../data/Courses';
import { Laptop, Boxes, Database, Cloud, Wrench } from 'lucide-react';

export function CardSkill({ language }) {

    // ✅ Traducciones de categorías y "Estudiando ahora" multilenguaje
    const CATEGORY_TRANSLATIONS = {
        es: {
            "Lenguajes": "Lenguajes",
            "Frameworks y Librerías": "Frameworks y Librerías",
            "Bases de Datos": "Bases de Datos",
            "Cloud & DevOps": "Cloud & DevOps",
            "Otros": "Otros",
            studying: "Estudiando ahora"
        },
        en: {
            "Lenguajes": "Languages",
            "Frameworks y Librerías": "Frameworks & Libraries",
            "Bases de Datos": "Databases",
            "Cloud & DevOps": "Cloud & DevOps",
            "Otros": "Others",
            studying: "Currently Studying"
        },
        ca: {
            "Lenguajes": "Llenguatges",
            "Frameworks y Librerías": "Frameworks i Llibreries",
            "Bases de Datos": "Bases de Dades",
            "Cloud & DevOps": "Cloud & DevOps",
            "Otros": "Altres",
            studying: "Estudiant ara"
        }
    };

    const tCategory = CATEGORY_TRANSLATIONS[language] || CATEGORY_TRANSLATIONS["es"];

    const categoryIcons = {
        Lenguajes: <Laptop className="w-6 h-6 inline-block mr-2 text-indigo-500 dark:text-indigo-300" />,
        "Frameworks y Librerías": <Boxes className="w-6 h-6 inline-block mr-2 text-indigo-500 dark:text-indigo-300" />,
        "Bases de Datos": <Database className="w-6 h-6 inline-block mr-2 text-indigo-500 dark:text-indigo-300" />,
        "Cloud & DevOps": <Cloud className="w-6 h-6 inline-block mr-2 text-indigo-500 dark:text-indigo-300" />,
        Otros: <Wrench className="w-6 h-6 inline-block mr-2 text-indigo-500 dark:text-indigo-300" />,
    };

    const categories = COURSES_INFO.reduce((acc, course) => {
        if (!acc[course.category]) acc[course.category] = [];
        acc[course.category].push(course);
        return acc;
    }, {});

    return (
        <div id="skills-section" className="py-12 w-full rounded-2xl">
            {Object.keys(categories).map((category) => (
                <div key={category} className="mb-12">

                    <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-300 flex items-center justify-center gap-2">
                        {categoryIcons[category]} {tCategory[category]}
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 px-8 w-full">

                        {categories[category].map((course) => (
                            <div
                                key={course.id}
                                className={`skill-box p-6 dark:bg-indigo-950 bg-blue-300 rounded-lg text-white cursor-pointer group transition duration-300 relative 
                                    min-w-[200px] flex-1 max-w-[260px]`}
                            >
                                {course.isStudying && (
                                    <div className="absolute top-0 left-0 px-2 py-1 bg-cyan-500 text-black font-bold text-sm">
                                        {tCategory.studying}
                                    </div>
                                )}

                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                                    <h3 className="text-lg font-bold text-teal-500">{course.Title}</h3>
                                    <p className="text-md text-white">
                                        {course.Description?.[language] || course.Description?.["es"] || ""}
                                    </p>
                                </div>

                                <div className="flex justify-center items-center mb-4 relative">
                                    <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center overflow-hidden relative group-hover:opacity-25">
                                        <img
                                            src={course.Image}
                                            alt={course.Title}
                                            className="w-16 h-16 transition-opacity duration-300 group-hover:opacity-50"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    );
}

CardSkill.propTypes = {
    language: PropTypes.string.isRequired,
};

export default CardSkill;
