// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowDown, FaEye } from "react-icons/fa";
// import Image from "next/image";

// // Sample project data (updated categories)
// const projects = {
//   clients: {
//     "Next gen UI UX": [
//       {
//         title: "Immersive Dashboard Experience",
//         description: "A next-gen dashboard that redefines user interaction with stunning visuals and seamless transitions.",
//         image: "/placeholder-uiux1.jpg",
//         tech: ["Figma", "React", "Framer Motion"],
//         link: "#",
//       },
//       {
//         title: "E-Commerce Redesign",
//         description: "A visually captivating e-commerce platform that makes shopping a delightful journey.",
//         image: "/placeholder-uiux2.jpg",
//         tech: ["Next.js", "Tailwind", "Three.js"],
//         link: "#",
//       },
//     ],
//     "Customized ML Models": [
//       {
//         title: "Predictive Sales Engine",
//         description: "A tailored ML model that forecasts sales with precision, empowering businesses to soar.",
//         image: "/placeholder-ml1.jpg",
//         tech: ["TensorFlow", "Python", "Scikit-learn"],
//         link: "#",
//       },
//       {
//         title: "Personalized Recommendation System",
//         description: "An ML-powered system that knows users better than they know themselves, driving engagement.",
//         image: "/placeholder-ml2.jpg",
//         tech: ["PyTorch", "AWS", "FastAPI"],
//         link: "#",
//       },
//     ],
//     "Conversational AI": [
//       {
//         title: "Emotion-Driven Chatbot",
//         description: "A conversational AI that understands emotions, creating meaningful connections with users.",
//         image: "/placeholder-ai1.jpg",
//         tech: ["Dialogflow", "Node.js", "NLP"],
//         link: "#",
//       },
//       {
//         title: "Voice Assistant for Retail",
//         description: "A voice AI that transforms retail experiences with natural, engaging conversations.",
//         image: "/placeholder-ai2.jpg",
//         tech: ["Rasa", "Google Cloud", "WebRTC"],
//         link: "#",
//       },
//     ],
//     "Web Dev": [
//       {
//         title: "Corporate Web Masterpiece",
//         description: "A corporate website that blends elegance with functionality, leaving a lasting impression.",
//         image: "/placeholder-web1.jpg",
//         tech: ["Next.js", "TypeScript", "GraphQL"],
//         link: "#",
//       },
//       {
//         title: "Startup Landing Page",
//         description: "A vibrant landing page that captures the spirit of innovation, driving conversions.",
//         image: "/placeholder-web2.jpg",
//         tech: ["React", "Tailwind", "Vercel"],
//         link: "#",
//       },
//     ],
//     "SEO optimization": [
//       {
//         title: "Organic Growth Rocket",
//         description: "A powerful SEO strategy that skyrocketed organic traffic, making a brand unstoppable.",
//         image: "/placeholder-seo1.jpg",
//         tech: ["Ahrefs", "Google Analytics", "Schema"],
//         link: "#",
//       },
//       {
//         title: "E-Commerce SEO Overhaul",
//         description: "An SEO transformation that boosted online visibility and sales through strategic optimization.",
//         image: "/placeholder-seo2.jpg",
//         tech: ["SEMrush", "Yoast", "Next.js"],
//         link: "#",
//       },
//     ],
//     "Mobile App Development": [
//       {
//         title: "Fitness Journey App",
//         description: "A mobile app that inspires users to achieve their fitness dreams with an intuitive interface.",
//         image: "/placeholder-mobile1.jpg",
//         tech: ["Flutter", "Firebase", "Dart"],
//         link: "#",
//       },
//       {
//         title: "Travel Explorer App",
//         description: "An app that brings travel dreams to life with immersive visuals and seamless navigation.",
//         image: "/placeholder-mobile2.jpg",
//         tech: ["React Native", "Mapbox", "Swift"],
//         link: "#",
//       },
//     ],
//   },
//   organizations: {
//     "Next gen UI UX": [
//       {
//         title: "Non-Profit Engagement Platform",
//         description: "A UI/UX design for a non-profit that fosters community engagement through intuitive design.",
//         image: "/placeholder-org-uiux1.jpg",
//         tech: ["Adobe XD", "React", "CSS"],
//         link: "#",
//       },
//     ],
//     "Customized ML Models": [
//       {
//         title: "Healthcare Predictive Analytics",
//         description: "An ML model for healthcare organizations, predicting patient outcomes with precision.",
//         image: "/placeholder-org-ml1.jpg",
//         tech: ["TensorFlow", "Python", "Pandas"],
//         link: "#",
//       },
//     ],
//     "Conversational AI": [
//       {
//         title: "Educational AI Tutor",
//         description: "A conversational AI for educational institutions, enhancing learning through dialogue.",
//         image: "/placeholder-org-ai1.jpg",
//         tech: ["Rasa", "AWS", "MongoDB"],
//         link: "#",
//       },
//     ],
//     "Web Dev": [
//       {
//         title: "NGO Outreach Site",
//         description: "A website for an NGO, designed to amplify their mission with emotional storytelling.",
//         image: "/placeholder-org-web1.jpg",
//         tech: ["Next.js", "MongoDB", "Tailwind"],
//         link: "#",
//       },
//     ],
//     "SEO optimization": [
//       {
//         title: "Charity SEO Boost",
//         description: "An SEO strategy that increased visibility for a charity, driving more donations.",
//         image: "/placeholder-org-seo1.jpg",
//         tech: ["Google Analytics", "Ahrefs", "WordPress"],
//         link: "#",
//       },
//     ],
//     "Mobile App Development": [
//       {
//         title: "Community Connect App",
//         description: "A mobile app for organizations to connect communities with impactful features.",
//         image: "/placeholder-org-mobile1.jpg",
//         tech: ["Flutter", "Firebase", "Kotlin"],
//         link: "#",
//       },
//     ],
//   },
// };

