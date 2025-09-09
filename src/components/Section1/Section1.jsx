import PropTypes from 'prop-types';
import { useState } from 'react';
import { PROFILE_INFO } from '../../data/Profile';
import { TRANSLATIONS_SECTION1 } from '../../data/Translations';

function Section1({ language }) {
    const { TitleJob, DescriptionJob, TitleExperience, Experiencie, MoreInfo } = PROFILE_INFO[0];
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="px-4 sm:px-8 lg:px-20 py-32 flex flex-col items-center" id="section1">
            <div className="text-center flex flex-col justify-center items-center max-w-4xl px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl py-1 font-bold text-cyan-400">
                    Alfredo Ríos
                </h1>
                <div className="p-6 flex justify-center items-center">
                    <img
                        src={PROFILE_INFO[0].Image}
                        alt="perfil"
                        className="w-36 h-36 sm:w-48 sm:h-48 max-w-xs rounded-full border-8 border-double border-indigo-500"
                    />
                </div>
                <div className="w-full text-center mt-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mt-6">{TitleJob}</h2>
                    <p className="text-lg sm:text-xl mt-4">{DescriptionJob[language]}</p>

                    <button
                        className="bg-indigo-600 text-white py-2 px-6 rounded-md mt-8 hover:bg-cyan-500"
                        onClick={handleClickSection1}>
                        {TitleExperience[language]}
                        <hr className='w-4 mx-auto my-1 bg-gray-200 border-0 rounded dark:bg-gray-700'/>
                        <ion-icon name={isVisible ? 'chevron-up-outline' : 'chevron-down-outline'}></ion-icon>
                    </button>
                        {isVisible && (
                        <div className="mt-8">
                            <p className="text-lg sm:text-xl mt-4">{MoreInfo[language]}</p>
                            <hr className="w-48 mx-auto my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                            <p className="text-lg sm:text-xl mt-4">{Experiencie[language]}</p>
                        </div>
                        )}

                    <div className="mt-6 space-y-4">
                        <a href="https://www.linkedin.com/in/alfredo-rios-010860101/" target='_blank' className="linksection1">
                            <ion-icon name="logo-linkedin" className="mr-2"></ion-icon>Linkedin
                        </a>
                        <a href="https://github.com/AlfredoRios24" target='_blank'  className="linksection1">
                            <ion-icon name="logo-github" className="mr-2"></ion-icon> AlfredoRios24
                        </a>
                        <a href="https://vercel.com/alfredorios24s-projects" target='_blank' className="linksection1">
                            <ion-icon name="logo-vercel" className="mr-2"></ion-icon> Vercel
                        </a>
                        <a href="">
                            <p className="font-semibold text-xl">
                                {TRANSLATIONS_SECTION1[language].textDownload}
                            </p>
                        </a>
                        <button className="bg-indigo-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-md mt-4">
                            <a href="/download/CV-Alfredo-Rios.pdf" download="CV-Alfredo-Rios.pdf">
                                {TRANSLATIONS_SECTION1[language].textDownloadButton}
                                <ion-icon name="download-outline"></ion-icon>
                            </a>
                        </button>
                    </div>

                </div>


            </div>
        </section>
    );
}

Section1.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
};

export default Section1;
