import React from "react";

const ContactButton = () => {
  return (
    <button className="relative overflow-hidden bg-[#1f5b2c] cursor-pointer text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 group transition-all duration-300 h-10 ml-2 align-middle">
      {/* Slide overlay */}
      <span className="absolute inset-0 w-full h-full bg-green-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
      <span className="relative z-10 flex items-center gap-2">
        Contact Us
        <svg
          className="w-5 h-5 transform transition-transform duration-300 ease-in-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default ContactButton;
