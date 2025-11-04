import PropTypes from "prop-types";
import { PROFILE_INFO } from "../../data/Profile";
import { TRANSLATIONS_FOOTER } from "../../data/Translations";
import FloatingWhatsAppButton from "./FloatinfWhatsAppButton";

const Footer = ({ language }) => {

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // ✅ Fallback seguro para idioma
  const tFooter = TRANSLATIONS_FOOTER[language] || TRANSLATIONS_FOOTER["es"];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(tFooter.copiedMessage);
  };

  return (
    <footer
      className="w-full py-5"
      style={{ backgroundColor: "var(--color-footer-bg)", color: "var(--color-text)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        {/* Título multilenguaje */}
        <h2 className="h2 mb-4">{tFooter.titleContact}</h2>

        <ul className="flex flex-col sm:flex-row justify-center gap-6 mb-8 font-bold text-center">

          {/* Teléfono */}
          <li className="flex items-center text-lg sm:text-xl md:text-2xl break-words">
            <button className="mr-3">
              <FloatingWhatsAppButton
                phoneNumber={PROFILE_INFO.Phone || ""}
                message={tFooter.defaultMessage}
                tooltip={tFooter.tooltipMessage}
              />
            </button>

            <span>{PROFILE_INFO.Phone2 || ""}</span>

            <button
              onClick={() => copyToClipboard(PROFILE_INFO.Phone || "")}
              className="ml-3 linkfootersection text-xl"
            >
              <ion-icon name="copy-outline"></ion-icon>
            </button>
          </li>

          {/* Email */}
          <li className="flex items-center text-lg sm:text-xl md:text-2xl break-words">
            <span>{PROFILE_INFO.Email || ""}</span>

            <button
              onClick={() => copyToClipboard(PROFILE_INFO.Email || "")}
              className="ml-3 linkfootersection text-xl"
            >
              <ion-icon name="copy-outline"></ion-icon>
            </button>
          </li>
        </ul>
      </div>

      {/* Botón subir al inicio */}
      <button onClick={handleScrollToTop} className="footer-btn-scroll">
        <ion-icon name="arrow-up-circle-outline" style={{ color: "#fff" }}></ion-icon>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;
