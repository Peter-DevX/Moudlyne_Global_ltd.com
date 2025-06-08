import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaTree, FaGlobeAfrica, FaHandsHelping } from "react-icons/fa";
import realEstateImg from "../assets/offeibea_krom.jpg";
import Logo from "../assets/Logo.png";

const RealEstate = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-green-100 min-h-screen pt-24 pb-16 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight">
            Offeibea Krom: Modern Living, Rich Heritage
          </h1>
          <p className="text-lg md:text-xl text-green-800 mb-6">
            At Moudlyne Global Ltd, we believe in building more than just houses
            we create communities that honor Ghana’s vibrant history and culture
            while embracing the future. Our flagship project,{" "}
            <span className="font-bold text-green-900">Offeibea Krom</span>, is
            a visionary city blending modern architecture with the warmth and
            tradition of Ghanaian life.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <FaHome className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Contemporary homes designed for comfort, sustainability, and
                community
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaTree className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Preserving green spaces and promoting eco-friendly living
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaGlobeAfrica className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Boosting tourism, job creation, and local prosperity
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHandsHelping className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                A vision led by service, compassion, and community spirit
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={realEstateImg}
            alt="Offeibea Krom"
            className="w-full h-[350px] md:h-[500px] object-cover rounded-3xl shadow-xl border-4 border-green-600"
          />
        </motion.div>
      </section>

      {/* About Offeibea Krom Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center"
        >
          About Offeibea Krom
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-green-800 text-lg md:text-xl mb-6 max-w-3xl mx-auto text-center"
        >
          Offeibea Krom is more than a housing project it’s a movement to
          redefine urban living in Ghana. We blend modern amenities with the
          timeless values of hospitality, family, and respect for nature. Our
          goal is to create a city that inspires pride, fosters opportunity, and
          preserves the unique beauty of Ghanaian culture for generations to
          come.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-green-400"
          >
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Modern Yet Rooted
            </h3>
            <p className="text-gray-700 text-center text-base">
              Our homes feature contemporary designs, energy-efficient systems,
              and smart layouts while every street and park reflects the spirit
              and traditions of Ghana.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-yellow-400"
          >
            <h3 className="text-xl font-bold text-green-800 mb-2">
              A City for All
            </h3>
            <p className="text-gray-700 text-center text-base">
              Offeibea Krom is designed to welcome families, professionals, and
              visitors alike, with diverse housing options, recreational spaces,
              and vibrant local businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-0 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-green-900 mb-4"
        >
          Our Vision & Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-green-800 text-lg md:text-xl mb-6"
        >
          We believe that true leadership is rooted in service and compassion.
          Offeibea Krom is built on the principle that to lead is to serve, and
          to prosper is to uplift others. Our founder, Mrs. Moudlyne Offeibea
          Asirifi, is passionate about creating spaces that bring warmth,
          opportunity, and dignity to every resident.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-green-100 rounded-xl p-6 shadow-md w-full md:w-1/2">
            <h4 className="text-green-900 font-bold text-lg mb-2">
              Preserving Heritage
            </h4>
            <p className="text-green-800 text-base">
              We honor Ghana’s history and culture in every aspect of our
              development, from architecture to community events.
            </p>
          </div>
          <div className="bg-yellow-100 rounded-xl p-6 shadow-md w-full md:w-1/2">
            <h4 className="text-green-900 font-bold text-lg mb-2">
              Empowering Communities
            </h4>
            <p className="text-green-800 text-base">
              Our city is designed to create jobs, support local businesses, and
              improve the quality of life for all.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact Section (replaces CTA) */}
      <section className="max-w-3xl mx-auto px-4 md:px-0 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-green-900 mb-4"
        >
          Building a Lasting Legacy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-green-800 text-lg md:text-xl mb-6"
        >
          Offeibea Krom is more than a place to live it's a catalyst for
          positive change. Our development is designed to uplift communities,
          create jobs, and inspire future generations. We are committed to
          sustainability, inclusivity, and celebrating the unique culture of
          Ghana in every home and street we build.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          <div className="bg-green-50 rounded-xl p-6 shadow-md w-full md:w-1/2 hover:bg-green-100 transition-colors duration-300">
            <h4 className="text-green-900 font-bold text-lg mb-2">
              Economic Empowerment
            </h4>
            <p className="text-green-800 text-base">
              Our project supports local businesses, artisans, and service
              providers, helping to grow the local economy and provide
              meaningful employment.
            </p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6 shadow-md w-full md:w-1/2 hover:bg-yellow-100 transition-colors duration-300">
            <h4 className="text-green-900 font-bold text-lg mb-2">
              Cultural Celebration
            </h4>
            <p className="text-green-800 text-base">
              We host community events and festivals that honor Ghanaian
              traditions, bringing neighbors together and fostering a sense of
              belonging.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
