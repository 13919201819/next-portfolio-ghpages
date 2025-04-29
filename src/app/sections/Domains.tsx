// "use client";

// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
// import { useCallback, useEffect, useState } from "react";
// import { FaChartLine, FaShieldAlt, FaShoppingCart, FaStethoscope, FaLightbulb, FaMoneyBillWave, FaUserTie, FaCamera, FaPlane, FaGraduationCap, FaBalanceScale, FaFootballBall, FaUser } from "react-icons/fa";

// // Dynamically import Particles for a subtle background
// const Particles = dynamic(() => import("@tsparticles/react").then((mod) => mod.Particles), { ssr: false });
// import { loadSlim } from "@tsparticles/slim";

// // Define the domains with icons, titles, and transformative descriptions
// const domains = [
//   {
//     icon: <FaChartLine className="text-5xl text-green-400 drop-shadow-[0_0_5px_rgba(0,255,128,0.5)]" />,
//     title: "Sales",
//     description: "Transform sales with AI-driven insights, boosting efficiency to the next level with ease.",
//   },
//   {
//     icon: <FaShieldAlt className="text-5xl text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]" />,
//     title: "Defense",
//     description: "Revolutionize defense with next-gen intelligence platforms, simplifying strategic operations.",
//   },
//   {
//     icon: <FaShoppingCart className="text-5xl text-purple-400 drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]" />,
//     title: "E-commerce/Quick Commerce",
//     description: "Elevate online retail with seamless, AI-optimized solutions for effortless growth.",
//   },
//   {
//     icon: <FaStethoscope className="text-5xl text-blue-400 drop-shadow-[0_0_5px_rgba(0,191,255,0.5)]" />,
//     title: "Medical",
//     description: "Advance healthcare with AI tools, making patient care smarter and simpler.",
//   },
//   {
//     icon: <FaLightbulb className="text-5xl text-yellow-400 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />,
//     title: "Innovation",
//     description: "Unlock groundbreaking ideas with ease using cutting-edge platforms.",
//   },
//   {
//     icon: <FaMoneyBillWave className="text-5xl text-teal-400 drop-shadow-[0_0_5px_rgba(0,245,255,0.5)]" />,
//     title: "Finance",
//     description: "Streamline financial management with secure, next-level AI solutions.",
//   },
//   {
//     icon: <FaUserTie className="text-5xl text-indigo-400 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]" />,
//     title: "Entrepreneurship",
//     description: "Empower startups with tools to scale effortlessly to new heights.",
//   },
//   {
//     icon: <FaCamera className="text-5xl text-pink-400 drop-shadow-[0_0_5px_rgba(255,105,180,0.5)]" />,
//     title: "Fashion & Beauty",
//     description: "Transform the industry with AI-generated designs, made simple and stunning.",
//   },
//   {
//     icon: <FaPlane className="text-5xl text-orange-400 drop-shadow-[0_0_5px_rgba(255,165,0,0.5)]" />,
//     title: "Travel & Accommodation",
//     description: "Revolutionize travel with easy, AI-enhanced booking and management systems.",
//   },
//   {
//     icon: <FaGraduationCap className="text-5xl text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />,
//     title: "Education",
//     description: "Elevate learning with interactive, next-level e-learning platforms.",
//   },
//   {
//     icon: <FaBalanceScale className="text-5xl text-gray-400 drop-shadow-[0_0_5px_rgba(169,169,169,0.5)]" />,
//     title: "Laws & Rules",
//     description: "Simplify legal compliance across countries with intelligent AI tools.",
//   },
//   {
//     icon: <FaFootballBall className="text-5xl text-green-600 drop-shadow-[0_0_5px_rgba(0,128,0,0.5)]" />,
//     title: "Sports",
//     description: "Transform sports with AI analytics, making performance tracking effortless.",
//   },
//   {
//     icon: <FaUser className="text-5xl text-violet-400 drop-shadow-[0_0_5px_rgba(138,43,226,0.5)]" />,
//     title: "Personal Assistance",
//     description: "Enhance daily life with next-level AI personal assistants, designed for ease.",
//   },
// ];

