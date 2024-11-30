import PropTypes from 'prop-types';
import { PROFILE_INFO } from '../../data/Profile';
import { TRANSLATIONS_SECTION1 } from '../../data/Translations';
import { useState } from 'react';

function Section1({ language }) {
    // Como obtener el contenido desde PROFILE_INFO
    const { TitleJob, DescriptionJob, TitleExperience, Experiencie, MoreInfo } = PROFILE_INFO[0];

    const [isVisible, setIsVisible] = useState(false);

    const handleClickSection1 = ()=>{
        setIsVisible(!isVisible)
    }

    return (
        <section className="px-60 md:flex md:items-center" id="section1">
            <div className="text-center items-center flex flex-col justify-center max-w-6xl p-32">
                <h1 className="text-center mt-1 text-6xl py-1 font-bold text-wrap snap-start text-cyan-400">
                    Alfredo Ríos
                </h1>
                <div className="p-10 flex justify-center items-center">
                    <img
                        src={PROFILE_INFO[0].Image}
                        alt="perfil"
                        className="w-72 h-72 max-w-xs rounded-full border-8 border-double border-indigo-500"
                    />
                </div>
                <div className="max-w-4xl -m-10">
                <h1 className="text-4xl font-bold mt-16 p-10">{TitleJob}</h1>
                <p className="text-xl">{DescriptionJob[language]}</p>
                
                    <a href="https://www.linkedin.com/in/alfredo-rios-010860101/" className="linksection1">
                        <ion-icon name="logo-linkedin" className=""></ion-icon>Linkedin
                    </a>
                    <a href="https://github.com/AlfredoRios24" className="linksection1">
                        <ion-icon name="logo-github" className=""></ion-icon> AlfredoRios24
                    </a>
                    <a href="https://vercel.com/alfredorios24s-projects" className="linksection1">
                        <ion-icon name="logo-vercel"></ion-icon> Vercel
                    </a>
                    <a href="">
                        <p className="font-semibold text-xl">
                            {TRANSLATIONS_SECTION1[language].textDownload}
                        </p>
                    </a>
                    <a href="">
                        <button className="btnsection1">
                            <a href="../../public/download/CV-Alfredo Ríos.pdf" download="CV-Alfredo Ríos.pdf">
                                {TRANSLATIONS_SECTION1[language].textDownloadButton}
                                <ion-icon name="download-outline"></ion-icon>
                            </a>
                        </button>
                    </a>
                    <div>
                        <button className="btnsection1" onClick={handleClickSection1}>{TitleExperience[language]} </button>
                    </div>
                </div>

                {isVisible && (
                    <div className=''>
                        <p className="text-xl">{MoreInfo[language]}</p>
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <p className="text-xl">{Experiencie[language]}</p>
                    </div>
                )}
                
            </div>
        </section>
    );
}

// Validación de las props
Section1.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
};

export default Section1;
