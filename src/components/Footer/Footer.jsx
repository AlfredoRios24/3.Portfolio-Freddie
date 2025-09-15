import { PROFILE_INFO } from "../../data/Profile";
import { TRANSLATION_FOOTER } from "../../data/Translations";

const Footer = ({ language }) => {
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Se copió al portapapeles");
  };

  return (
    <footer
      className="w-full py-10"
      style={{ backgroundColor: "var(--color-footer-bg)", color: "var(--color-text)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        <h2 className="h2 mb-4">{TRANSLATION_FOOTER[language].titleContact}</h2>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 mb-8 font-bold text-center">
          <li className="flex items-center text-lg sm:text-xl md:text-2xl break-words">
            <span>{PROFILE_INFO[0].Phone}</span>
            <button
              onClick={() => copyToClipboard(PROFILE_INFO[0].Phone)}
              className="ml-3 linkfootersection text-xl"
            >
              <ion-icon name="copy-outline"></ion-icon>
            </button>
          </li>
          <li className="flex items-center text-lg sm:text-xl md:text-2xl break-words">
            <span>{PROFILE_INFO[0].Email}</span>
            <button
              onClick={() => copyToClipboard(PROFILE_INFO[0].Email)}
              className="ml-3 linkfootersection text-xl"
            >
              <ion-icon name="copy-outline"></ion-icon>
            </button>
          </li>
        </ul>
      </div>

      <button onClick={handleScrollToTop} className="footer-btn-scroll">
        <ion-icon name="arrow-up-circle-outline" style={{ color: "#fff" }}></ion-icon>
      </button>
    </footer>
  );
};

export default Footer;
