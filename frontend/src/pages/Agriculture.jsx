import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaFlask, FaGlobeAfrica } from "react-icons/fa";
import liquidFert from "../assets/landingPage1.png";
import solidFert from "../assets/landingPage2.png";
import ureaFert from "../assets/landingPage3.png";
import testimonial1 from "../assets/testimonial_1.png";
import testimonial2 from "../assets/testimonial_2.png";
import testimonial3 from "../assets/testimonial_3.png";
import preview from "../assets/product_img1.jpg";

const Agriculture = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen pt-24 pb-16 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight">
            Sustainable Agriculture for a Greener Future
          </h1>
          <p className="text-lg md:text-xl text-green-800 mb-6">
            Moudlyne Global Limited is a Ghana-based company specializing in the
            production and distribution of high-quality organic fertilizer. Our
            organic fertilizers include{" "}
            <span className="font-bold text-green-900">
              Hefe MOA Liquid Organic Fertilizer
            </span>
            ,{" "}
            <span className="font-bold text-green-900">
              Hefe MOA Solid Organic Fertilizer
            </span>{" "}
            and <span className="font-bold text-green-900">Hefe MOA UREA</span>.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <FaLeaf className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Organic, eco-friendly solutions for every farm
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaSeedling className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Promoting soil health and sustainable crop yield
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaFlask className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Combining innovation with the latest agricultural technology
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaGlobeAfrica className="text-green-700 text-2xl mt-1" />
              <span className="text-green-900 font-semibold">
                Supporting farmers across Ghana and West Africa
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
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center max-w-xs md:max-w-sm lg:max-w-md w-full h-80 md:h-96 border-4 border-green-100 hover:scale-105 transition-transform duration-500 group">
            <img
              src={liquidFert}
              alt="Moudlyne Agriculture"
              className="w-40 h-40 object-cover rounded-2xl shadow-lg border-4 border-green-200 group-hover:scale-110 transition-transform duration-500 bg-white mb-4"
            />
            <h3 className="text-2xl font-bold text-green-900 mb-2 text-center group-hover:text-green-800 transition-colors duration-300">
              Moudlyne Global Ltd Agriculture
            </h3>
            <p className="text-green-800 text-center text-base md:text-lg font-medium">
              Empowering Ghanaian farmers with innovative, eco-friendly
              fertilizers and sustainable solutions for a greener future.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Fertilizers Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center"
        >
          Our Organic Fertilizer Products
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={liquidFert}
              alt="Hefe MOA Liquid"
              className="w-28 h-28 object-cover rounded-xl mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Hefe MOA Liquid Organic Fertilizer
            </h3>
            <p className="text-gray-700 text-center text-base">
              A premium liquid fertilizer designed to boost plant growth,
              improve soil structure, and increase crop yields naturally. Ideal
              for a wide range of crops and easy to apply.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={solidFert}
              alt="Hefe MOA Solid"
              className="w-28 h-28 object-cover rounded-xl mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Hefe MOA Solid Organic Fertilizer
            </h3>
            <p className="text-gray-700 text-center text-base">
              A nutrient-rich solid fertilizer that enhances soil fertility,
              supports root development, and sustains healthy crops throughout
              the growing season.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={ureaFert}
              alt="Hefe MOA UREA"
              className="w-28 h-28 object-cover rounded-xl mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Hefe MOA UREA
            </h3>
            <p className="text-gray-700 text-center text-base">
              A high-efficiency urea fertilizer formulated to provide essential
              nitrogen for robust plant growth and increased productivity, while
              remaining environmentally friendly.
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
          className="text-2xl md:text-3xl font-bold text-green-900 mb-4"
        >
          Our Commitment to Sustainable Agriculture
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-green-800 text-lg md:text-xl mb-6"
        >
          At Moudlyne Global Ltd, we believe that the future of farming lies in
          sustainable, eco-friendly practices. Our mission is to empower farmers
          with innovative organic solutions that protect the environment, enrich
          the soil, and ensure food security for generations to come.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <div className="bg-green-100 rounded-xl p-6 shadow-md w-full md:w-1/2">
            <h4 className="text-green-900 font-bold text-lg mb-2">
              Innovation
            </h4>
            <p className="text-green-800 text-base">
              We combine the latest agricultural technology with traditional
              knowledge to deliver products that are both effective and
              environmentally responsible.
            </p>
          </div>
          <div className="bg-green-100 rounded-xl p-6 shadow-md w-full md:w-1/2">
            <h4 className="text-green-900 font-bold text-lg mb-2">
              Farmer Support
            </h4>
            <p className="text-green-800 text-base">
              Our team works closely with farmers, providing guidance, training,
              and support to help them achieve the best possible results from
              our products.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-0 py-12 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-green-900 mb-4"
        >
          Experience the Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-green-800 text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        >
          See how Moudlyne Global’s organic fertilizers are transforming farms
          and communities across Ghana. Watch our story in action.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200"
        >
          <video
            controls
            poster={preview}
            className="w-full h-64 md:h-96 object-cover bg-black"
          >
            <source src="/tm1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-green-50 py-16 px-4 md:px-0 mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center"
        >
          What Our Farmers Say
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-green-400"
          >
            <img
              src={testimonial1}
              alt="Farmer 1"
              className="w-16 h-16 rounded-full mb-4 border-2 border-green-200"
            />
            <p className="text-gray-700 text-base mb-2 italic">
              “Since using Hefe MOA Liquid Organic Fertilizer, my lettuce farm
              yields have doubled and my soil is healthier than ever. Moudlyne
              Global truly cares about farmers.”
            </p>
            <span className="text-green-900 font-bold">
              Angelo.., Plant Quarantine Officer
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-green-400"
          >
            <img
              src={testimonial2}
              alt="Farmer 2"
              className="w-16 h-16 rounded-full mb-4 border-2 border-green-200"
            />
            <p className="text-gray-700 text-base mb-2 italic">
              “Hefe MOA liquid Organic fertilizers have made a remarkable
              difference on my rice farm. My crops are thriving, and I’ve
              experienced a noticeable boost in yield. I strongly recommend
              their products to fellow farmers.”
            </p>
            <span className="text-green-900 font-bold">Yaw M..., Farmer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-green-400"
          >
            <img
              src={testimonial3}
              alt="Farmer 3"
              className="w-16 h-16 rounded-full mb-4 border-2 border-green-200"
            />
            <p className="text-gray-700 text-base mb-2 italic">
              “MOA Urea fertilizer has transformed my Coconut farm. My farm
              produce are healthier, and I’ve seen a significant increase in
              yield. I highly recommend their products to every farmer.”
            </p>
            <span className="text-green-900 font-bold">
              Mr. Shine.., Head of Agric Dept.
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;
