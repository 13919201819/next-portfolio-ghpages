"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation

const services = [
  { name: "Customized ML Models", description: "Tailored AI solutions for your business needs." },
  { name: "Next Gen UI/UX Design", description: "Modern, user-friendly designs for your applications." },
  { name: "Web Development", description: "Scalable and optimized web solutions." },
  { name: "Agentic AI", description: "AI-powered automation for decision-making." },
  { name: "SEO Optimization", description: "Boost your website’s visibility and ranking." },
  { name: "Digital Marketing", description: "Comprehensive marketing strategies for online growth." },
];

const Services = () => {
  return (
    <section className="services">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="service-title">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Buttons */}
      <div className="flex justify-center mt-12 space-x-4">
        {/* See More Button */}
        <Link href="/services">
          <motion.button
            className="w-[200px] h-[50px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-lg bg-transparent backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/80 hover:border-gray-300/80 hover:shadow-[0_0_12px_rgba(0,204,255,0.6)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          >
            See More
          </motion.button>
        </Link>

        {/* Schedule a Call Button */}
        <Link href="/contact">
          <motion.button
            className="w-[200px] h-[50px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-lg bg-transparent backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/80 hover:border-gray-300/80 hover:shadow-[0_0_12px_rgba(0,204,255,0.6)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          >
            Schedule a Call
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Services;