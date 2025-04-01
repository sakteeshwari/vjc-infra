"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar({ isSlideOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarActive(true);
      } else if (!isMenuOpen) {
        setIsNavbarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsNavbarActive(pathname !== "/");
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solution" },
    { name: "Process", path: "/process" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`relative w-full tracking-wider leading-loose ${pathname === "/" ? "h-screen" : ""}`}>
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
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`px-6 md:px-32 fixed z-40 top-0 left-0 w-full flex justify-between items-center py-4 text-white uppercase transition-all duration-500 
          ${isNavbarActive || isMenuOpen || isSlideOpen ? "bg-gray-500" : "bg-gradient-to-b from-black/50 to-transparent"}`}
      >
        <Link href="/">
          <motion.img
            src="/assets/logo-vjc.png"
            style={{
              filter: "contrast(1.2) brightness(1.2)",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.5) drop-shadow(0px 0px 10px rgba(255,255,255,0.8))" }}
            whileTap={{ scale: 0.9 }}
            className="h-12 w-24 transition-all duration-300"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 font-bold text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`hover:text-orange-600 transition-all duration-300 ${
                  pathname === link.path ? "text-orange-600 font-extrabold underline pointer-events-none" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: isMenuOpen ? 1.1 : 1, rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-gray-500 bg-opacity-95 flex flex-col text-center p-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`py-3 text-lg font-semibold transition-all duration-300 ${
                  pathname === link.path ? "text-orange-600 font-extrabold underline pointer-events-none" : "text-white hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
