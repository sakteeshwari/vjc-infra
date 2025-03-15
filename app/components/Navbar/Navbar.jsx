"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install if not added: npm install lucide-react

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full tracking-wider leading-loose h-screen shadow-[0_-20px_20px_-10px_rgba(0,0,0,0.5)]">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/construction-video2.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-60"></div>
      </div>

      {/* Navbar */}
      <nav className="px-6 md:px-32 absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white uppercase bg-opacity-40">
        <div className="font-extrabold text-xl drop-shadow-lg">VJC Infra</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-bold text-sm drop-shadow-lg">
          <li><a href="#" className="hover:text-orange-600">Home</a></li>
          <li><a href="#" className="hover:text-orange-600">Solutions</a></li>
          <li><a href="#" className="hover:text-orange-600">Process</a></li>
          <li><a href="#" className="hover:text-orange-600">Projects</a></li>
          <li><a href="#" className="hover:text-orange-600">About Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col text-center p-4">
            <a href="#" className="py-2 text-white hover:text-orange-600">Home</a>
            <a href="#" className="py-2 text-white hover:text-orange-600">Solutions</a>
            <a href="#" className="py-2 text-white hover:text-orange-600">Process</a>
            <a href="#" className="py-2 text-white hover:text-orange-600">Projects</a>
            <a href="#" className="py-2 text-white hover:text-orange-600">About Us</a>
          </div>
          
        )}
        <div>
        <a href="#" className="py-2 text-white hover:text-orange-600">contact</a>
        </div>
      </nav>

      {/* Content Section */}
      <div className="absolute bottom-0 w-full flex flex-col md:flex-row">
        <div className="bg-red-500 pl-6 md:pl-32 text-white w-full md:w-[40%] p-10">
          <p className="text-xs uppercase text-gray-300">Experts Since 1997</p>
          <h1 className="text-2xl font-bold mt-2">
            Maman Corp. is a comprehensive construction management team and general contractor.
          </h1>
        </div>
        <div className="bg-red-500 text-white w-full md:w-[30%] p-10">
          <p className="mt-4 text-sm text-gray-300">
            We create environments for your team to do its best work. We do it through expertise, creativity, and attention to every detail—our ingredients for over 20 years of success.
          </p>
        </div>
        <div className="flex items-center bg-white w-full md:w-[20%] justify-center">
          <p className="text-red-600 font-bold">Scroll to discover</p>
        </div>
        <div className="flex items-center justify-center  w-full md:w-[10%] p-4">
          <svg
            className="h-12 text-red-600 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
