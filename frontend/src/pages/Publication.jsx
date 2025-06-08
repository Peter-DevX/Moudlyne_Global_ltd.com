import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
  FaGlobeAfrica,
} from "react-icons/fa";
import BookPublication from "../components/BookPublication";
import publicationImg from "../assets/Publication.jpg";

const Publication = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-blue-50 min-h-screen pt-24 pb-16 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
            MOA Publishers: Shaping Minds, Inspiring Futures
          </h1>
          <p className="text-lg md:text-xl text-yellow-900 mb-6">
            Moudlyne Global Ltd, through MOA Publishers, is dedicated to
            delivering high-quality academic books and journals, with a special
            focus on Mathematics and English textbooks for basic education in
            Ghana. Our commitment to excellence, innovation, and accessibility
            ensures that every learner and educator has the resources they need
            to succeed.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <FaBookOpen className="text-blue-700 text-2xl mt-1" />
              <span className="text-blue-900 font-semibold">
                Comprehensive textbooks for Mathematics and English, tailored to
                Ghana’s curriculum
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaChalkboardTeacher className="text-yellow-700 text-2xl mt-1" />
              <span className="text-yellow-900 font-semibold">
                Supporting teachers and students with clear, engaging content
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaAward className="text-yellow-700 text-2xl mt-1" />
              <span className="text-yellow-900 font-semibold">
                World-class editorial standards and quality assurance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaGlobeAfrica className="text-blue-700 text-2xl mt-1" />
              <span className="text-blue-900 font-semibold">
                Expanding access to knowledge across Ghana and West Africa
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
          <BookPublication
            image={publicationImg}
            className="w-full h-full object-cover"
            title="PUBLICATION"
          />
        </motion.div>
      </section>

      {/* Our Publications Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center"
        >
          Our Core Publications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-yellow-400"
          >
            <img
              src={publicationImg}
              alt="Maths Textbook"
              className="w-28 h-28 object-cover rounded-xl mb-4 border-4 border-yellow-100"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Mathematics Textbooks
            </h3>
            <p className="text-gray-700 text-center text-base">
              Our Maths textbooks are designed to build strong foundational
              skills, encourage problem-solving, and align with the Ghana
              Ministry of Education syllabus from KG to JHS.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-blue-400"
          >
            <img
              src={publicationImg}
              alt="English Textbook"
              className="w-28 h-28 object-cover rounded-xl mb-4 border-4 border-blue-100"
            />
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              English Textbooks
            </h3>
            <p className="text-gray-700 text-center text-base">
              Our English textbooks foster literacy, comprehension, and
              communication skills, supporting students at every stage of their
              basic education journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-0 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-blue-700 mb-4"
        >
          Our Commitment to Quality & Access
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-yellow-900 text-lg md:text-xl mb-6"
        >
          At MOA Publishers, we believe every child deserves access to
          world-class educational resources. Our books are reviewed by top
          educators, meet national standards, and are available at affordable
          prices for schools and families across Ghana.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <div className="bg-yellow-100 rounded-xl p-6 shadow-md w-full md:w-1/2">
            <h4 className="text-blue-900 font-bold text-lg mb-2">
              Editorial Excellence
            </h4>
            <p className="text-yellow-900 text-base">
              Our editorial team ensures every publication is accurate,
              engaging, and aligned with the latest curriculum requirements.
            </p>
          </div>
          <div className="bg-blue-100 rounded-xl p-6 shadow-md w-full md:w-1/2">
            <h4 className="text-yellow-900 font-bold text-lg mb-2">
              Accessible for All
            </h4>
            <p className="text-blue-900 text-base">
              We are committed to making our books and journals accessible to
              every learner, regardless of background or location.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Publication;
