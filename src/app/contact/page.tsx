// "use client"; // Mark as Client Component for useState and animations

// import { useState, useCallback, useEffect } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRobot } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import dynamic from "next/dynamic";
// import { ReactElement } from "react";

// // Dynamically import Particles to avoid SSR issues
// const Particles = dynamic(() => import("@tsparticles/react").then((mod) => mod.Particles), { ssr: false });

// // Import tsparticles engine and slim for initialization
// import { loadSlim } from "@tsparticles/slim";

// // Contact Info Item Component
// const ContactInfoItem = ({ icon, text, delay }: { icon: ReactElement; text: string; delay: number }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ delay, duration: 0.5 }}
//     whileHover={{ y: -5, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
//     className="flex items-center p-4 text-lg border border-gray-700 rounded-lg bg-gray-900/30 backdrop-blur-md glow-border"
//   >
//     {icon}
//     <span className="transition-colors hover:text-white">{text}</span>
//   </motion.div>
// );

// // Contact Form Component
// const ContactForm = ({ intent, setIntent, suggestedMessages }: { intent: string; setIntent: (value: string) => void; suggestedMessages: { [key: string]: string } }) => {
//   const handleIntentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setIntent(e.target.value);
//   };

//   const typingVariants = {
//     hidden: { opacity: 0, width: 0 },
//     visible: {
//       opacity: 1,
//       width: "auto",
//       transition: { duration: 1.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
//       className="p-8 border border-gray-700 shadow-xl rounded-2xl bg-gray-900/50 backdrop-blur-md"
//       whileHover={{ y: -5, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
//     >
//       <motion.h2
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className="flex items-center mb-6 text-2xl font-semibold text-blue-300"
//       >
//         <FaRobot className="mr-2 text-purple-400 animate-pulse" /> AI-Assisted Contact
//       </motion.h2>
//       <form className="space-y-6">
//         <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
//           <label htmlFor="intent" className="block mb-2 text-sm font-medium text-gray-200">
//             What’s your purpose?
//           </label>
//           <select
//             id="intent"
//             name="intent"
//             value={intent}
//             onChange={handleIntentChange}
//             className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
//           >
//             <option value="client-inquiry">Client Inquiry (Project Requirements)</option>
//             <option value="demo-request">Request a Demo</option>
//             <option value="partnership">Partnership Opportunity</option>
//             <option value="job-application">Job Application</option>
//             <option value="internship">Internship Application (Students)</option>
//           </select>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
//           <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
//             placeholder="Your Name"
//             required
//           />
//         </motion.div>
//         <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.5 }}>
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
//             placeholder="Your Email"
//             required
//           />
//         </motion.div>
//         <AnimatePresence>
//           {intent === "job-application" || intent === "internship" ? (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-200">
//                 Upload Resume (Optional)
//               </label>
//               <input
//                 type="file"
//                 id="resume"
//                 name="resume"
//                 className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
//               />
//             </motion.div>
//           ) : null}
//         </AnimatePresence>
//         <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.5 }}>
//           <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={5}
//             className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
//             placeholder={suggestedMessages[intent]}
//             required
//           />
//         </motion.div>
//         <motion.button
//           type="submit"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.5 }}
//           whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 glow-effect"
//         >
//           <motion.span variants={typingVariants} initial="hidden" animate="visible">
//             Send Message
//           </motion.span>
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

// // Main Contact Component


// const Contact = () => {
//   const [intent, setIntent] = useState("client-inquiry");
//   const [showChatbotPrompt, setShowChatbotPrompt] = useState(true);

//   // Initialize particles
//   const particlesLoaded = useCallback(async (container: any) => {
//     await loadSlim(container);
//   }, []);
  

//   // Effect to ensure particles initialize after mount
//   useEffect(() => {
//   }, []);

//   // Suggested messages based on intent
//   const suggestedMessages: { [key: string]: string } = {
//     "client-inquiry": "We’d like to discuss a project requirement for our company...",
//     "demo-request": "I’d like to schedule a demo to explore your AI solutions...",
//     "partnership": "We’re interested in exploring a partnership with CLUMOSS...",
//     "job-application": "I’m applying for a position at CLUMOSS. Here’s my background...",
//     "internship": "I’m a student seeking an internship opportunity at CLUMOSS..."
//   };

