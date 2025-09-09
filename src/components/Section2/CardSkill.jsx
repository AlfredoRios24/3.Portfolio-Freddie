import PropTypes from 'prop-types';
import { COURSES_INFO } from '../../data/Courses';

export function CardSkill({ language }) {
    return (
        <div id="skills-section" className="py-12 w-full rounded-2xl ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center text-center px-8">

                {COURSES_INFO.map(course => (
                    <div 
                        key={course.id}
                        className={`skill-box p-6 dark:bg-indigo-950 bg-blue-300 rounded-lg text-white cursor-pointer group transition duration-300 relative ${
                            course.isStudying ? 'ring-4 ring-cyan-500' : ''
                        }`}
                    >
                        
                        {course.isStudying && (
                            <div className="absolute top-0 left-0 px-2 py-1 bg-cyan-500 text-black font-bold text-sm">
                                {language === 'es' ? 'Estudiando ahora' : 'Currently Studying'}
                            </div>
                        )}

                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                            <h3 className="text-lg font-bold text-teal-500 ">{course.Title}</h3>
                            <p className="text-md text-white">
                                {course.Description[language] || course.Description['es']}
                            </p>
                        </div>
                        
                        <div className="flex justify-center items-center mb-4 relative">
                            <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center overflow-hidden relative group-hover:opacity-25">
                                <img src={course.Image} alt={course.Title} className="w-16 h-16 transition-opacity duration-300 group-hover:opacity-50" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

CardSkill.propTypes = {
    language: PropTypes.string.isRequired,
};

export default CardSkill;
