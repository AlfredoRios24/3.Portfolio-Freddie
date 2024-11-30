import { PROFILE_INFO } from "../../data/Profile"
import { TRANSLATION_FOOTER } from "../../data/Translations"

// eslint-disable-next-line react/prop-types
const Footer = ({language}) => {

    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
    <footer>
        <span className="flex flex-col items-center p-20">
            <h2 className=" text-2xl mb-3 ml-5 font-bold">
                {TRANSLATION_FOOTER[language].titleContact}
            </h2>
            <ul className="flex space-x-10 ml-10  justify-center">
                <li className=" text-xl">
                    {PROFILE_INFO[0].Phone}
                </li>
                <li className=" text-xl">
                    {PROFILE_INFO[0].Email}
                </li>
                <button onClick={handleScrollToTop} className=" text-7xl fixed right-4 bottom-4 p-3 bg-cyan-300 dark:bg-indigo-700 rounded-full shadow-lg hover:bg-cyan-500 transition-colors duration-200">
                    <ion-icon name="arrow-up-circle-outline" className="" >volver arriba</ion-icon>
                </button>
            </ul>
        </span>
    </footer>
    )
    }

export default Footer
