import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductVisuals from "../components/ProductVisuals";
import LandingPage1 from "../assets/landingPage1.png";
import LandingPage2 from "../assets/landingPage2.png";
import LandingPage3 from "../assets/landingPage3.png";
import Product_img1 from "../assets/product_img1.jpg";
import Product_img2 from "../assets/product_img2.png";
import Moa_water from "../assets/moa_water1.png";
import WaterBg from "../assets/moa_water.png";
import Publication from "../assets/Publication.jpg";
import Offeibea_krom from "../assets/offeibea_krom.jpg";

const products = [
  {
    name: "Hefe MOA Liquid Organic Fertilizer",
    image: LandingPage1,
    desc: "A premium liquid fertilizer designed to boost crop yield, improve soil health, and support sustainable farming. Ideal for vegetables, cereals, and fruits.",
    color: "from-green-200 via-green-50 to-white",
    features: ["Boosts yield", "Improves soil health", "Eco-friendly"],
  },
  {
    name: "Hefe MOA Solid Organic Fertilizer",
    image: LandingPage2,
    desc: "A nutrient-rich solid fertilizer that enhances soil fertility, supports root development, and sustains healthy crops throughout the growing season.",
    color: "from-lime-100 via-green-50 to-white",
    features: ["Enriches soil", "Sustains crops", "Long-lasting"],
  },
  {
    name: "Hefe MOA UREA",
    image: LandingPage3,
    desc: "A high-efficiency urea fertilizer formulated to provide essential nitrogen for robust plant growth and increased productivity, while remaining environmentally friendly.",
    color: "from-emerald-100 via-green-50 to-white",
    features: ["High nitrogen", "Fast-acting", "Safe for environment"],
  },
  {
    name: "MOA Publishers (Books)",
    image: Publication,
    desc: "High-quality academic books and journals for schools and individuals. Focused on Mathematics and English, reviewed and approved by top educators.",
    color: "from-yellow-100 via-blue-50 to-white",
    features: ["Academic focus", "Top quality", "Affordable"],
  },
  {
    name: "MOA Real Estate (Offeibea Krom)",
    image: Offeibea_krom,
    desc: "Modern, sustainable housing and community development blending Ghanaian culture with contemporary design. Creating jobs and uplifting communities.",
    color: "from-yellow-100 via-green-50 to-white",
    features: ["Modern homes", "Cultural roots", "Community impact"],
  },
  {
    name: "MOA Drinking Water",
    image: Moa_water,
    desc: "Crystal clear, odorless, and mineral-rich drinking water available in sachets, bottles, and dispensers. Perfect for homes, events, and businesses.",
    color: "from-cyan-100 via-blue-50 to-white",
    features: ["Pure & safe", "Affordable", "Multiple packaging"],
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-16 font-sans overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8 drop-shadow-lg tracking-tight"
      >
        Our Products
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-green-800 text-center max-w-2xl mx-auto mb-12 font-medium"
      >
        Discover the full range of innovative, sustainable products from
        Moudlyne Global Ltd. Each product is crafted to deliver quality, value,
        and positive impact for our customers and communities.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 md:px-8">
        {products.map((product, i) => {
          // Map product name to route
          let route = "/";
          if (
            product.name.includes("Fertilizer") ||
            product.name.includes("UREA")
          )
            route = "/agriculture";
          else if (product.name.includes("Publish")) route = "/publication";
          else if (product.name.includes("Real Estate")) route = "/real_estate";
          else if (product.name.includes("Drinking Water"))
            route = "/drinking_water";
          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative group bg-gradient-to-br ${product.color} rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-green-300/40 transition-all duration-500 overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-200 to-green-400 rounded-full blur-2xl opacity-30 group-hover:scale-125 transition-transform duration-700" />
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-white"
                whileHover={{ scale: 1.12, rotate: 6 }}
                draggable={false}
              />
              <h2 className="mt-6 text-2xl font-bold text-green-900 text-center group-hover:text-green-800 transition-colors duration-300">
                {product.name}
              </h2>
              <p className="mt-3 text-green-800 text-center text-base md:text-lg font-medium mb-4">
                {product.desc}
              </p>
              <ul className="flex flex-wrap gap-2 justify-center mb-4">
                {product.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold shadow group-hover:bg-green-200 transition-colors duration-300"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="mt-auto bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                onClick={() => navigate(route)}
              >
                Learn More
              </motion.button>
              <div className="absolute inset-0 pointer-events-none group-hover:animate-pulse bg-gradient-to-br from-green-100/10 to-green-200/10 rounded-3xl" />
            </motion.div>
          );
        })}
      </div>
      <div className="max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProductVisuals
            images={[
              LandingPage1,
              LandingPage2,
              LandingPage3,
              Product_img1,
              Product_img2,
              Moa_water,
              Publication,
              Offeibea_krom,
            ]}
            className="w-full max-w-2xl mx-auto h-96 mt-8"
            sliderHeight={380}
            leafIcon={true}
            showDots={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
