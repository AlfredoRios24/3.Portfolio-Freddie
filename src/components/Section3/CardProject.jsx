import { PROJECT_INFO } from '../../data/Projects';

export function CardProject() {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {/* Card 1 */}
                <div id="card" className="w-full h-full min-h-[500px] flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500">
                    <figure className="bg-teal-500 text-white">
                        <img src={PROJECT_INFO[0].Image} alt={`Imagen del proyecto ${PROJECT_INFO[0].id}`} className="w-full h-40 object-cover" />
                    </figure>
                    <div className="p-4 text-center flex flex-col flex-grow">
                        <h3 className="mb-4 text-gray-600">{PROJECT_INFO[0].Title[PROJECT_INFO[0].language]}</h3>
                        <p className="text-gray-700 text-sm mb-1 flex-grow">
                            {PROJECT_INFO[0].Description[PROJECT_INFO[0].language]}
                        </p>
                        <div className="mt-4">
                            <a href="#" className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300">
                                <ion-icon name="logo-github"></ion-icon> CODE
                            </a>
                            <a href="#" className="inline-block p-2 ml-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300">
                                <ion-icon name="logo-vercel"></ion-icon> VIEW
                            </a>
                        </div>
                        <ul className="mt-6">
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[0].Tools1} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[0].Tools2} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[0].Tools3} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[0].Tools4} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[0].Tools5} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[0].Tools6} />
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div id="card" className="w-full h-full min-h-[500px] flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500">
                    <figure className="bg-teal-500 text-white">
                        <img src={PROJECT_INFO[1].Image} alt={`Imagen del proyecto ${PROJECT_INFO[1].id}`} className="w-full h-40 object-cover" />
                    </figure>
                    <div className="p-4 text-center flex flex-col flex-grow">
                        <h3 className="mb-4 text-gray-600">{PROJECT_INFO[1].Title[PROJECT_INFO[1].language]}</h3>
                        <p className="text-gray-700 text-sm mb-1 flex-grow">
                            {PROJECT_INFO[1].Description[PROJECT_INFO[1].language]}
                        </p>
                        <div className="mt-4">
                            <a href="#" target='_blank' className="inline-block p-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300">
                                <ion-icon name="logo-github"></ion-icon> CODE
                            </a>
                            <a href="#" target='_blank' className="inline-block p-2 ml-2 text-teal-500 bg-gray-700 rounded mb-2 no-underline hover:text-cyan-300">
                                <ion-icon name="logo-vercel"></ion-icon> VIEW
                            </a>
                        </div>
                        <ul className="mt-6">
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[1].Tools1} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[1].Tools2} />
                            <img className="inline-block p-2 m-1 bg-gray-700 rounded mb-1 size-12" src={PROJECT_INFO[1].Tools3} />
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}
                <div id="card" className="w-full h-full min-h-[500px] flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500">
                    <figure className="bg-teal-500 text-white">
                        <img src={PROJECT_INFO[2].Image} alt={`Imagen del proyecto ${PROJECT_INFO[2].id}`} className="w-full h-40 object-cover" />
                    </figure>
                    <div className="p-4 text-center flex flex-col flex-grow">
                        <h3 className="mb-4 text-gray-600">{PROJECT_INFO[2].Title[PROJECT_INFO[2].language]}</h3>
                        <p className="text-gray-700 text-sm mb-1 flex-grow">
                            {PROJECT_INFO[2].Description[PROJECT_INFO[2].language]}
                        </p>
                        <div className="mt-4">

                        </div>
                        <ul className="mt-6">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProject;
