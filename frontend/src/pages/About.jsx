import React from "react";
import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-white via-green-50 to-white min-h-screen mt-20">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 px-4 md:px-16 py-16 bg-white rounded-b-3xl shadow-lg">
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://img.freepik.com/free-photo/happy-african-man-trimming-bushes-with-gas-powered-clipper_651396-1477.jpg?uid=R171707031&ga=GA1.1.775454794.1744728176&semt=ais_items_boosted&w=740"
          alt="Farmer"
          className="w-full h-[350px] md:h-[500px] object-cover rounded-3xl shadow-xl border-4 border-green-600"
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-start"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4 leading-tight">
            The Story Behind Moudlyne Global ltd
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2">
            Founded in 2024 with a strategy to combat the problems faced by
            farmers in Ghana, Moudlyne Global ltd has grown to be one of the
            primary agricultural inputs and services providers in Ghana.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 h-auto py-12 px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center rounded-3xl shadow-lg -mt-10 mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          <p className="text-4xl font-extrabold text-white">6+</p>
          <p className="text-base font-medium text-green-100">
            Products/Services
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-4xl font-extrabold text-white">200+</p>
          <p className="text-base font-medium text-green-100">
            Satisfied Clients
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-4xl font-extrabold text-white">15+</p>
          <p className="text-base font-medium text-green-100">
            Years of Experience
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-4xl font-extrabold text-white">11</p>
          <p className="text-base font-medium text-green-100">Team Members</p>
        </motion.div>
      </section>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white px-4 md:px-16 py-12 text-center rounded-3xl shadow-md max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-green-700 text-xs uppercase tracking-widest mb-2">
          Our Mission
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
          Our mission is to help farmers grow more with less.
        </h2>
        <p className="text-green-800 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          At Moudlyne Global Ltd, our goal is to empower Ghanaian farmers with
          high-quality, innovative agricultural inputs that boost productivity,
          enrich soil, and support sustainable farming. We are dedicated to
          providing solutions that help farmers achieve maximum yields and
          long-term soil health, making a positive impact on communities and the
          environment.
        </p>
      </motion.section>

      {/* What We Do */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-green-50 px-4 md:px-16 py-12 text-center rounded-3xl shadow-md max-w-4xl mx-auto mb-10"
      >
        <h4 className="text-green-700 text-xs uppercase mb-2 tracking-widest">
          What We Do
        </h4>
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-green-900">
          We serve Ghanaian farmers.
        </h2>
        <p className="text-green-800 text-base md:text-lg max-w-xl mx-auto">
          We help farmers grow healthier crops by providing powerful solutions
          with HEFE MOA Liquid, MOA UREA, and HEFE MOA Solid Fertilizers each
          designed to boost yield, enrich soil, and support sustainable farming.
        </p>
      </motion.section>

      {/* Expansion Section */}
      <section className="grid md:grid-cols-2 gap-8 px-4 md:px-16 py-16 items-center bg-white rounded-3xl shadow-lg max-w-6xl mx-auto mb-16">
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://img.freepik.com/free-photo/happy-african-man-trimming-bushes-with-gas-powered-clipper_651396-1477.jpg?uid=R171707031&ga=GA1.1.775454794.1744728176&semt=ais_items_boosted&w=740"
          alt="Field"
          className="w-full h-[350px] md:h-[500px] object-cover rounded-3xl shadow-xl border-4 border-green-600"
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-green-800 text-base md:text-lg leading-relaxed">
            Since 2024, our product list has expanded to include a broad range
            of mainstream and specialist agricultural inputs designed to make
            farming in West Africa more diverse and more efficient. We are proud
            to say that our products and services directly impact the lives of
            over 200 farmers in Ghana alone last year.
            <br />
            <br />
            Moudlyne Global Ltd has a dedicated team based in Accra, Ghana, and
            is committed to bringing the best of international agricultural
            innovation to the Ghanaian market. Our focus is on supporting local
            farmers, enhancing productivity, and re-exporting quality Ghanaian
            produce to the world.
          </p>
          <Link to="/products">
            <button className="mt-6 bg-green-700 hover:bg-green-800 text-white text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200">
              View Products
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Meet the Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-green-50 px-4 md:px-16 py-16 rounded-3xl shadow-lg max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-green-900 mb-10 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AboutCard
            name="Moudlyne Offeibea Asirifi"
            title="CEO & Founder"
            image="/src/assets/Logo.png"
            description="Visionary leader with 15+ years in agribusiness, driving innovation and growth at Moudlyne Global Ltd."
          />
          <AboutCard
            name="Mrs Millicent Asiedu-Gyan"
            title="General Manager"
            image="/src/assets/Logo.png"
            description="HR and Admin expert with 15+ years’ experience, strong leadership, and a key role in Moudlyne Global’s growth."
          />
          <AboutCard
            name="Benjamin Amuzu"
            title="Account Officer"
            image="/src/assets/Logo.png"
            description="Over 6+ years of experience in account officer position, ensuring transparency and accuracy in all company transactions."
          />
          <AboutCard
            name="Philipine Qwaw"
            title="Secretary"
            image="/src/assets/Logo.png"
            description="Efficient and detail-oriented secretary with strong organizational and communication skills, ensuring smooth daily operations and professional support for the entire team."
          />
          <AboutCard
            name="Samuel Offosu"
            title="Warehouse Manager"
            image="/src/assets/Logo.png"
            description="Experienced warehouse manager skilled in inventory control, logistics, and efficient supply chain management to ensure timely delivery of quality products."
          />
        </div>
      </motion.section>
    </div>
  );
}
