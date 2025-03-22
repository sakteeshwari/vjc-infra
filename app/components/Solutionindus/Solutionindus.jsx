'use client';

import { useState } from 'react';

export default function ConstructionSection() {
  const [hovered, setHovered] = useState(null);

  const items = [
    { name: "Industrial", image: "/assets/solutionindus.png" },
    { name: "New Construction", image: "/assets/new-construction.png" },
    { name: "Renovations", image: "/assets/renovation.png" },
    { name: "Start-up", image: "/assets/startup.png" },
    { name: "Tenant Improvements", image: "/assets/tenant.png" },
  ];

  return (
    <div className="relative w-full px-8 md:px-16 lg:px-32 xl:px-44 py-16 bg-white">
      {/* Image and Text Container */}
      <div className="relative flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-left md:pr-16">
          <ul className="lg:text-3xl text-lg text-gray-800">
            {items.map((item, index) => (
              <li
                key={index}
                className={`transition-all duration-500 cursor-pointer flex items-center gap-3 mt-5 lg:mt-10 group min-w-[200px]
                  ${hovered === index ? "opacity-100 text-black font-semibold" : "opacity-40"}
                `}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className={`transition-transform duration-500 transform ${
                    hovered === index ? "text-orange-600 translate-x-2" : "text-orange-400"
                  }`}
                >
                  →
                </span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section (Fixed size to avoid flickering) */}
        <div className="md:w-1/2 mt-10 w-full relative h-[300px] md:h-[400px]">
          <img
            src={hovered !== null ? items[hovered].image : "/assets/solutionindus.png"}
            alt="Construction Preview"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
            style={{
              opacity: hovered !== null ? 1 : 0.9,
            }}
          />
        </div>
      </div>
      
    </div>
   
  );
}
