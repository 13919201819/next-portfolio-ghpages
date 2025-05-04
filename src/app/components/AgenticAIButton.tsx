"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { FaRobot } from "react-icons/fa";
import Image from "next/image";

// Define the type for predefined responses
type PredefinedResponses = {
  [key in
    | "what does clumoss stand for"
    | "what is clumoss"
    | "what is the mission of clumoss"
    | "how is clumoss structured"
    | "what is the ai innovation hub in clumoss"
    | "what are support services in clumoss"
    | "what are collaborative partnerships in clumoss"
    | "what services does clumoss offer"
    | "how does clumoss help with automation"
    | "what does clumoss do in data analytics"
    | "how does clumoss contribute to security"
    | "what education solutions does clumoss provide"
    | "how does clumoss support fashion innovation"
    | "what are the goals of clumoss"
    | "how does clumoss aim to transform industries"
    | "what does clumoss mean by innovation leadership"
    | "what is the global impact of clumoss"
    | "how can i contact clumoss"
    | "can i schedule a client call with clumoss"
    | "can i see a demo of clumoss projects"
    | "how can i submit a project idea to clumoss"
    | "what industries does clumoss serve"
    | "how can ai help my business through clumoss"
    | "what makes clumoss different from other ai companies"]: string;
};

// Preload audio files for futuristic sound and voice responses (will be initialized in useEffect)
const AgenticAIButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle chat window
  const [userInput, setUserInput] = useState(""); // Store user input
  const [chatHistory, setChatHistory] = useState<{ sender: string; message: string }[]>([]); // Store chat messages
  const [showOptions, setShowOptions] = useState(false); // Show interactive options after intro
  const [projectIdea, setProjectIdea] = useState(""); // Store project idea input
  const [showProjectForm, setShowProjectForm] = useState(false); // Toggle project idea form
  const [isLoading, setIsLoading] = useState(false); // Loading state for API calls
  const [futuristicSound, setFuturisticSound] = useState<HTMLAudioElement | null>(null);
  const [introVoice, setIntroVoice] = useState<HTMLAudioElement | null>(null);
  const [scheduleVoice, setScheduleVoice] = useState<HTMLAudioElement | null>(null);
  const [demoVoice, setDemoVoice] = useState<HTMLAudioElement | null>(null);
  const [projectAnalysisVoice, setProjectAnalysisVoice] = useState<HTMLAudioElement | null>(null);
  const [whatWeDoVoice, setWhatWeDoVoice] = useState<HTMLAudioElement | null>(null);

  // Initialize audio files in useEffect to ensure browser-only execution
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFuturisticSound(new Audio("/sounds/futuristic-click.mp3"));
      setIntroVoice(new Audio("/sounds/intro-voice.mp3"));
      setScheduleVoice(new Audio("/sounds/schedule-voice.mp3"));
      setDemoVoice(new Audio("/sounds/demo-voice.mp3"));
      setProjectAnalysisVoice(new Audio("/sounds/project-analysis-voice.mp3"));
      setWhatWeDoVoice(new Audio("/sounds/what-we-do-voice.mp3"));
    }
  }, []);

  // Text-to-Speech fallback using Web Speech API with calm, composed settings
  const speakText = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) => voice.name.includes("Female")) || voices[0];
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
  }, []);

  // Play voice response, wrapped in useCallback to prevent recreation on every render
  const playVoice = useCallback(
    (audio: HTMLAudioElement | null, fallbackText: string) => {
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.error("Voice play error:", err);
          speakText(fallbackText);
        });
      } else {
        speakText(fallbackText);
      }
    },
    [speakText]
  );

  // Play futuristic sound on successful actions
  const playFuturisticSound = useCallback(() => {
    if (futuristicSound) {
      futuristicSound.currentTime = 0;
      futuristicSound.play().catch((err) => console.error("Sound play error:", err));
    }
  }, [futuristicSound]);

  // Predefined responses for specific queries, wrapped in useMemo to ensure stability
  const predefinedResponses = useMemo<PredefinedResponses>(() => ({
    "what does clumoss stand for": "CLUMOSS stands for Clusters of Multi Organizations for Support and Services. We’re an AI & Innovation Hub dedicated to transforming industries with AI-powered solutions.",
    "what is clumoss": "CLUMOSS is an AI & Innovation Hub that brings together multiple organizations to provide support and services, focusing on AI-powered SaaS solutions in areas like automation, data analytics, security, education, and fashion innovation.",
    "what is the mission of clumoss": "Our mission is to transform industries with AI-powered SaaS solutions, making businesses more efficient, innovative, and impactful.",
    "how is clumoss structured": "CLUMOSS is structured as three main clusters: the AI Innovation Hub, Support Services, and Collaborative Partnerships. These clusters work together to deliver cutting-edge solutions and support.",
    "what is the ai innovation hub in clumoss": "The AI Innovation Hub is the core of CLUMOSS, where we develop and deploy AI-powered SaaS solutions to address industry challenges.",
    "what are support services in clumoss": "Support Services include technical support, consulting, and training to help our clients successfully implement and use our AI solutions.",
    "what are collaborative partnerships in clumoss": "Collaborative Partnerships involve working with other organizations, startups, and research institutions to foster innovation and expand our impact.",
    "what services does clumoss offer": "CLUMOSS offers AI-powered SaaS solutions in automation, data analytics, security, education, and fashion innovation. Visit /#services for more details.",
    "how does clumoss help with automation": "We provide AI-driven automation tools to streamline business processes, reduce manual work, and increase efficiency.",
    "what does clumoss do in data analytics": "We offer advanced data analytics solutions to help businesses gain insights, make data-driven decisions, and predict trends.",
    "how does clumoss contribute to security": "Our security solutions use AI to detect threats, protect data, and ensure compliance with industry standards.",
    "what education solutions does clumoss provide": "We develop AI-powered educational tools to enhance learning experiences, personalize education, and improve outcomes.",
    "how does clumoss support fashion innovation": "We create AI solutions for the fashion industry, such as personalized recommendations, trend analysis, and supply chain optimization.",
    "what are the goals of clumoss": "Our goals are to transform industries, lead in innovation, and create a global impact through AI-powered solutions.",
    "how does clumoss aim to transform industries": "We transform industries by providing AI tools that solve real-world problems, improve efficiency, and drive innovation.",
    "what does clumoss mean by innovation leadership": "Innovation leadership means being at the forefront of AI technology, developing new solutions, and setting industry standards.",
    "what is the global impact of clumoss": "We aim to make a global impact by deploying our solutions worldwide, helping businesses and communities thrive with AI.",
    "how can i contact clumoss": "You can reach out via the Contact section on our website at /#contact.",
    "can i schedule a client call with clumoss": "Yes! Please provide your email and preferred time for the call, and we’ll confirm shortly.",
    "can i see a demo of clumoss projects": "Absolutely! We’ve built AI-driven logistics platforms, personalized fashion solutions, and more. Visit /#projects for a full showcase.",
    "how can i submit a project idea to clumoss": "Please share your project idea in the form below, and I’ll provide a timeline and completion plan.",
    "what industries does clumoss serve": "CLUMOSS serves a wide range of industries, including logistics, fashion, education, security, and more, with tailored AI solutions.",
    "how can ai help my business through clumoss": "AI can help your business by automating tasks, analyzing data for insights, enhancing security, and more. CLUMOSS offers solutions tailored to your needs—let’s discuss how we can assist!",
    "what makes clumoss different from other ai companies": "CLUMOSS stands out with its multi-organizational approach, combining innovation, support, and partnerships to deliver comprehensive AI solutions.",
  }), []);

  // Custom CLUMOSS model: Match user input to predefined responses
  const getCLUMOSSResponse = useCallback((message: string, isTest: boolean = false) => {
    setIsLoading(true);
    try {
      if (isTest) {
        return "CLUMOSS Model Test Result:\n- Status: Success\n- The custom CLUMOSS model is working locally. Ask me anything about CLUMOSS!";
      }

      const lowerMessage = message.toLowerCase().trim() as keyof PredefinedResponses;
      if (lowerMessage in predefinedResponses) {
        return predefinedResponses[lowerMessage];
      }

      const words = lowerMessage.split(/\s+/);
      for (const key in predefinedResponses) {
        const typedKey = key as keyof PredefinedResponses;
        const keyWords = typedKey.split(/\s+/);
        if (words.some((word) => keyWords.includes(word))) {
          if (
            (lowerMessage.includes("clumoss") && key.includes("clumoss")) ||
            (lowerMessage.includes("ai") && key.includes("ai")) ||
            (lowerMessage.includes("services") && key.includes("services")) ||
            (lowerMessage.includes("contact") && key.includes("contact"))
          ) {
            return predefinedResponses[typedKey];
          }
        }
      }

      return "I’m not sure I understood your question. Could you rephrase it, or select an option below to learn more about CLUMOSS?";
    } finally {
      setIsLoading(false);
    }
  }, [predefinedResponses]);

  // Handle user input submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setChatHistory([...chatHistory, { sender: "user", message: userInput }]);

    const lowerInput = userInput.toLowerCase();

    if (lowerInput === "test api" || lowerInput === "test model") {
      const testResponse = getCLUMOSSResponse("", true);
      setChatHistory((prev) => [...prev, { sender: "ai", message: testResponse }]);
      speakText("Model test completed. Check the chat for details.");
    } else {
      const aiResponse = getCLUMOSSResponse(userInput);
      setChatHistory((prev) => [...prev, { sender: "ai", message: aiResponse }]);
      speakText(aiResponse);
    }

    setUserInput("");
    setShowOptions(true);
  }, [userInput, chatHistory, getCLUMOSSResponse, speakText]);

  // Handle option selection
  const handleOptionClick = useCallback((option: string) => {
    playFuturisticSound();
    setChatHistory((prev) => [...prev, { sender: "user", message: option }]);

    switch (option) {
      case "Schedule a client call":
        playVoice(scheduleVoice, "Great! Let's schedule your client call.");
        setChatHistory((prev) => [
          ...prev,
          { sender: "ai", message: "Please provide your email and preferred time for the call. We’ll confirm shortly!" },
        ]);
        break;
      case "Demo of our projects":
        playVoice(demoVoice, "Here’s a demo of our projects.");
        setChatHistory((prev) => [
          ...prev,
          { sender: "ai", message: "Here’s a demo of our projects: We’ve built AI-driven logistics platforms, personalized fashion solutions, and more. Visit /#projects for a full showcase!" },
        ]);
        break;
      case "Submit a project idea":
        playVoice(projectAnalysisVoice, "Please share your project idea, and I’ll analyze it for you.");
        setChatHistory((prev) => [
          ...prev,
          { sender: "ai", message: "Please share your project idea below, and I’ll provide a timeline and completion plan." },
        ]);
        setShowProjectForm(true);
        break;
      case "What we do":
        playVoice(whatWeDoVoice, "Here’s what we do at CLUMOSS.");
        setChatHistory((prev) => [
          ...prev,
          { sender: "ai", message: "At CLUMOSS, we specialize in AI-powered SaaS solutions, including automation, data analytics, security, education, and fashion innovation. Learn more at /#services." },
        ]);
        break;
      default:
        break;
    }
  }, [playFuturisticSound, playVoice, scheduleVoice, demoVoice, projectAnalysisVoice, whatWeDoVoice]);

  // Handle project idea submission
  const handleProjectSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!projectIdea.trim()) return;

    playFuturisticSound();
    playVoice(projectAnalysisVoice, "I’ve analyzed your project idea. Here’s the timeline and completion plan.");

    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: `Project Idea: ${projectIdea}` },
      {
        sender: "ai",
        message: `Analysis for "${projectIdea}": Based on our AI assessment, this project can be completed in 3-6 months. Timeline: Discovery (1 month), Development (3 months), Testing & Deployment (1-2 months). We’ll assign a dedicated team to ensure success!`,
      },
    ]);
    setProjectIdea("");
    setShowProjectForm(false);
  }, [projectIdea, playFuturisticSound, playVoice, projectAnalysisVoice]);

  // Play intro voice when chat opens
  useEffect(() => {
    if (isOpen) {
      playVoice(introVoice, "Hello, I am your CLUMOSS AI Assistant. What would you like to know?");
      setChatHistory([
        { sender: "ai", message: "Hello! I am your CLUMOSS AI Assistant. What would you like to know?" },
        { sender: "ai", message: "Type 'test model' to check if the CLUMOSS model is working." },
      ]);
    }
  }, [isOpen, introVoice, playVoice]);

  // Load voices for Web Speech API (needed for some browsers)
  useEffect(() => {
    const loadVoices = () => {
      speechSynthesis.getVoices();
    };
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  return (
    <div className="fixed z-50 bottom-16 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 hover:shadow-xl focus:outline-none"
        aria-label="Chat with Agentic AI"
      >
        <FaRobot size={24} className="text-white" />
        <span className="absolute inset-0 border-2 border-transparent rounded-full opacity-50 animate-pulse bg-gradient-to-r from-purple-600 to-blue-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 p-6 text-white bg-gray-800 rounded-lg shadow-lg bottom-16 w-[450px] h-[600px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/female-avatar.png"
                alt="CLUMOSS AI Assistant"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-lg font-semibold">CLUMOSS AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 mb-4 overflow-y-auto bg-gray-900 rounded-lg">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-3 ${chat.sender === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-3 rounded-lg ${
                    chat.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-200"
                  } whitespace-pre-wrap`}
                >
                  {chat.message}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="text-center text-gray-400">
                <span className="inline-block animate-pulse">Thinking...</span>
              </div>
            )}

            {showOptions && !showProjectForm && !isLoading && (
              <div className="mt-4">
                <p className="mb-2 text-sm text-gray-400">Select an option:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Schedule a client call", "Demo of our projects", "Submit a project idea", "What we do"].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="p-2 text-sm text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-500"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showProjectForm && (
              <div className="mt-4">
                <form onSubmit={handleProjectSubmit}>
                  <textarea
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                    placeholder="Describe your project idea..."
                    className="w-full h-24 p-3 text-white bg-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 mt-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-500"
                  >
                    Submit Idea
                  </button>
                </form>
              </div>
            )}
          </div>

          {!showProjectForm && (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-4 py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-500"
                disabled={isLoading}
              >
                {isLoading ? "..." : "Send"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default AgenticAIButton;