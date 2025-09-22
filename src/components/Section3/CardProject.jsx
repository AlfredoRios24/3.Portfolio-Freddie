import PropTypes from 'prop-types';
import { PROJECT_INFO } from '../../data/Projects';

export function CardProject({ language }) {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {PROJECT_INFO.map((project) => (
                    <div
                        key={project.id}
                        id="card"
                        className="w-full h-full min-h-[500px] flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500"
                    >
                        <figure className="bg-teal-500 text-white">
                            <img
                                src={project.Image}
                                alt={`Imagen del proyecto ${project.id}`}
                                className="w-full h-40 object-cover"
                            />
                        </figure>
                        <div className="p-4 text-center flex flex-col flex-grow">
                            <h3 className="mb-4 text-gray-600">
                                {project.Title[language]}
                            </h3>
                            <p className="text-gray-700 text-sm mb-1 flex-grow">
                                {project.Description[language]}
                            </p>

                            {/* Links dinámicos si existen */}
                            <div className="mt-4 space-x-2">
                                {project.codeWeb && (
                                    <a
                                        href={project.codeWeb}
                                        target="_blank"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-github"></ion-icon> CODE WEB
                                    </a>
                                )}
                                {project.codeServer && (
                                    <a
                                        href={project.codeServer}
                                        target="_blank"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-github"></ion-icon> CODE SERVER
                                    </a>
                                )}
                                {project.view && (
                                    <a
                                        href={project.view}
                                        target="_blank"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-vercel"></ion-icon> VIEW
                                    </a>
                                )}
                            </div>

                            {/* Herramientas */}
                            <ul className="mt-6">
                                {Object.keys(project)
                                    .filter((key) => key.startsWith('Tools'))
                                    .map((toolKey) => (
                                        <img
                                            key={toolKey}
                                            className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12"
                                            src={project[toolKey]}
                                        />
                                    ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

CardProject.propTypes = {
    language: PropTypes.string.isRequired,
};

export default CardProject;
