"use client"; 
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation

const projects = [
  { name: "Mistr AI", description: "Cutting-edge AI-driven solutions for all industries." },
  { name: "Automata AI", description: "AI-powered SaaS for supply chain management." },
  { name: "HighClass", description: "AI-generated luxurious clothing brand." },
  { name: "Peveleon", description: "AI-driven abroad education platform." },
  { name: "Agrani", description: "Next-gen defense sector intelligence platform." },
  { name: "How Money Works", description: "Podcasts with world-class founders & investors." },
];

const Projects = () => {
  return (
    <section className="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-12 space-x-4">
        {/* Explore Button */}
        <Link href="/explore">
          <motion.button
            className="w-[200px] h-[50px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-lg bg-transparent backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/80 hover:border-gray-300/80 hover:shadow-[0_0_12px_rgba(0,204,255,0.6)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          >
            Explore
          </motion.button>
        </Link>

        {/* Book a Demo Button */}
        <Link href="/demo">
          <motion.button
            className="w-[200px] h-[50px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-lg bg-transparent backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/80 hover:border-gray-300/80 hover:shadow-[0_0_12px_rgba(0,204,255,0.6)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          >
            Book a Demo
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;


// "use client"; 
// import { motion } from "framer-motion";
// import Link from "next/link"; // Import Link for navigation

// const projects = [
//   { name: "Mistr AI", description: "Cutting-edge AI-driven solutions for all industries." },
//   { name: "Automata AI", description: "AI-powered SaaS for supply chain management." },
//   { name: "HighClass", description: "AI-generated luxurious clothing brand." },
//   { name: "Peveleon", description: "AI-driven abroad education platform." },
//   { name: "Agrani", description: "Next-gen defense sector intelligence platform." },
//   { name: "How Money Works", description: "Podcasts with world-class founders & investors." },
// ];

// const Projects = () => {
//   return (
//     <section className="projects">
//       <motion.h2
//         className="projects-title"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Our Projects
//       </motion.h2>

//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.8 }}
//           >
//             <h3 className="project-title">{project.name}</h3>
//             <p className="project-description">{project.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Explore Button styled like Hero.tsx buttons */}
//       <div className="flex justify-center mt-12">
//         <Link href="/explore">
//           <motion.button
//             className="px-10 py-4 text-xl font-bold text-white uppercase rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,204,255,0.8)] border border-transparent hover:border-cyan-300/50"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore
//           </motion.button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Projects;