// const Domains = () => {
//   const [particlesInit, setParticlesInit] = useState(false);

//   // Initialize particles
//   const particlesLoaded = useCallback(async (container: any) => {
//     await loadSlim(container);
//     setParticlesInit(true);
//   }, []);

//   // Particle options for a subtle, glowing background
//   const particlesOptions = {
//     particles: {
//       number: { value: 60, density: { enable: true, value_area: 800 } },
//       color: { value: ["#00ffcc", "#ff00ff", "#00ccff"] },
//       shape: { type: "circle" },
//       opacity: { value: 0.3, random: true },
//       size: { value: 2, random: true },
//       move: { enable: true, speed: 1, direction: "none", random: true, out_mode: "out" },
//       line_linked: { enable: true, distance: 150, color: "#00ffcc", opacity: 0.1 },
//     },
//     interactivity: {
//       events: { onhover: { enable: true, mode: "repulse" } },
//     },
//     retina_detect: true,
//   };

//   // Split domains into two rows
//   const row1 = domains.slice(0, 7); // First 7 items
//   const row2 = domains.slice(7);    // Last 6 items

//   // Duplicate the arrays for seamless infinite scrolling
//   const extendedRow1 = [...row1, ...row1, ...row1]; // Tripled for smooth looping
//   const extendedRow2 = [...row2, ...row2, ...row2]; // Tripled for smooth looping

//   // Animation variants for slow left-to-right scrolling
//   const carouselVariants = {
//     animate: {
//       x: ["0%", "-66.66%"], // Adjust based on tripling the items (100% / 3 = 33.33% per cycle)
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 40, // Slow scrolling (40 seconds for a full cycle)
//           ease: "linear",
//         },
//       },
//     },
//   };

//   // 3D tilt effect on hover
//   const cardVariants = {
//     rest: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
//     hover: {
//       scale: 1.05,
//       rotateX: 5,
//       rotateY: -5,
//       z: 10,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <section className="relative py-20 overflow-hidden bg-black">
//       {/* Subtle Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20" />

//       {/* Particle Background */}
//       <Particles
//         id="tsparticles-domains"
//         init={particlesLoaded}
//         options={particlesOptions}
//         className="absolute inset-0 pointer-events-none"
//       />

//       {/* Section Title */}
//       <motion.h2
//         className="relative z-10 mb-16 text-5xl font-extrabold tracking-tighter text-center uppercase md:text-6xl"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
//       >
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 drop-shadow-[0_0_15px_rgba(0,255,204,0.7)]">
//           Domains of Transformation
//         </span>
//       </motion.h2>

