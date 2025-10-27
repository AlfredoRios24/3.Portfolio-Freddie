import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string; // Ej: "34123456789"
  message?: string; // Mensaje inicial opcional
  tooltip?: string; // Texto que aparece al pasar el mouse
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  message,
  tooltip = "¡Escríbeme por WhatsApp!",
}) => {
  const encodedMessage = encodeURIComponent(
    message || "¡Hola! Vi tu portafolio y me gustaría hablar contigo."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="bottom-6 right-5 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 animate-pulse-soft"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-3 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
};

export default FloatingWhatsAppButton;
