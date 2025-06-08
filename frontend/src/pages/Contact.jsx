// pages/Contact.jsx
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("xldngyvw");
  if (state.succeeded) {
    return (
      <section className="bg-gradient-to-br from-green-50 to-white py-16 px-4 sm:px-8 lg:px-32 min-h-screen mt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center bg-white rounded-xl shadow-xl p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="flex justify-center mb-4"
          >
            <FaCheckCircle className="text-green-600 text-6xl drop-shadow-lg animate-bounce" />
          </motion.div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Thank you!</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-700"
          >
            Your message has been sent. We appreciate your interest and will get
            back to you soon.
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-16 px-4 sm:px-8 lg:px-32 min-h-screen mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We'd love to hear from you. Whether you have a question about
          services, pricing, or anything else our team is ready to answer.
        </p>
      </motion.div>

      {/* Contact Form + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-xl shadow-xl p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-300"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-bold text-green-800 mb-2">Email</h4>
            <p className="text-gray-700">info@moudlynegloballtd.com</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-bold text-green-800 mb-2">Phone</h4>
            <p className="text-gray-700">+233 54 595 2035 / +233 27 526 9788</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-bold text-green-800 mb-2">
              Office Address
            </h4>
            <p className="text-gray-700">
              331 Nsawam Rd, Achimota mile 7, Ghana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
