"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Water University",
    description: "This 9,380-square-foot Water University facility includes operation equipment that clients will use to learn how to minimize water use...",
    client: "Customer Experience",
    industry: "Industrial Commercial",
    sector: "Technology, AV",
    image: "/assets/water.png",
  },
  {
    title: "Schneider Schaumburg",
    description: "Maman Corp completed the consolidation of Schneider Chicagoland offices into one space...",
    client: "Office Consolidation",
    industry: "Industry",
    sector: "Commercial",
    image: "/assets/schneider.png",
  },
  {
    title: "Administration and Meeting spaces",
    description: "Complete build of administration buildings. The space consisted of meeting spaces, gathering space and much more...",
    client: "Corporate",
    industry: "Industry",
    sector: "Commercial",
    image: "/assets/smart.png",
  },
  {
    title: "Ecolab Lobby",
    description: "Maman Corp has strong expertise which allows us to work with all kinds of environment structures...",
    client: "Client",
    industry: "Industrial",
    sector: "Sector",
    image: "/assets/ecolab.png",
  },
  {
    title: "High Security Spaces & Data Centers",
    description: "Many of our projects cannot be featured in this section due to security levels...",
    client: "Many",
    industry: "Commercial",
    sector: "Corporate",
    image: "/assets/high.png",
  },
];

export default function FullPageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle scrolling and button clicks
  const handleScroll = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;
      if (direction === "down") {
        newIndex = Math.min(prevIndex + 1, sections.length - 1);
      } else if (direction === "up") {
        newIndex = Math.max(prevIndex - 1, 0);
      }
      return newIndex;
    });

    setTimeout(() => setIsAnimating(false), 600);
  };

  // Handle mouse wheel scrolling
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        handleScroll("down");
      } else {
        handleScroll("up");
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-6 lg:px-20 bg-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
        >
          {/* Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-orange-600">
              {sections[currentIndex].title}
            </h1>
            <p className="mt-4 text-gray-700 tracking-wider lg:text-lg">
              {sections[currentIndex].description}
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src={sections[currentIndex].image}
              alt={sections[currentIndex].title}
              className="w-96 md:w-[500px] shadow-lg"
            />
          </div>

          {/* Navigation & Info */}
          <div className="absolute bottom-6 w-full max-w-4xl bg-orange-600 text-white py-4 px-6 flex justify-between lg:justify-center lg:gap-20 items-center">
            
            {/* Up Arrow */}
            <button
              onClick={() => handleScroll("up")}
              className={`h-12 w-12 flex items-center justify-center ${
                currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-10 w-10 hover:stroke-orange-400 transition-colors duration-300"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </motion.svg>
            </button>

            {/* Client, Industry, Sector Info */}
            <div className="flex gap-8 text-xs tracking-widest">
              <div className="flex flex-col">
                <span className="text-gray-300 uppercase">Client</span>
                <span className="font-medium">{sections[currentIndex].client}</span>
              </div>
              <div className="flex flex-col border-l border-white pl-6">
                <span className="text-gray-300 uppercase">Industry</span>
                <span className="font-medium">{sections[currentIndex].industry}</span>
              </div>
              <div className="flex flex-col border-l border-white pl-6">
                <span className="text-gray-300 uppercase">Sector</span>
                <span className="font-medium">{sections[currentIndex].sector}</span>
              </div>
            </div>

            {/* Down Arrow */}
            <button
              onClick={() => handleScroll("down")}
              className={`h-10 w-10 flex items-center justify-center ${
                currentIndex === sections.length - 1 ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-12 hover:stroke-orange-400 transition-colors duration-300"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </motion.svg>
            </button>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
