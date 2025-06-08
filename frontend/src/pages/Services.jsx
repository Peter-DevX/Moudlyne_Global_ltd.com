import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaBookOpen,
  FaHome,
  FaTint,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import landingPage1 from "../assets/landingPage1.png";
import publicationImg from "../assets/Publication.jpg";
import offeibeaKromImg from "../assets/offeibea_krom.jpg";
import moaWaterImg from "../assets/moa_water.png";

const services = [
  {
    title: "Agriculture",
    icon: <FaLeaf className="text-green-700 text-4xl mb-4" />,
    image: landingPage1,
    description:
      "We produce and distribute high-quality organic fertilizers, empowering farmers with sustainable solutions for healthy crops and improved yields.",
    color: "from-green-100 to-green-50",
  },
  {
    title: "Publication",
    icon: <FaBookOpen className="text-blue-700 text-4xl mb-4" />,
    image: publicationImg,
    description:
      "MOA Publishers delivers high-quality academic books and journals, with a special focus on Mathematics and English textbooks for basic education in Ghana.",
    color: "from-blue-100 to-blue-50",
  },
  {
    title: "Real Estate",
    icon: <FaHome className="text-yellow-800 text-4xl mb-4" />,
    image: offeibeaKromImg,
    description:
      "We develop, manage, and sell modern properties, creating sustainable communities and investment opportunities for the future.",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    title: "Drinking Water",
    icon: <FaTint className="text-cyan-700 text-4xl mb-4" />,
    image: moaWaterImg,
    description:
      "Our bottled water is pure, affordable, and available in various packaging, ensuring safe hydration for families and businesses.",
    color: "from-cyan-100 to-cyan-50",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-blue-50 min-h-screen font-sans mt-20">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4"
        >
          Our Core Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-8"
        >
          Moudlyne Global Ltd is committed to innovation, sustainability, and
          excellence across agriculture, publishing, real estate, and drinking
          water. Discover how we’re shaping a better future for Ghana and
          beyond.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`rounded-3xl shadow-xl bg-gradient-to-br ${service.color} p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 group`}
          >
            {service.icon}
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 object-cover rounded-xl mb-4 border-4 border-white shadow-md group-hover:border-green-400 transition-all duration-300"
            />
            <h3 className="text-xl font-bold text-green-900 mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm text-center mb-4">
              {service.description}
            </p>
            <Link
              to={
                i === 0
                  ? "/agriculture"
                  : i === 1
                  ? "/publication"
                  : i === 2
                  ? "/real_estate"
                  : i === 3
                  ? "/drinking_water"
                  : null
              }
            >
              <button className="mt-auto bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-200">
                Learn More
              </button>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.img
            src={Logo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Why Choose Moudlyne Global?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We're not just a multi-sector company we’re a movement shaping the
              future through innovation and community driven values. From soil
              to schoolbooks, and homes to hydration, we deliver value at every
              touchpoint.
            </p>

            {/* Key Points */}
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 text-xl mt-1" />
                <span>
                  Empowering sustainable agriculture with organic and Urea
                  fertilizers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 text-xl mt-1" />
                <span>
                  Publication of English and Maths text books for basic
                  education.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 text-xl mt-1" />
                <span>
                  Developing real estate to provide quality, affordable housing.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 text-xl mt-1" />
                <span>
                  Providing safe, affordable drinking water for communities and
                  businesses.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <Link to="/contact">
              <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Contact Us Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
