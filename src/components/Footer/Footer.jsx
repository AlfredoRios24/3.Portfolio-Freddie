import { PROFILE_INFO } from "../../data/Profile";
import { TRANSLATION_FOOTER } from "../../data/Translations";

const Footer = ({ language }) => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const copyEmail = () => {
        const aux = document.createElement("input");
        aux.setAttribute("value", PROFILE_INFO[0].Email);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        alert("Se copió al portapapeles");
    };

    const copyPhone = () => {
        const aux = document.createElement("input");
        aux.setAttribute("value", PROFILE_INFO[0].Phone);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        alert("Se copió al portapapeles");
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="flex flex-col items-center p-10">
                <h2 className="text-2xl font-bold mb-4">{TRANSLATION_FOOTER[language].titleContact}</h2>
                
                {/* Información en columna con margen adecuado */}
                <ul className="flex flex-col mb-4 space-y-4 w-96 items-center">
                    <li className="flex items-center text-xl">
                        <span>{PROFILE_INFO[0].Phone}</span>
                        <button onClick={copyPhone} className="ml-4 text-xl hover:text-cyan-300">
                            <ion-icon name="copy-outline"></ion-icon>
                        </button>
                    </li>

                    <li className="flex items-center text-xl">
                        <span>{PROFILE_INFO[0].Email}</span>
                        <button onClick={copyEmail} className="ml-4 text-xl hover:text-cyan-300">
                            <ion-icon name="copy-outline"></ion-icon>
                        </button>
                    </li>
                </ul>
                
                {/* Botón para volver arriba */}
                <button
                    onClick={handleScrollToTop}
                    className="text-4xl bg-indigo-500 text-white rounded-full shadow-lg p-3 hover:bg-cyan-500 fixed bottom-40 right-10"
                >
                    <ion-icon name="arrow-up-circle-outline"></ion-icon>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