//       {/* Carousel Container */}
//       <div className="relative z-10 px-4 mx-auto max-w-7xl">
//         {/* Row 1 */}
//         <div className="mb-8 overflow-hidden">
//           <motion.div
//             className="flex"
//             variants={carouselVariants}
//             animate="animate"
//             style={{ display: "flex", width: `${extendedRow1.length * (300 + 48)}px` }} // Adjusted width: card width (300) + padding (48)
//           >
//             {extendedRow1.map((domain, index) => (
//               <motion.div
//                 key={`row1-${index}`}
//                 className="flex-shrink-0 w-[300px] mx-6" // Increased padding (mx-6 = 24px on each side, 48px total between cards)
//                 variants={cardVariants}
//                 initial="rest"
//                 whileHover="hover"
//                 animate="rest"
//               >
//                 <div className="project-card bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-600/30 overflow-hidden w-[300px] h-[300px] flex flex-col items-center justify-center">
//                   <div className="flex justify-center mb-4">
//                     <div className="relative">
//                       {domain.icon}
//                       <motion.div
//                         className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent blur-sm"
//                         animate={{ opacity: [0, 0.4, 0] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       />
//                     </div>
//                   </div>
//                   <h3 className="mb-2 text-xl font-bold text-center text-white project-title drop-shadow-md">
//                     {domain.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-center text-gray-200 project-description">
//                     {domain.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Row 2 */}
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex"
//             variants={carouselVariants}
//             animate="animate"
//             style={{ display: "flex", width: `${extendedRow2.length * (300 + 48)}px` }} // Adjusted width: card width (300) + padding (48)
//           >
//             {extendedRow2.map((domain, index) => (
//               <motion.div
//                 key={`row2-${index}`}
//                 className="flex-shrink-0 w-[300px] mx-6" // Increased padding (mx-6 = 24px on each side, 48px total between cards)
//                 variants={cardVariants}
//                 initial="rest"
//                 whileHover="hover"
//                 animate="rest"
//               >
//                 <div className="project-card bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-600/30 overflow-hidden w-[300px] h-[300px] flex flex-col items-center justify-center">
//                   <div className="flex justify-center mb-4">
//                     <div className="relative">
//                       {domain.icon}
//                       <motion.div
//                         className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent blur-sm"
//                         animate={{ opacity: [0, 0.4, 0] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       />
//                     </div>
//                   </div>
//                   <h3 className="mb-2 text-xl font-bold text-center text-white project-title drop-shadow-md">
//                     {domain.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-center text-gray-200 project-description">
//                     {domain.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative Glowing Orbs */}
//       <motion.div
//         className="absolute w-64 h-64 rounded-full top-10 left-10 bg-cyan-400/20 blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute w-64 h-64 rounded-full bottom-10 right-10 bg-pink-400/20 blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ duration: 5, repeat: Infinity, delay: 2 }}
//       />
//     </section>
//   );
// };

// export default Domains;




"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
import { FaChartLine, FaShieldAlt, FaShoppingCart, FaStethoscope, FaLightbulb, FaMoneyBillWave, FaUserTie, FaCamera, FaPlane, FaGraduationCap, FaBalanceScale, FaFootballBall, FaUser } from "react-icons/fa";

// Define the domains with icons, titles, and transformative descriptions
const domains = [
  {
    icon: <FaChartLine className="text-5xl text-green-400 drop-shadow-[0_0_5px_rgba(0,255,128,0.5)]" />,
    title: "Sales",
    description: "Transform sales with AI-driven insights, boosting efficiency to the next level with ease.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]" />,
    title: "Defense",
    description: "Revolutionize defense with next-gen intelligence platforms, simplifying strategic operations.",
  },
  {
    icon: <FaShoppingCart className="text-5xl text-purple-400 drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]" />,
    title: "E-commerce/Quick Commerce",
    description: "Elevate online retail with seamless, AI-optimized solutions for effortless growth.",
  },
  {
    icon: <FaStethoscope className="text-5xl text-blue-400 drop-shadow-[0_0_5px_rgba(0,191,255,0.5)]" />,
    title: "Medical",
    description: "Advance healthcare with AI tools, making patient care smarter and simpler.",
  },
  {
    icon: <FaLightbulb className="text-5xl text-yellow-400 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />,
    title: "Innovation",
    description: "Unlock groundbreaking ideas with ease using cutting-edge platforms.",
  },
  {
    icon: <FaMoneyBillWave className="text-5xl text-teal-400 drop-shadow-[0_0_5px_rgba(0,245,255,0.5)]" />,
    title: "Finance",
    description: "Streamline financial management with secure, next-level AI solutions.",
  },
  {
    icon: <FaUserTie className="text-5xl text-indigo-400 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]" />,
    title: "Entrepreneurship",
    description: "Empower startups with tools to scale effortlessly to new heights.",
  },
  {
    icon: <FaCamera className="text-5xl text-pink-400 drop-shadow-[0_0_5px_rgba(255,105,180,0.5)]" />,
    title: "Fashion & Beauty",
    description: "Transform the industry with AI-generated designs, made simple and stunning.",
  },
  {
    icon: <FaPlane className="text-5xl text-orange-400 drop-shadow-[0_0_5px_rgba(255,165,0,0.5)]" />,
    title: "Travel & Accommodation",
    description: "Revolutionize travel with easy, AI-enhanced booking and management systems.",
  },
  {
    icon: <FaGraduationCap className="text-5xl text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />,
    title: "Education",
    description: "Elevate learning with interactive, next-level e-learning platforms.",
  },
  {
    icon: <FaBalanceScale className="text-5xl text-gray-400 drop-shadow-[0_0_5px_rgba(169,169,169,0.5)]" />,
    title: "Laws & Rules",
    description: "Simplify legal compliance across countries with intelligent AI tools.",
  },
  {
    icon: <FaFootballBall className="text-5xl text-green-600 drop-shadow-[0_0_5px_rgba(0,128,0,0.5)]" />,
    title: "Sports",
    description: "Transform sports with AI analytics, making performance tracking effortless.",
  },
  {
    icon: <FaUser className="text-5xl text-violet-400 drop-shadow-[0_0_5px_rgba(138,43,226,0.5)]" />,
    title: "Personal Assistance",
    description: "Enhance daily life with next-level AI personal assistants, designed for ease.",
  },
];

