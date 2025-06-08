import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import SubFooter from "./SubFooter";

export default function Footer() {
  const location = useLocation();

  return (
    <>
    {}
  <footer className="bg-[#1f5b2c] text-white py-10 px-6 md:px-20">
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-between border-b border-white/30 pb-8 gap-6">
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-xl mt-1" />
          <div>
            <h3 className="font-bold uppercase text-sm">Location</h3>
            <p>331 Nsawam Rd, Achimota mile 7, Ghana</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-xl mt-1" />
          <div>
            <h3 className="font-bold uppercase text-sm">Email Us</h3>
            <p>info@moudlynegloballtd.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaPhone className="text-xl mt-1" />
          <div>
            <h3 className="font-bold uppercase text-sm">Phone</h3>
            <p>+233 54 595 2035 / +233 27 526 9788</p>
          </div>
        </div>

        <WhatsAppButton />
      </div>

      {/* Logo and Links */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <img src={Logo} alt="Moudlyne Global ltd" className="h-25 mb-2" />
          <p className="text-sm">
            Moudlyne Global ltd is a Ghana-based company specializing in the
            production and distribution of high quality orgnic fertilizer, Hefe
            MOA Organic Liquid Fertilizer,
            <br /> Hefe MOA UREA, Hefe MOA solid Fertilizer.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold mb-3">Pages</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <p className="hover:underline">Agriculture</p>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <p className="hover:underline">Publication</p>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <p className="hover:underline">Real Estate</p>
            <p className="hover:underline">
              Production and Distribution of drinking water
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3">Find us on Social Media</h4>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="bg-[#a5d84c] p-2 rounded-full text-green-900 hover:scale-105 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="bg-[#a5d84c] p-2 rounded-full text-green-900 hover:scale-105 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-sm text-center mt-10 border-t border-white/30 pt-4">
        <p>2025 © Moudlyne Global LTD</p>
        <p>Designed by DevX Solutions</p>
      </div>
      {/* Only show SubFooter if not on the contact page */}
    </footer>
    </>
    
    
  );
}
