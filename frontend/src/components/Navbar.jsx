// import React, { useState, useEffect } from "react";
// import ContactButton from "./ContactButton";
// import Logo from "../assets/Logo.png";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location.pathname]);

//   return (
//     <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50 p-2.5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <span className="font-bold text-xl text-blue-600">
//               <Link to="/">
//                 <img
//                   src={Logo}
//                   alt="Moudlyne Global ltd"
//                   className="size-40 mb-2.5 mt-2.5"
//                 />
//               </Link>
//             </span>
//           </div>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-20">
//             <Link
//               to="/"
//               className={`text-gray-700 font-medium transition-colors hover:text-green-700 ${
//                 location.pathname === "/"
//                   ? "text-green-700 font-bold underline underline-offset-8"
//                   : ""
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={`text-gray-700 font-medium transition-colors hover:text-green-700 ${
//                 location.pathname === "/about"
//                   ? "text-green-700 font-bold underline underline-offset-8"
//                   : ""
//               }`}
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className={`text-gray-700 font-medium transition-colors hover:text-green-700 ${
//                 location.pathname === "/services"
//                   ? "text-green-700 font-bold underline underline-offset-8"
//                   : ""
//               }`}
//             >
//               Services
//             </Link>
//             <Link to="/contact">
//               <ContactButton />
//             </Link>
//           </div>
//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setOpen(!open)}
//               className="text-gray-700 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-lg justify-center align-middle">
//           <Link
//             to="/"
//             className={`block px-4 py-2 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700 ${
//               location.pathname === "/"
//                 ? "text-green-700 font-bold underline underline-offset-8"
//                 : ""
//             }`}
//             onClick={() => setOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`block px-4 py-2 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700 ${
//               location.pathname === "/about"
//                 ? "text-green-700 font-bold underline underline-offset-8"
//                 : ""
//             }`}
//             onClick={() => setOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className={`block px-4 py-2 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700 ${
//               location.pathname === "/services"
//                 ? "text-green-700 font-bold underline underline-offset-8"
//                 : ""
//             }`}
//             onClick={() => setOpen(false)}
//           >
//             Services
//           </Link>
//           <div className="px-4 py-2">
//             <ContactButton />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import ContactButton from "./ContactButton";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false); // Close menu on route change
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50 p-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl text-blue-600">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Moudlyne Global ltd"
                  className="size-40 mb-2.5 mt-2.5"
                />
              </Link>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-20">
            {["/", "/about", "/services"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`text-gray-700 font-medium transition-colors hover:text-green-700 ${
                  location.pathname === path
                    ? "text-green-700 font-bold underline underline-offset-8"
                    : ""
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <Link to="/contact">
              <ContactButton />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="text-gray-700 focus:outline-none"
            >
              {open ? (
                // X icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            {["/", "/about", "/services"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700 ${
                  location.pathname === path
                    ? "text-green-700 font-bold underline underline-offset-8"
                    : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <div className="px-4 py-2">
              <ContactButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;