const Domains = () => {
  // Split domains into two rows
  const row1 = domains.slice(0, 7); // First 7 items
  const row2 = domains.slice(7);    // Last 6 items

  // Duplicate the arrays for seamless infinite scrolling
  const extendedRow1 = [...row1, ...row1, ...row1]; // Tripled for smooth looping
  const extendedRow2 = [...row2, ...row2, ...row2]; // Tripled for smooth looping

  // Animation variants for slow left-to-right scrolling
  const carouselVariants = {
    animate: {
      x: ["0%", "-66.66%"], // Adjust based on tripling the items (100% / 3 = 33.33% per cycle)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Slow scrolling (40 seconds for a full cycle)
          ease: "linear",
        },
      },
    },
  };

  // 3D tilt effect on hover
  const cardVariants = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: -5,
      z: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20" />

      {/* Section Title */}
      <motion.h2
        className="relative z-10 mb-16 text-5xl font-extrabold tracking-tighter text-center uppercase md:text-6xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 drop-shadow-[0_0_15px_rgba(0,255,204,0.7)]">
          Domains of Transformation
        </span>
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        {/* Row 1 */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex"
            variants={carouselVariants}
            animate="animate"
            style={{ display: "flex", width: `${extendedRow1.length * (300 + 48)}px` }} // Adjusted width: card width (300) + padding (48)
          >
            {extendedRow1.map((domain, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 w-[300px] mx-6" // Increased padding (mx-6 = 24px on each side, 48px total between cards)
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className="project-card bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-600/30 overflow-hidden w-[300px] h-[300px] flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      {domain.icon}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent blur-sm"
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-center text-white project-title drop-shadow-md">
                    {domain.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-gray-200 project-description">
                    {domain.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            variants={carouselVariants}
            animate="animate"
            style={{ display: "flex", width: `${extendedRow2.length * (300 + 48)}px` }} // Adjusted width: card width (300) + padding (48)
          >
            {extendedRow2.map((domain, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 w-[300px] mx-6" // Increased padding (mx-6 = 24px on each side, 48px total between cards)
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className="project-card bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-600/30 overflow-hidden w-[300px] h-[300px] flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      {domain.icon}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent blur-sm"
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-center text-white project-title drop-shadow-md">
                    {domain.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-gray-200 project-description">
                    {domain.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Glowing Orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full top-10 left-10 bg-cyan-400/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bottom-10 right-10 bg-pink-400/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default Domains;