//   // Particle options
//   const particlesOptions = {
//     particles: {
//       number: { value: 80, density: { enable: true, value_area: 800 } },
//       color: { value: ["#3b82f6", "#9333ea", "#ffffff"] },
//       shape: { type: "circle" },
//       opacity: { value: 0.5, random: true },
//       size: { value: 3, random: true },
//       links: {
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
//         resize: true,
//       },
//       modes: {
//         repulse: { distance: 100, duration: 0.4 },
//         push: { particles_nb: 4 },
//       },
//     },
//     detectRetina: true,
//   };

//   // Animation for typing effect
//   const typingVariants = {
//     hidden: { opacity: 0, width: 0 },
//     visible: {
//       opacity: 1,
//       width: "auto",
//       transition: { duration: 1.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div className="relative min-h-screen px-6 py-16 overflow-hidden text-white bg-gradient-to-b from-black via-gray-900 to-gray-800">
//       {/* Particle Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesLoaded}
//         options={particlesOptions}
//         className="absolute inset-0 pointer-events-none"
//       />

//       <div className="container relative z-10 max-w-5xl mx-auto">
//         {/* Header with Holographic Effect */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="mb-6 text-center"
//         >
//           <h1 className="text-5xl font-extrabold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 glow-text">
//             Contact CLUMOSS
//           </h1>
//           <motion.div
//             className="w-24 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
//           />
//         </motion.div>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//           className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-300"
//         >
//           Connect with us effortlessly. Our AI-driven system ensures your needs are met
//           swiftly—whether you’re a client, partner, or future team member.
//         </motion.p>

//         {/* Contact Form and Info */}
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
//           {/* Contact Form */}
//           <ContactForm intent={intent} setIntent={setIntent} suggestedMessages={suggestedMessages} />

//           {/* Contact Information with Floating Cards */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
//             className="flex flex-col justify-center p-8"
//           >
//             <motion.h2
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.9, duration: 0.5 }}
//               className="mb-6 text-2xl font-semibold text-purple-300"
//             >
//               Get in Touch
//             </motion.h2>
//             <div className="space-y-6 text-gray-300">
//               <ContactInfoItem
//                 icon={<FaEnvelope className="mr-4 text-blue-400" size={24} />}
//                 text="info@clumoss.com"
//                 delay={0.9}
//               />
//               <ContactInfoItem
//                 icon={<FaPhone className="mr-4 text-blue-400" size={24} />}
//                 text="+91 76228 17924"
//                 delay={1.1}
//               />
//               <ContactInfoItem
//                 icon={<FaMapMarkerAlt className="mr-4 text-blue-400" size={24} />}
//                 text="India"
//                 delay={1.3}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* AI Chatbot Prompt with Floating Animation */}
//       <AnimatePresence>
//         {showChatbotPrompt && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.5 }}
//             className="fixed p-4 rounded-lg shadow-lg bottom-6 right-6 z-[100] bg-gradient-to-r from-blue-500 to-purple-600 glow-effect"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
//           >
//             <div className="flex items-center space-x-3">
//               <motion.div
//                 animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//               >
//                 <FaRobot className="text-white" size={24} />
//               </motion.div>
//               <motion.p
//                 variants={typingVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-sm text-white"
//               >
//                 Need instant help? Chat with our AI assistant!
//               </motion.p>
//               <motion.button
//                 onClick={() => setShowChatbotPrompt(false)}
//                 whileHover={{ scale: 1.2, rotate: 90 }}
//                 className="text-white transition-colors hover:text-gray-200"
//               >
//                 ✕
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute rounded-full w-96 h-96 bg-blue-500/10 -top-48 -left-48 blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//           transition={{ repeat: Infinity, duration: 5 }}
//         />
//         <motion.div
//           className="absolute rounded-full w-96 h-96 bg-purple-500/10 -bottom-48 -right-48 blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//           transition={{ repeat: Infinity, duration: 5, delay: 2 }}
//         />  
//       </div>
//     </div>
//   );
// };

// export default Contact;


"use client"; // Mark as Client Component for useState and animations

import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRobot } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ReactElement } from "react";

