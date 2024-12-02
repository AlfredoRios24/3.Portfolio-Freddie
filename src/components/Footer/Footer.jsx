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
                <ul className="flex space-x-6 justify-center mb-4">
                    <li className="text-xl">{PROFILE_INFO[0].Phone}</li>
                    <li>
                        <button onClick={copyPhone} className="text-xl hover:text-cyan-300">
                            <ion-icon name="copy-outline"></ion-icon>
                        </button>
                    </li>
                    <li className="text-xl">{PROFILE_INFO[0].Email}</li>
                    <li>
                        <button onClick={copyEmail} className="text-xl hover:text-cyan-300">
                            <ion-icon name="copy-outline"></ion-icon>
                        </button>
                    </li>
                </ul>
                <button
                    onClick={handleScrollToTop}
                    className="text-3xl bg-cyan-300 text-white rounded-full shadow-lg p-3 hover:bg-cyan-500 fixed bottom-10 right-10"
                >
                    <ion-icon name="arrow-up-circle-outline"></ion-icon>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
