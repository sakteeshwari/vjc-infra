"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const sections = [
  {
    title: "Water University",
    description:
      "This 9,380-square-foot Water University facility includes operation equipment that clients will use to learn how to minimize water use...",
    client: "Customer Experience Center",
    industry: "Industrial Commercial",
    sector: "Educational & Technology, AV",
    image: "/assets/water.png",
  },
  {
    title: "Schneider Schaumburg",
    description:
      "Maman Corp completed the consolidation of Schneider Chicagoland offices into one space...",
    client: "Office Consolidation",
    industry: "Industry",
    sector: "Commercial",
    image: "/assets/schneider.png",
  },
  {
    title: "Administration and Meeting spaces",
    description:
      "Complete build of administration buildings. The space consisted of meeting spaces, gathering space and much more...",
    client: "Corporate",
    industry: "Industry",
    sector: "Commercial",
    image: "/assets/smart.png",
  },
  {
    title: "Ecolab Lobby",
    description:
      "Maman Corp has strong expertise which allows us to work with all kinds of environment structures...",
    client: "Client",
    industry: "Industrial",
    sector: "Sector",
    image: "/assets/ecolab.png",
  },
  {
    title: "High Security Spaces & Data Centers",
    description:
      "Many of our projects cannot be featured in this section due to security levels...",
    client: "Many",
    industry: "Commercial",
    sector: "Corporate",
    image: "/assets/high.png",
  },
];

export default function FullPageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "down") {
        return prevIndex < sections.length - 1 ? prevIndex + 1 : prevIndex; // Move down
      } else {
        return prevIndex > 0 ? prevIndex - 1 : prevIndex; // Move up
      }
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-6 lg:px-20 bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          style={{ display: currentIndex === index ? "flex" : "none" }}
        >
          {/* Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-orange-600">{section.title}</h1>
            <p className="mt-4 text-gray-700 tracking-wider lg:text-lg">{section.description}</p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img src={section.image} alt={section.title} className="w-96 md:w-[500px] shadow-lg" />
          </div>

          {/* Navigation & Info */}
          <div className="absolute bottom-6 w-full max-w-4xl bg-orange-600 text-white py-4 px-6 flex justify-between lg:justify-center lg:gap-20 items-center">
            {/* Single Arrow Button */}
            <button
              onClick={() => handleScroll("down")}
              className="h-12 w-12 flex items-center justify-center"
              style={{ display: currentIndex < sections.length - 1 ? "flex" : "none" }} // Hide when at last slide
            >
              <ChevronDown size={24} className="text-white" />
            </button>

            <button
              onClick={() => handleScroll("up")}
              className="h-12 w-12 flex items-center justify-center"
              style={{ display: currentIndex > 0 ? "flex" : "none" }} // Hide when at first slide
            >
              <ChevronUp size={24} className="text-white" />
            </button>


            {/* Client, Industry, Sector Info */}
            <div className="flex gap-8 text-xs uppercase tracking-widest">
              <div className="flex flex-col">
                <span className="text-gray-300">Client</span>
                <span className="font-medium">{section.client}</span>
              </div>
              <div className="flex flex-col border-l border-white pl-6">
                <span className="text-gray-300">Industry</span>
                <span className="font-medium">{section.industry}</span>
              </div>
              <div className="flex flex-col border-l border-white pl-6">
                <span className="text-gray-300">Sector</span>
                <span className="font-medium">{section.sector}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