// Contact Info Item Component
const ContactInfoItem = ({ icon, text, delay }: { icon: ReactElement; text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
    className="flex items-center p-4 text-lg border border-gray-700 rounded-lg bg-gray-900/30 backdrop-blur-md glow-border"
  >
    {icon}
    <span className="transition-colors hover:text-white">{text}</span>
  </motion.div>
);

// Contact Form Component
const ContactForm = ({ intent, setIntent, suggestedMessages }: { intent: string; setIntent: (value: string) => void; suggestedMessages: { [key: string]: string } }) => {
  const handleIntentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIntent(e.target.value);
  };

  const typingVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="p-8 border border-gray-700 shadow-xl rounded-2xl bg-gray-900/50 backdrop-blur-md"
      whileHover={{ y: -5, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex items-center mb-6 text-2xl font-semibold text-blue-300"
      >
        <FaRobot className="mr-2 text-purple-400 animate-pulse" /> AI-Assisted Contact
      </motion.h2>
      <form className="space-y-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <label htmlFor="intent" className="block mb-2 text-sm font-medium text-gray-200">
            What’s your purpose?
          </label>
          <select
            id="intent"
            name="intent"
            value={intent}
            onChange={handleIntentChange}
            className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
          >
            <option value="client-inquiry">Client Inquiry (Project Requirements)</option>
            <option value="demo-request">Request a Demo</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="job-application">Job Application</option>
            <option value="internship">Internship Application (Students)</option>
          </select>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
            placeholder="Your Name"
            required
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.5 }}>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
            placeholder="Your Email"
            required
          />
        </motion.div>
        <AnimatePresence>
          {intent === "job-application" || intent === "internship" ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-200">
                Upload Resume (Optional)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.5 }}>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 text-gray-200 placeholder-gray-300 transition-all duration-300 border border-gray-600 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 glow-border"
            placeholder={suggestedMessages[intent]}
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 glow-effect"
        >
          <motion.span variants={typingVariants} initial="hidden" animate="visible">
            Send Message
          </motion.span>
        </motion.button>
      </form>
    </motion.div>
  );
};

// Main Contact Component
const Contact = () => {
  const [intent, setIntent] = useState("client-inquiry");
  const [showChatbotPrompt, setShowChatbotPrompt] = useState(true);

  // Effect to ensure particles initialize after mount (removed since Particles is removed)
  useEffect(() => {
  }, []);

  // Suggested messages based on intent
  const suggestedMessages: { [key: string]: string } = {
    "client-inquiry": "We’d like to discuss a project requirement for our company...",
    "demo-request": "I’d like to schedule a demo to explore your AI solutions...",
    "partnership": "We’re interested in exploring a partnership with CLUMOSS...",
    "job-application": "I’m applying for a position at CLUMOSS. Here’s my background...",
    "internship": "I’m a student seeking an internship opportunity at CLUMOSS..."
  };

  // Animation for typing effect
  const typingVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative min-h-screen px-6 py-16 overflow-hidden text-white bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Header with Holographic Effect */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 text-center"
        >
          <h1 className="text-5xl font-extrabold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 glow-text">
            Contact CLUMOSS
          </h1>
          <motion.div
            className="w-24 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-300"
        >
          Connect with us effortlessly. Our AI-driven system ensures your needs are met
          swiftly—whether you’re a client, partner, or future team member.
        </motion.p>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <ContactForm intent={intent} setIntent={setIntent} suggestedMessages={suggestedMessages} />

          {/* Contact Information with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center p-8"
          >
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mb-6 text-2xl font-semibold text-purple-300"
            >
              Get in Touch
            </motion.h2>
            <div className="space-y-6 text-gray-300">
              <ContactInfoItem
                icon={<FaEnvelope className="mr-4 text-blue-400" size={24} />}
                text="info@clumoss.com"
                delay={0.9}
              />
              <ContactInfoItem
                icon={<FaPhone className="mr-4 text-blue-400" size={24} />}
                text="+91 76228 17924"
                delay={1.1}
              />
              <ContactInfoItem
                icon={<FaMapMarkerAlt className="mr-4 text-blue-400" size={24} />}
                text="India"
                delay={1.3}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Chatbot Prompt with Floating Animation */}
      <AnimatePresence>
        {showChatbotPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed p-4 rounded-lg shadow-lg bottom-6 right-6 z-[100] bg-gradient-to-r from-blue-500 to-purple-600 glow-effect"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaRobot className="text-white" size={24} />
              </motion.div>
              <motion.p
                variants={typingVariants}
                initial="hidden"
                animate="visible"
                className="text-sm text-white"
              >
                Need instant help? Chat with our AI assistant!
              </motion.p>
              <motion.button
                onClick={() => setShowChatbotPrompt(false)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                className="text-white transition-colors hover:text-gray-200"
              >
                ✕
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full w-96 h-96 bg-blue-500/10 -top-48 -left-48 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className="absolute rounded-full w-96 h-96 bg-purple-500/10 -bottom-48 -right-48 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, delay: 2 }}
        />  
      </div>
    </div>
  );
};

export default Contact;