import React from "react";
import { motion } from "framer-motion";
import moaWaterImg from "../assets/moa_water.png";
import moaWater1Img from "../assets/moa_water1.png";

const DrinkingWater = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-50 via-white to-blue-100 min-h-screen pt-24 pb-16 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-900 mb-4 leading-tight drop-shadow-lg tracking-tight">
            MOA Drinking Water: Pure, Refreshing, Essential
          </h1>
          <p className="text-lg md:text-xl text-cyan-800 mb-6 font-medium">
            It is a pleasure serving the good people of Ghana. We do not offer
            just any kind of service; we bring to your table good and affordable
            drinking water. MOA Drinking Water is unlike any other liquid  it is
            water without smell, very transparent, and without any hint of
            color. It is always crystal clear and has no taste.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={moaWaterImg}
            alt="MOA Drinking Water"
            className="w-full h-[350px] md:h-[500px] object-cover rounded-3xl shadow-xl border-4 border-cyan-400 bg-white"
          />
        </motion.div>
      </section>

      {/* Why Water Matters Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-cyan-900 mb-6 text-center drop-shadow-md"
        >
          Why Water Matters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-cyan-800 text-lg md:text-xl mb-6 max-w-3xl mx-auto text-center font-medium"
        >
          We understand how vital water is to the world and to every living
          thing on planet Earth. It is clear to us that it was for us, the
          living creatures, that the Almighty God created “EARTH”  so far, the
          only planet in the Milky Way Galaxy with evidence of water and life.
          There is “LIFE” because water is present. Seventy-nine percent of the
          earth is made of water, and even more so, our own bodies. This is
          essentially why you need MOA Drinking Water to support your life.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
          <div className="bg-cyan-50 rounded-xl p-6 shadow-md w-full md:w-1/2 hover:bg-cyan-100 transition-colors duration-300">
            <h4 className="text-cyan-900 font-bold text-lg mb-2">
              Crystal Clear & Pure
            </h4>
            <p className="text-cyan-800 text-base">
              MOA Drinking Water is water with every good quality: no odor, no
              visible solid particles, and no contamination. It is rich in vital
              and essential minerals, all from nature, just as water itself
              should be.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow-md w-full md:w-1/2 hover:bg-blue-100 transition-colors duration-300">
            <h4 className="text-cyan-900 font-bold text-lg mb-2">
              Satisfying & Refreshing
            </h4>
            <p className="text-cyan-800 text-base">
              Though water is tasteless, one may say “It tastes good.” This is
              due to the satisfaction you get from just a sip, and also because
              when you drink MOA Water, you tend to want more  especially if you
              are very thirsty and dehydrated.
            </p>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-cyan-900 mb-6 text-center drop-shadow-md"
        >
          Packaging & Affordability
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-cyan-400 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={moaWater1Img}
              alt="MOA Water Bottles"
              className="w-28 h-28 object-cover rounded-xl mb-4 border-4 border-cyan-100"
            />
            <h3 className="text-xl font-bold text-cyan-800 mb-2 tracking-wide">
              Variety of Packaging
            </h3>
            <p className="text-gray-700 text-center text-base">
              Our water comes in sachets (500ml), bottles (500ml and 1.5L), and
              dispensers (10L and 20L)  all simple, attractive, and worthy of
              your fridge, supermarket, or event.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-blue-400 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-cyan-800 mb-2 tracking-wide">
              Affordable for All
            </h3>
            <p className="text-gray-700 text-center text-base">
              MOA Drinking Water is very affordable, making it the perfect
              choice for families, businesses, and special occasions across
              Ghana.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DrinkingWater;
