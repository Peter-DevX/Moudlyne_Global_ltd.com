import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({
  phone = "233545952035",
  label = "WhatsApp",
  className = "",
}) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      className={`bg-[#a5d84c] flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 rounded-full text-green-900 font-semibold hover:opacity-90 text-sm sm:text-base md:text-lg transition-all duration-200 w-full max-w-xs justify-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-base sm:text-lg md:text-xl" /> {label}
    </a>
  );
}