// const categoryVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
// };

// const cardVariants = {
//   hover: {
//     scale: 1.05, // Zoom effect
//     boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4), 0 0 10px rgba(147, 51, 234, 0.3)",
//     transition: { duration: 0.4 },
//   },
//   tap: { scale: 0.98, transition: { duration: 0.2 } },
// };

// const heroVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
// };

// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [projectType, setProjectType] = useState<"clients" | "organizations">("clients");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const categories = document.querySelectorAll(".category-section");
//       categories.forEach((category, index) => {
//         const rect = category.getBoundingClientRect();
//         if (rect.top <= 100 && rect.bottom >= 100) {
//           setActiveCategory(Object.keys(projects[projectType])[index]);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [projectType]);

//   return (
//     <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 to-black">
//       {/* Hero Section */}
//       <motion.section
//         className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-20 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center bg-no-repeat"
//         initial="hidden"
//         animate="visible"
//         variants={heroVariants}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10">
//           <motion.h1
//             className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_30px_rgba(79,70,229,0.8)]"
//             variants={heroVariants}
//           >
//             Unleash Your Vision
//           </motion.h1>
//           <motion.p
//             className="max-w-2xl mt-4 text-xl text-gray-300 md:text-2xl"
//             variants={heroVariants}
//           >
//             Step into a world where every project tells a story, sparks emotion, and wins hearts.
//           </motion.p>
//           {/* Toggle Menu in Cylindrical Container */}
//           <motion.div
//             className="mt-8 p-1 bg-gradient-to-r from-indigo-600/20 to-purple-700/20 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)]"
//             variants={heroVariants}
//           >
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setProjectType("clients")}
//                 className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 flex-1 ${
//                   projectType === "clients"
//                     ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
//                     : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
//                 }`}
//                 style={{ minWidth: "160px" }} // Ensure uniform width
//               >
//                 Clients Projects
//               </button>
//               <button
//                 onClick={() => setProjectType("organizations")}
//                 className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 flex-1 ${
//                   projectType === "organizations"
//                     ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
//                     : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
//                 }`}
//                 style={{ minWidth: "160px" }} // Ensure uniform width
//               >
//                 Organizations Projects
//               </button>
//             </div>
//           </motion.div>
//           <motion.div
//             className="mt-8"
//             variants={heroVariants}
//             whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//           >
//             <FaArrowDown className="text-4xl text-indigo-400 animate-bounce" />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Categories Section */}
//       <div className="container px-4 py-16 mx-auto">
//         {Object.entries(projects[projectType]).map(([category, projectsList], index) => (
//           <motion.div
//             key={category}
//             className="mb-20 category-section"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={categoryVariants}
//           >
//             <h2 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">
//               {category}
//             </h2>
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {projectsList.map((project, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="relative overflow-hidden transition-all duration-300 border shadow-lg rounded-xl bg-gray-800/50 border-indigo-600/30 hover:shadow-2xl"
//                   variants={cardVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="p-6">
//                     <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
//                     <p className="mb-4 text-gray-400 line-clamp-3">{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map((tech, tIdx) => (
//                         <span
//                           key={tIdx}
//                           className="px-2 py-1 text-sm text-indigo-200 rounded-full bg-indigo-600/30"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <a
//                       href={project.link}
//                       className="inline-flex items-center text-indigo-400 transition-colors hover:text-white"
//                     >
//                       <FaEye className="mr-2" /> View Project
//                     </a>
//                   </div>
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent hover:opacity-100"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   >
//                     Experience the Magic
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}

//         {/* Call to Action */}
//         <motion.div
//           className="py-16 text-center border bg-gray-900/50 rounded-xl border-indigo-600/30"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={categoryVariants}
//         >
//           <h2 className="mb-6 text-4xl font-bold text-white">
//             Ready to Create Something Extraordinary?
//           </h2>
//           <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
//             Let’s weave emotions into your next masterpiece. Contact me to start the journey.
//           </p>
//           <motion.a
//             href="/contact"
//             className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.6)" }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Ignite the Spark
//           </motion.a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowDown, FaEye } from "react-icons/fa";
// import Image from "next/image";

// // Sample project data (updated categories)
// const projects = {
//   clients: {
//     "Next gen UI UX": [
//       {
//         title: "Immersive Dashboard Experience",
//         description: "A next-gen dashboard that redefines user interaction with stunning visuals and seamless transitions.",
//         image: "/placeholder-uiux1.jpg",
//         tech: ["Figma", "React", "Framer Motion"],
//         link: "#",
//       },
//       {
//         title: "E-Commerce Redesign",
//         description: "A visually captivating e-commerce platform that makes shopping a delightful journey.",
//         image: "/placeholder-uiux2.jpg",
//         tech: ["Next.js", "Tailwind", "Three.js"],
//         link: "#",
//       },
//     ],
//     "Customized ML Models": [
//       {
//         title: "Predictive Sales Engine",
//         description: "A tailored ML model that forecasts sales with precision, empowering businesses to soar.",
//         image: "/placeholder-ml1.jpg",
//         tech: ["TensorFlow", "Python", "Scikit-learn"],
//         link: "#",
//       },
//       {
//         title: "Personalized Recommendation System",
//         description: "An ML-powered system that knows users better than they know themselves, driving engagement.",
//         image: "/placeholder-ml2.jpg",
//         tech: ["PyTorch", "AWS", "FastAPI"],
//         link: "#",
//       },
//     ],
//     "Conversational AI": [
//       {
//         title: "Emotion-Driven Chatbot",
//         description: "A conversational AI that understands emotions, creating meaningful connections with users.",
//         image: "/placeholder-ai1.jpg",
//         tech: ["Dialogflow", "Node.js", "NLP"],
//         link: "#",
//       },
//       {
//         title: "Voice Assistant for Retail",
//         description: "A voice AI that transforms retail experiences with natural, engaging conversations.",
//         image: "/placeholder-ai2.jpg",
//         tech: ["Rasa", "Google Cloud", "WebRTC"],
//         link: "#",
//       },
//     ],
//     "Web Dev": [
//       {
//         title: "Corporate Web Masterpiece",
//         description: "A corporate website that blends elegance with functionality, leaving a lasting impression.",
//         image: "/placeholder-web1.jpg",
//         tech: ["Next.js", "TypeScript", "GraphQL"],
//         link: "#",
//       },
//       {
//         title: "Startup Landing Page",
//         description: "A vibrant landing page that captures the spirit of innovation, driving conversions.",
//         image: "/placeholder-web2.jpg",
//         tech: ["React", "Tailwind", "Vercel"],
//         link: "#",
//       },
//     ],
//     "SEO optimization": [
//       {
//         title: "Organic Growth Rocket",
//         description: "A powerful SEO strategy that skyrocketed organic traffic, making a brand unstoppable.",
//         image: "/placeholder-seo1.jpg",
//         tech: ["Ahrefs", "Google Analytics", "Schema"],
//         link: "#",
//       },
//       {
//         title: "E-Commerce SEO Overhaul",
//         description: "An SEO transformation that boosted online visibility and sales through strategic optimization.",
//         image: "/placeholder-seo2.jpg",
//         tech: ["SEMrush", "Yoast", "Next.js"],
//         link: "#",
//       },
//     ],
//     "Mobile App Development": [
//       {
//         title: "Fitness Journey App",
//         description: "A mobile app that inspires users to achieve their fitness dreams with an intuitive interface.",
//         image: "/placeholder-mobile1.jpg",
//         tech: ["Flutter", "Firebase", "Dart"],
//         link: "#",
//       },
//       {
//         title: "Travel Explorer App",
//         description: "An app that brings travel dreams to life with immersive visuals and seamless navigation.",
//         image: "/placeholder-mobile2.jpg",
//         tech: ["React Native", "Mapbox", "Swift"],
//         link: "#",
//       },
//     ],
//   },
//   organizations: {
//     "Next gen UI UX": [
//       {
//         title: "Non-Profit Engagement Platform",
//         description: "A UI/UX design for a non-profit that fosters community engagement through intuitive design.",
//         image: "/placeholder-org-uiux1.jpg",
//         tech: ["Adobe XD", "React", "CSS"],
//         link: "#",
//       },
//     ],
//     "Customized ML Models": [
//       {
//         title: "Healthcare Predictive Analytics",
//         description: "An ML model for healthcare organizations, predicting patient outcomes with precision.",
//         image: "/placeholder-org-ml1.jpg",
//         tech: ["TensorFlow", "Python", "Pandas"],
//         link: "#",
//       },
//     ],
//     "Conversational AI": [
//       {
//         title: "Educational AI Tutor",
//         description: "A conversational AI for educational institutions, enhancing learning through dialogue.",
//         image: "/placeholder-org-ai1.jpg",
//         tech: ["Rasa", "AWS", "MongoDB"],
//         link: "#",
//       },
//     ],
//     "Web Dev": [
//       {
//         title: "NGO Outreach Site",
//         description: "A website for an NGO, designed to amplify their mission with emotional storytelling.",
//         image: "/placeholder-org-web1.jpg",
//         tech: ["Next.js", "MongoDB", "Tailwind"],
//         link: "#",
//       },
//     ],
//     "SEO optimization": [
//       {
//         title: "Charity SEO Boost",
//         description: "An SEO strategy that increased visibility for a charity, driving more donations.",
//         image: "/placeholder-org-seo1.jpg",
//         tech: ["Google Analytics", "Ahrefs", "WordPress"],
//         link: "#",
//       },
//     ],
//     "Mobile App Development": [
//       {
//         title: "Community Connect App",
//         description: "A mobile app for organizations to connect communities with impactful features.",
//         image: "/placeholder-org-mobile1.jpg",
//         tech: ["Flutter", "Firebase", "Kotlin"],
//         link: "#",
//       },
//     ],
//   },
// };

// const categoryVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
// };

// const cardVariants = {
//   hover: {
//     scale: 1.05, // Zoom effect
//     boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4), 0 0 10px rgba(147, 51, 234, 0.3)",
//     transition: { duration: 0.4 },
//   },
//   tap: { scale: 0.98, transition: { duration: 0.2 } },
// };

// const heroVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
// };

// export default function Portfolio() {
//   const [projectType, setProjectType] = useState<"clients" | "organizations">("clients");

//   return (
//     <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 to-black">
//       {/* Hero Section */}
//       <motion.section
//         className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-20 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center bg-no-repeat"
//         initial="hidden"
//         animate="visible"
//         variants={heroVariants}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10">
//           <motion.h1
//             className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_30px_rgba(79,70,229,0.8)]"
//             variants={heroVariants}
//           >
//             Unleash Your Vision
//           </motion.h1>
//           <motion.p
//             className="max-w-2xl mt-4 text-xl text-gray-300 md:text-2xl"
//             variants={heroVariants}
//           >
//             Step into a world where every project tells a story, sparks emotion, and wins hearts.
//           </motion.p>
//           {/* Toggle Menu in Cylindrical Container */}
//           <motion.div
//             className="mt-8 p-1 bg-gradient-to-r from-indigo-600/20 to-purple-700/20 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)]"
//             variants={heroVariants}
//           >
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setProjectType("clients")}
//                 className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 flex-1 ${
//                   projectType === "clients"
//                     ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
//                     : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
//                 }`}
//                 style={{ minWidth: "160px" }} // Ensure uniform width
//               >
//                 Clients Projects
//               </button>
//               <button
//                 onClick={() => setProjectType("organizations")}
//                 className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 flex-1 ${
//                   projectType === "organizations"
//                     ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
//                     : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
//                 }`}
//                 style={{ minWidth: "160px" }} // Ensure uniform width
//               >
//                 Organizations Projects
//               </button>
//             </div>
//           </motion.div>
//           <motion.div
//             className="mt-8"
//             variants={heroVariants}
//             whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//           >
//             <FaArrowDown className="text-4xl text-indigo-400 animate-bounce" />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Categories Section */}
//       <div className="container px-4 py-16 mx-auto">
//         {Object.entries(projects[projectType]).map(([category, projectsList]) => (
//           <motion.div
//             key={category}
//             className="mb-20 category-section"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={categoryVariants}
//           >
//             <h2 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">
//               {category}
//             </h2>
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {projectsList.map((project, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="relative overflow-hidden transition-all duration-300 border shadow-lg rounded-xl bg-gray-800/50 border-indigo-600/30 hover:shadow-2xl"
//                   variants={cardVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="p-6">
//                     <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
//                     <p className="mb-4 text-gray-400 line-clamp-3">{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map((tech, tIdx) => (
//                         <span
//                           key={tIdx}
//                           className="px-2 py-1 text-sm text-indigo-200 rounded-full bg-indigo-600/30"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <a
//                       href={project.link}
//                       className="inline-flex items-center text-indigo-400 transition-colors hover:text-white"
//                     >
//                       <FaEye className="mr-2" /> View Project
//                     </a>
//                   </div>
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent hover:opacity-100"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   >
//                     Experience the Magic
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}

//         {/* Call to Action */}
//         <motion.div
//           className="py-16 text-center border bg-gray-900/50 rounded-xl border-indigo-600/30"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={categoryVariants}
//         >
//           <h2 className="mb-6 text-4xl font-bold text-white">
//             Ready to Create Something Extraordinary?
//           </h2>
//           <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
//             Let’s weave emotions into your next masterpiece. Contact me to start the journey.
//           </p>
//           <motion.a
//             href="/contact"
//             className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.6)" }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Ignite the Spark
//           </motion.a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaEye } from "react-icons/fa";
import Image from "next/image";

// Sample project data (updated categories)
const projects = {
  clients: {
    "Next gen UI UX": [
      {
        title: "Immersive Dashboard Experience",
        description: "A next-gen dashboard that redefines user interaction with stunning visuals and seamless transitions.",
        image: "/placeholder-uiux1.jpg",
        tech: ["Figma", "React", "Framer Motion"],
        link: "#",
      },
      {
        title: "E-Commerce Redesign",
        description: "A visually captivating e-commerce platform that makes shopping a delightful journey.",
        image: "/placeholder-uiux2.jpg",
        tech: ["Next.js", "Tailwind", "Three.js"],
        link: "#",
      },
    ],
    "Customized ML Models": [
      {
        title: "Predictive Sales Engine",
        description: "A tailored ML model that forecasts sales with precision, empowering businesses to soar.",
        image: "/placeholder-ml1.jpg",
        tech: ["TensorFlow", "Python", "Scikit-learn"],
        link: "#",
      },
      {
        title: "Personalized Recommendation System",
        description: "An ML-powered system that knows users better than they know themselves, driving engagement.",
        image: "/placeholder-ml2.jpg",
        tech: ["PyTorch", "AWS", "FastAPI"],
        link: "#",
      },
    ],
    "Conversational AI": [
      {
        title: "Emotion-Driven Chatbot",
        description: "A conversational AI that understands emotions, creating meaningful connections with users.",
        image: "/placeholder-ai1.jpg",
        tech: ["Dialogflow", "Node.js", "NLP"],
        link: "#",
      },
      {
        title: "Voice Assistant for Retail",
        description: "A voice AI that transforms retail experiences with natural, engaging conversations.",
        image: "/placeholder-ai2.jpg",
        tech: ["Rasa", "Google Cloud", "WebRTC"],
        link: "#",
      },
    ],
    "Web Dev": [
      {
        title: "Corporate Web Masterpiece",
        description: "A corporate website that blends elegance with functionality, leaving a lasting impression.",
        image: "/placeholder-web1.jpg",
        tech: ["Next.js", "TypeScript", "GraphQL"],
        link: "#",
      },
      {
        title: "Startup Landing Page",
        description: "A vibrant landing page that captures the spirit of innovation, driving conversions.",
        image: "/placeholder-web2.jpg",
        tech: ["React", "Tailwind", "Vercel"],
        link: "#",
      },
    ],
    "SEO optimization": [
      {
        title: "Organic Growth Rocket",
        description: "A powerful SEO strategy that skyrocketed organic traffic, making a brand unstoppable.",
        image: "/placeholder-seo1.jpg",
        tech: ["Ahrefs", "Google Analytics", "Schema"],
        link: "#",
      },
      {
        title: "E-Commerce SEO Overhaul",
        description: "An SEO transformation that boosted online visibility and sales through strategic optimization.",
        image: "/placeholder-seo2.jpg",
        tech: ["SEMrush", "Yoast", "Next.js"],
        link: "#",
      },
    ],
    "Mobile App Development": [
      {
        title: "Fitness Journey App",
        description: "A mobile app that inspires users to achieve their fitness dreams with an intuitive interface.",
        image: "/placeholder-mobile1.jpg",
        tech: ["Flutter", "Firebase", "Dart"],
        link: "#",
      },
      {
        title: "Travel Explorer App",
        description: "An app that brings travel dreams to life with immersive visuals and seamless navigation.",
        image: "/placeholder-mobile2.jpg",
        tech: ["React Native", "Mapbox", "Swift"],
        link: "#",
      },
    ],
  },
  organizations: {
    "Next gen UI UX": [
      {
        title: "Non-Profit Engagement Platform",
        description: "A UI/UX design for a non-profit that fosters community engagement through intuitive design.",
        image: "/placeholder-org-uiux1.jpg",
        tech: ["Adobe XD", "React", "CSS"],
        link: "#",
      },
    ],
    "Customized ML Models": [
      {
        title: "Healthcare Predictive Analytics",
        description: "An ML model for healthcare organizations, predicting patient outcomes with precision.",
        image: "/placeholder-org-ml1.jpg",
        tech: ["TensorFlow", "Python", "Pandas"],
        link: "#",
      },
    ],
    "Conversational AI": [
      {
        title: "Educational AI Tutor",
        description: "A conversational AI for educational institutions, enhancing learning through dialogue.",
        image: "/placeholder-org-ai1.jpg",
        tech: ["Rasa", "AWS", "MongoDB"],
        link: "#",
      },
    ],
    "Web Dev": [
      {
        title: "NGO Outreach Site",
        description: "A website for an NGO, designed to amplify their mission with emotional storytelling.",
        image: "/placeholder-org-web1.jpg",
        tech: ["Next.js", "MongoDB", "Tailwind"],
        link: "#",
      },
    ],
    "SEO optimization": [
      {
        title: "Charity SEO Boost",
        description: "An SEO strategy that increased visibility for a charity, driving more donations.",
        image: "/placeholder-org-seo1.jpg",
        tech: ["Google Analytics", "Ahrefs", "WordPress"],
        link: "#",
      },
    ],
    "Mobile App Development": [
      {
        title: "Community Connect App",
        description: "A mobile app for organizations to connect communities with impactful features.",
        image: "/placeholder-org-mobile1.jpg",
        tech: ["Flutter", "Firebase", "Kotlin"],
        link: "#",
      },
    ],
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
};

const cardVariants = {
  hover: {
    scale: 1.05, // Zoom effect
    boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4), 0 0 10px rgba(147, 51, 234, 0.3)",
    transition: { duration: 0.4 },
  },
  tap: { scale: 0.98, transition: { duration: 0.2 } },
};

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function Portfolio() {
  const [projectType, setProjectType] = useState<"clients" | "organizations">("clients");

  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-20 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center bg-no-repeat"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_30px_rgba(79,70,229,0.8)]"
            variants={heroVariants}
          >
            Unleash Your Vision
          </motion.h1>
          <motion.p
            className="max-w-2xl mt-4 text-xl text-gray-300 md:text-2xl"
            variants={heroVariants}
          >
            Step into a world where every project tells a story, sparks emotion, and wins hearts.
          </motion.p>
          {/* Toggle Menu in Cylindrical Container */}
          <motion.div
            className="mt-8 p-1 bg-gradient-to-r from-indigo-600/20 to-purple-700/20 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)]"
            variants={heroVariants}
          >
            <div className="flex justify-between">
              <button
                onClick={() => setProjectType("clients")}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 flex-1 min-w-40 ${
                  projectType === "clients"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                }`}
              >
                Clients Projects
              </button>
              <button
                onClick={() => setProjectType("organizations")}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 flex-1 min-w-40 ${
                  projectType === "organizations"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                }`}
              >
                Organizations Projects
              </button>
            </div>
          </motion.div>
          <motion.div
            className="mt-8"
            variants={heroVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaArrowDown className="text-4xl text-indigo-400 animate-bounce" />
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <div className="container px-4 py-16 mx-auto">
        {Object.entries(projects[projectType]).map(([category, projectsList]) => (
          <motion.div
            key={category}
            className="mb-20 category-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={categoryVariants}
          >
            <h2 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectsList.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden transition-all duration-300 border shadow-lg rounded-xl bg-gray-800/50 border-indigo-600/30 hover:shadow-2xl"
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mb-4 text-gray-400 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 text-sm text-indigo-200 rounded-full bg-indigo-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-indigo-400 transition-colors hover:text-white"
                    >
                      <FaEye className="mr-2" /> View Project
                    </a>
                  </div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Experience the Magic
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          className="py-16 text-center border bg-gray-900/50 rounded-xl border-indigo-600/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={categoryVariants}
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Let’s weave emotions into your next masterpiece. Contact me to start the journey.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.6)" }}
            whileTap={{ scale: 0.98 }}
          >
            Ignite the Spark
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}