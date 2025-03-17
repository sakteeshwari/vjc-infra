"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

 

  return (
    <div className="relative w-full tracking-wider leading-loose h-screen shadow-[0_-20px_20px_-10px_rgba(0,0,0,0.5)]">
                   

      {/* Animated Homepage */}
      
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/assets/construction-video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-opacity-60"></div>
          </div>

          {/* Navbar */}
          <motion.nav
      initial={{ y: -100, opacity: 0 }} // Start position (above the screen)
      animate={{ y: 0, opacity: 1 }} // End position (normal)
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="px-6 md:px-32 absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white uppercase bg-opacity-40"
    >
      <div className="font-extrabold text-xl drop-shadow-lg">VJC Infra</div>

      <ul className="hidden lg:flex space-x-6 text-white font-bold text-sm drop-shadow-lg">
        <li><a href="#" className="hover:text-orange-600">Home</a></li>
        <li><a href="#" className="hover:text-orange-600">Solutions</a></li>
        <li><a href="#" className="hover:text-orange-600">Process</a></li>
        <li><a href="#" className="hover:text-orange-600">Projects</a></li>
        <li><a href="#" className="hover:text-orange-600">About Us</a></li>
      </ul>

      <button className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col text-center p-4">
          <a href="#" className="py-2 text-white hover:text-orange-600">Home</a>
          <a href="#" className="py-2 text-white hover:text-orange-600">Solutions</a>
          <a href="#" className="py-2 text-white hover:text-orange-600">Process</a>
          <a href="#" className="py-2 text-white hover:text-orange-600">Projects</a>
          <a href="#" className="py-2 text-white hover:text-orange-600">About Us</a>
        </div>
      )}

      <a href="#" className="py-2 text-white hidden font-bold text-sm lg:flex hover:text-orange-600">
        Contact
      </a>
    </motion.nav>

          
        </motion.div>
      
    </div>
  );
}
