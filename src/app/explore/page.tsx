"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Mistr AI",
    logo: "/logos/mistr-ai.png", // Replace with actual logo path
    description: "Cutting-edge AI-driven solutions for all industries, enhancing efficiency and innovation.",
    uiDesign: "Mistr AI features a sleek, minimalist UI with a dark theme, intuitive navigation, and interactive dashboards for real-time analytics.",
    link: "https://mistr-ai.com",
  },
  {
    name: "Automata AI",
    logo: "/logos/automata-ai.png",
    description: "AI-powered SaaS for supply chain management, optimizing logistics and operations.",
    uiDesign: "Automata AI uses a clean, modern UI with a focus on data visualization, drag-and-drop functionality, and a responsive layout.",
    link: "https://automata-ai.com",
  },
  {
    name: "HighClass",
    logo: "/logos/highclass.png",
    description: "AI-generated luxurious clothing brand, redefining fashion with technology.",
    uiDesign: "HighClass offers a luxurious UI with a golden palette, smooth animations, and a virtual try-on feature for an immersive experience.",
    link: "https://highclass.com",
  },
  {
    name: "Peveleon",
    logo: "/logos/peveleon.png",
    description: "AI-driven abroad education platform, simplifying the study abroad process.",
    uiDesign: "Peveleon features a user-friendly UI with a step-by-step application wizard, vibrant colors, and a chatbot for instant support.",
    link: "https://peveleon.com",
  },
  {
    name: "Agrani",
    logo: "/logos/agrani.png",
    description: "Next-gen defense sector intelligence platform, providing strategic insights.",
    uiDesign: "Agrani uses a secure, military-inspired UI with a dark theme, encrypted data views, and real-time threat mapping.",
    link: "https://agrani.com",
  },
  {
    name: "How Money Works",
    logo: "/logos/how-money-works.png",
    description: "Podcasts with world-class founders & investors, sharing financial insights.",
    uiDesign: "How Money Works has a podcast-focused UI with episode playlists, audio controls, and a sleek, modern design.",
    link: "https://howmoneyworks.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 py-12 bg-black">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,204,255,0.7)] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects
      </motion.h1>

      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 transition-all duration-300 border shadow-2xl bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl border-gray-600/30 hover:border-gray-400/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={60}
                height={60}
                className="mr-4"
              />
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
            </div>
            <p className="mb-4 text-gray-200">{project.description}</p>
            <h3 className="mb-2 text-lg font-semibold text-white">UI Design</h3>
            <p className="mb-4 text-gray-300">{project.uiDesign}</p>
            <Link href={project.link}>
              <motion.button
                className="px-6 py-2 text-lg font-bold text-white uppercase rounded-lg bg-transparent backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/80 hover:border-gray-300/80 hover:shadow-[0_0_12px_rgba(0,204,255,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Site
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}