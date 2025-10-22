import PropTypes from 'prop-types';

export function CardProject({ language, projects }) {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project) => (
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

                            <div className="mt-4 space-x-2">
                                {project.codeWeb && (
                                    <a
                                        href={project.codeWeb}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-github"></ion-icon> CODE WEB
                                    </a>
                                )}
                                {project.codeRepository && (
                                    <a
                                        href={project.codeRepository}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-github"></ion-icon> CODE REPOSITORY
                                    </a>
                                )}
                                {project.codeServer && (
                                    <a
                                        href={project.codeServer}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-github"></ion-icon> CODE SERVER
                                    </a>
                                )}
                                {project.view && (
                                    <a
                                        href={project.view}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300"
                                    >
                                        <ion-icon name="logo-vercel"></ion-icon> VIEW
                                    </a>
                                )}
                            </div>

                            <div className="mt-6">
                                <div className="min-h-[160px] flex flex-col justify-start space-y-2">
                                    {(() => {
                                        const tools = Object.keys(project)
                                            .filter((key) => key.startsWith('Tools') && project[key])
                                            .map((key) => project[key]);

                                        const chunked = [];
                                        for (let i = 0; i < tools.length; i += 4) {
                                            chunked.push(tools.slice(i, i + 4));
                                        }

                                        return chunked.map((group, index) => (
                                            <div key={index} className="flex justify-center flex-wrap gap-2">
                                                {group.map((tool, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={tool}
                                                        className="p-2 bg-gray-700 rounded size-12"
                                                        alt={`Tool ${idx}`}
                                                    />
                                                ))}
                                            </div>
                                        ));
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

CardProject.propTypes = {
    language: PropTypes.string.isRequired,
    projects: PropTypes.array.isRequired,
};

export default CardProject;
