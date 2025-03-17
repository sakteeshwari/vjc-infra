"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false); // Track user interaction

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarActive(true);
      }
    };

    const handleInteraction = () => {
      setIsNavbarActive(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Process", path: "/process" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="relative w-full tracking-wider leading-loose h-screen shadow-[0_-20px_20px_-10px_rgba(0,0,0,0.5)] ">
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
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`px-6 md:px-32 fixed z-40 top-0 left-0 w-full flex justify-between items-center p-6 text-white uppercase transition-all duration-500 ${
            isNavbarActive ? "bg-black" : "bg-transparent"
          }`}
        >
          <div className="font-extrabold text-xl drop-shadow-lg">VJC Infra</div>

          <ul className="hidden lg:flex space-x-6 text-white font-bold text-sm drop-shadow-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="hover:text-orange-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col text-center p-4">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.path} className="py-2 text-white hover:text-orange-600">
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/contact" className="py-2 text-white hidden font-bold text-sm lg:flex hover:text-orange-600">
            Contact
          </Link>
        </motion.nav>
      </motion.div>
    </div>
  );
}
