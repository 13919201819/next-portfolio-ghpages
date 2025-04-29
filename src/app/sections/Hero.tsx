// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// // Dynamically import Particles to avoid SSR issues
// const Particles = dynamic(() => import("@tsparticles/react").then((mod) => mod.Particles), { ssr: false });
// import { loadSlim } from "@tsparticles/slim";
// import { useCallback, useEffect, useState } from "react";

// const Hero = () => {
//   const [particlesInit, setParticlesInit] = useState(false);

//   // Initialize particles
//   const particlesLoaded = useCallback(async (container: any) => {
//     await loadSlim(container);
//     setParticlesInit(true);
//   }, []);

//   useEffect(() => {
//     setParticlesInit(false); // Reset to ensure re-initialization
//   }, []);

//   // Particle options
//   const particlesOptions = {
//     particles: {
//       number: { value: 100, density: { enable: true, value_area: 800 } },
//       color: { value: ["#3b82f6"] }, // Theme-oriented colors
//       shape: { type: "circle" },
//       opacity: { value: 0.5, random: true },
//       size: { value: 3, random: true },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.2,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//       },
//     },
//     interactivity: {
//       events: {
//         onhover: { enable: true, mode: "repulse" },
//         onclick: { enable: true, mode: "push" },
//       },
//       modes: {
//         repulse: { distance: 100, duration: 0.4 },
//         push: { particles_nb: 4 },
//       },
//     },
//     retina_detect: true,
//   };

//   // Animation variants (corrected syntax)
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   const descriptionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen px-10 py-20 overflow-hidden text-center text-white hero bg-gradient-to-b from-black via-gray-900/95 to-gray-800">
//       {/* Particle Background */}
//       <Particles
//         id="tsparticles-hero"
//         init={particlesLoaded}
//         options={particlesOptions}
//         className="absolute inset-0 pointer-events-none"
//       />

//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute w-[200vw] h-[200vh] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.1)_0%,_transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//           animate={{ rotate: -360 }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         />
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
//       </div>

//       {/* Main Title with Full Form */}
//       <motion.div
//         className="relative z-10 text-5xl font-bold leading-tight tracking-tighter uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="flex justify-center mb-4 space-x-2">
//           <motion.span variants={letterVariants}>
//             <span className="gradient-clu">CLU</span>
//           </motion.span>
//           <motion.span variants={letterVariants}>STERS</motion.span>
//           <motion.span variants={letterVariants}>OF</motion.span>
//           <motion.span variants={letterVariants}>
//             <span className="gradient-m">M</span>
//           </motion.span>
//           <motion.span variants={letterVariants}>ULTI-</motion.span>
//           <motion.span variants={letterVariants}>
//             <span className="gradient-o">O</span>
//           </motion.span>
//           <motion.span variants={letterVariants}>RGANIZATIONS</motion.span>
//         </div>
//         <div className="flex justify-center space-x-2">
//           <motion.span variants={letterVariants}>FOR</motion.span>
//           <motion.span variants={letterVariants}>
//             <span className="gradient-s1">S</span>
//           </motion.span>
//           <motion.span variants={letterVariants}>UPPORT</motion.span>
//           <motion.span variants={letterVariants}>&</motion.span>
//           <motion.span variants={letterVariants}>
//             <span className="gradient-s2">S</span>
//           </motion.span>
//           <motion.span variants={letterVariants}>ERVICES</motion.span>
//         </div>
//       </motion.div>

//       {/* Description */}
//       <motion.p
//         className="relative z-10 max-w-3xl mt-10 text-lg text-gray-300 md:text-xl"
//         variants={descriptionVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         Empowering global innovation with AI-driven SaaS solutions, serving diverse domains across the world—from startups to enterprises.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         className="relative z-10 flex flex-wrap gap-12 mt-14"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.0, duration: 0.5 }}
//       >
//         <Link href="/explore">
//           <button className="py-5 holographic-button px-14">
//             <span className="relative z-10">Explore Projects</span>
//           </button>
//         </Link>
//         <Link href="/services">
//           <button className="py-5 holographic-button px-14">
//             <span className="relative z-10">Discover Services</span>
//           </button>
//         </Link>
//       </motion.div>

//       {/* Decorative Elements */}
//       <motion.div
//         className="absolute w-64 h-64 rounded-full bottom-10 left-10 bg-blue-500/10 blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//       />
//       <motion.div
//         className="absolute w-1/2 rounded-full h-1/2 top-10 right-10 bg-purple-500/10 blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ repeat: Infinity, duration: 5, delay: 2 }}
//       />
//     </section>
//   );
// };

// export default Hero;
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import { useState } from "react";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-10 py-20 overflow-hidden text-center text-white hero bg-gradient-to-b from-black via-gray-900/95 to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[200vw] h-[200vh] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.1)_0%,_transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Main Title with Full Form */}
      <motion.div
        className="relative z-10 text-5xl font-bold leading-tight tracking-tighter uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-4 space-x-2">
          <motion.span variants={letterVariants}>
            <span className="gradient-clu">CLU</span>
          </motion.span>
          <motion.span variants={letterVariants}>STERS</motion.span>
          <motion.span variants={letterVariants}>OF</motion.span>
          <motion.span variants={letterVariants}>
            <span className="gradient-m">M</span>
          </motion.span>
          <motion.span variants={letterVariants}>ULTI-</motion.span>
          <motion.span variants={letterVariants}>
            <span className="gradient-o">O</span>
          </motion.span>
          <motion.span variants={letterVariants}>RGANIZATIONS</motion.span>
        </div>
        <div className="flex justify-center space-x-2">
          <motion.span variants={letterVariants}>FOR</motion.span>
          <motion.span variants={letterVariants}>
            <span className="gradient-s1">S</span>
          </motion.span>
          <motion.span variants={letterVariants}>UPPORT</motion.span>
          <motion.span variants={letterVariants}>&</motion.span>
          <motion.span variants={letterVariants}>
            <span className="gradient-s2">S</span>
          </motion.span>
          <motion.span variants={letterVariants}>ERVICES</motion.span>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className="relative z-10 max-w-3xl mt-10 text-lg text-gray-300 md:text-xl"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        Empowering global innovation with AI-driven SaaS solutions, serving diverse domains across the world—from startups to enterprises.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="relative z-10 flex flex-wrap gap-12 mt-14"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <Link href="/explore">
          <button className="py-5 holographic-button px-14">
            <span className="relative z-10">Explore Projects</span>
          </button>
        </Link>
        <Link href="/services">
          <button className="py-5 holographic-button px-14">
            <span className="relative z-10">Discover Services</span>
          </button>
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bottom-10 left-10 bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute w-1/2 rounded-full h-1/2 top-10 right-10 bg-purple-500/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 5, delay: 2 }}
      />
    </section>
  );
};

export default Hero;