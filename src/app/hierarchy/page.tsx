"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandAlt } from "react-icons/fa";

// Hierarchy data with detailed descriptions
const hierarchy = {
  parent: {
    name: "CLUMOSS",
    description:
      "CLUMOSS is a global conglomerate driving innovation across industries through its diverse subsidiaries, delivering cutting-edge solutions with a focus on excellence and strategic growth.",
    overview:
      "As the visionary leader, CLUMOSS orchestrates a network of specialized subsidiaries, each contributing to a transformative ecosystem. From AI-driven logistics to advanced security and education, CLUMOSS empowers global industries with unparalleled expertise.",
  },
  subsidiaries: [
    {
      name: "Automata",
      description:
        "Automata enhances supply chain efficiency with AI-driven SaaS solutions for seamless operations.",
      details:
        "Specializing in AI-powered logistics and automation, Automata provides real-time insights to optimize supply chains, streamline dealer operations, and enhance decision-making for global enterprises.",
    },
    {
      name: "Mist AI",
      description:
        "Mist AI revolutionizes fashion with AI-generated menswear brands and bespoke designs.",
      details:
        "Mist AI leverages advanced AI to craft customized menswear, blending technology with artistry to set new standards in personalized fashion for a global audience.",
    },
    {
      name: "Reveleon",
      description:
        "Reveleon simplifies decisions with AI tools for studying abroad and clothing suggestions.",
      details:
        "Reveleon uses AI to provide tailored recommendations, empowering students and fashion enthusiasts with data-driven insights for education and lifestyle choices worldwide.",
    },
    {
      name: "HighClass",
      description:
        "HighClass delivers advanced AI solutions and SaaS products to elevate industries.",
      details:
        "HighClass offers enterprise-grade AI tools, from automation to analytics, enabling organizations to achieve operational excellence and maintain a competitive edge across sectors.",
    },
    {
      name: "Ela",
      description:
        "Ela ensures safety with AI and Computer Vision for real-time threat detection.",
      details:
        "Ela pioneers security solutions, using AI and Computer Vision to monitor and mitigate risks, safeguarding communities and businesses with proactive, real-time capabilities.",
    },
    {
      name: "Agrani",
      description:
        "Agrani transforms education with AI-generated video content and interactive platforms.",
      details:
        "Agrani creates AI-powered educational content and gamified learning experiences, revolutionizing knowledge retention and engagement for learners globally.",
    },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const nodeVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 20 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Hierarchy() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
      {/* Header Section */}
      <motion.header
        className="relative min-h-[30vh] flex items-center justify-center text-center px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div className="relative z-10">
          <motion.h1
            className="text-4xl font-bold text-purple-400 uppercase md:text-5xl drop-shadow-md"
            variants={nodeVariants}
          >
            Clusters of Multi-Organizations for Support and Services
          </motion.h1>
          <motion.p
            className="max-w-3xl mt-4 text-lg text-gray-300 md:text-xl"
            variants={nodeVariants}
          >
            Explore the CLUMOSS ecosystem, a network of innovation and excellence shaping the future of global industries.
          </motion.p>
        </motion.div>
      </motion.header>

      {/* Hierarchy Visualization */}
      <div className="container px-6 py-20 mx-auto">
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ minHeight: "800px" }}
        >
          {/* Central Node (CLUMOSS) */}
          <motion.div
            className="relative z-10 p-6 text-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-indigo-700"
            style={{ width: "250px", height: "250px" }}
            variants={nodeVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h2 className="text-2xl font-semibold">{hierarchy.parent.name}</h2>
            <p className="mt-2 text-sm text-gray-300 line-clamp-3">{hierarchy.parent.description}</p>
            <motion.button
              onClick={() => setExpanded(expanded === "parent" ? null : "parent")}
              className="flex items-center justify-center mt-3 text-sm text-purple-400 hover:text-white"
              variants={nodeVariants}
            >
              <FaExpandAlt className="mr-2" /> {expanded === "parent" ? "Close" : "Learn More"}
            </motion.button>
            <AnimatePresence>
              {expanded === "parent" && (
                <motion.div
                  className="absolute z-20 w-64 p-4 mt-4 transform -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg top-full left-1/2"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={expandVariants}
                >
                  <p className="text-xs leading-relaxed text-gray-400">{hierarchy.parent.overview}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Subsidiary Nodes */}
          <div className="relative flex justify-around w-full mt-32">
            {hierarchy.subsidiaries.map((subsidiary, index) => {
              const totalSubsidiaries = hierarchy.subsidiaries.length;
              const spacing = 100 / (totalSubsidiaries - 1); // Evenly distribute subsidiaries
              const positionX = index * spacing; // Position along X-axis

              return (
                <div key={subsidiary.name} className="relative flex flex-col items-center">
                  {/* Connecting Line */}
                  <svg
                    className="absolute top-[-120px] left-1/2 transform -translate-x-1/2"
                    width="2"
                    height="120"
                    style={{ overflow: "visible" }}
                  >
                    <motion.line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="120"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      variants={lineVariants}
                    />
                  </svg>
                  {/* Diagonal Line from CLUMOSS */}
                  <svg
                    className="absolute top-[-120px] left-1/2 transform -translate-x-1/2"
                    style={{ width: "100vw", height: "120px", overflow: "visible", zIndex: 0 }}
                  >
                    <motion.line
                      x1={`${50 - positionX + 50}%`} // Start at CLUMOSS (center)
                      y1="0"
                      x2="50%" // End at subsidiary
                      y2="120"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      variants={lineVariants}
                    />
                  </svg>

                  {/* Subsidiary Node */}
                  <motion.div
                    className="relative z-10 p-4 text-center transition-shadow duration-300 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-xl"
                    style={{ width: "200px", height: "200px" }}
                    variants={nodeVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <h3 className="text-lg font-medium text-white">{subsidiary.name}</h3>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-2">{subsidiary.description}</p>
                    <motion.button
                      onClick={() =>
                        setExpanded(expanded === subsidiary.name ? null : subsidiary.name)
                      }
                      className="flex items-center justify-center mt-3 text-sm text-purple-400 hover:text-white"
                      variants={nodeVariants}
                    >
                      <FaExpandAlt className="mr-2" /> {expanded === subsidiary.name ? "Close" : "Learn More"}
                    </motion.button>
                    <AnimatePresence>
                      {expanded === subsidiary.name && (
                        <motion.div
                          className="absolute z-20 w-64 p-4 mt-4 transform -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg top-full left-1/2"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={expandVariants}
                        >
                          <p className="text-xs leading-relaxed text-gray-400">{subsidiary.details}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="py-16 mx-6 mb-12 text-center bg-gray-800 rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="mb-4 text-3xl font-semibold text-white">
          Partner with CLUMOSS
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-300">
          Join our innovative ecosystem to unlock transformative solutions for your business.
        </p>
        <motion.a
          href="/contact"
          className="inline-block px-6 py-3 text-base font-medium text-white transition-colors duration-300 bg-purple-600 rounded-md hover:bg-purple-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  );
}