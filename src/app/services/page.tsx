"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Customized ML Models",
    description: "Tailored AI solutions for your business needs, including predictive analytics and automation.",
  },
  {
    name: "Next Gen UI/UX Design",
    description: "Modern, user-friendly designs for your applications, ensuring a seamless user experience.",
  },
  {
    name: "Web Development",
    description: "Scalable and optimized web solutions, from static sites to complex web applications.",
  },
  {
    name: "Agentic AI",
    description: "AI-powered automation for decision-making, streamlining business processes.",
  },
  {
    name: "SEO Optimization",
    description: "Boost your website’s visibility and ranking on search engines with proven strategies.",
  },
  {
    name: "Digital Marketing",
    description: "Comprehensive marketing strategies for online growth, including social media and content marketing.",
  },
];

// Simple AI logic to suggest services based on task description
const suggestServices = (task: string) => {
  const taskLower = task.toLowerCase();
  const suggestions: string[] = [];

  if (taskLower.includes("machine learning") || taskLower.includes("ai") || taskLower.includes("predict")) {
    suggestions.push("Customized ML Models", "Agentic AI");
  }
  if (taskLower.includes("design") || taskLower.includes("ui") || taskLower.includes("ux")) {
    suggestions.push("Next Gen UI/UX Design");
  }
  if (taskLower.includes("website") || taskLower.includes("web") || taskLower.includes("development")) {
    suggestions.push("Web Development");
  }
  if (taskLower.includes("seo") || taskLower.includes("search") || taskLower.includes("ranking")) {
    suggestions.push("SEO Optimization");
  }
  if (taskLower.includes("marketing") || taskLower.includes("social media") || taskLower.includes("growth")) {
    suggestions.push("Digital Marketing");
  }

  return suggestions.length > 0 ? suggestions : ["Please provide more details to suggest services."];
};

export default function ServicesPage() {
  const [taskDescription, setTaskDescription] = useState("");
  const [suggestedServices, setSuggestedServices] = useState<string[]>([]);

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const suggestions = suggestServices(taskDescription);
    setSuggestedServices(suggestions);
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-black">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,204,255,0.7)] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      {/* Services List */}
      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto mb-20 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 transition-all duration-300 border shadow-2xl bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl border-gray-600/30 hover:border-gray-400/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="mb-3 text-2xl font-bold text-white">{service.name}</h2>
            <p className="text-gray-200">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* AI Suggestion Feature */}
      <motion.div
        className="max-w-4xl p-8 mx-auto border shadow-2xl bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/70 backdrop-blur-md rounded-xl border-gray-600/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-white">Find the Right Services for Your Task</h2>
        <form onSubmit={handleTaskSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-200" htmlFor="task">
              Describe Your Task
            </label>
            <textarea
              id="task"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full px-4 py-2 text-white border rounded-lg bg-gray-700/50 border-gray-600/30 focus:outline-none focus:border-cyan-400/50"
              placeholder="e.g., I need a website with AI features and better search engine ranking..."
              rows={4}
              required
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="w-[200px] h-[50px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,204,255,0.7)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Suggest Services
            </motion.button>
          </div>
        </form>

        {/* Suggested Services */}
        {suggestedServices.length > 0 && (
          <motion.div
            className="p-4 mt-6 border rounded-lg bg-gray-700/50 border-gray-600/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-3 text-xl font-semibold text-white">Suggested Services:</h3>
            <ul className="text-gray-200 list-disc list-inside">
              {suggestedServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}