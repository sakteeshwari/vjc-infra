"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Detects current page
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const pathname = usePathname(); // ✅ Get the current route

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
    if (pathname !== "/") {
      setIsNavbarActive(true);
    } else {
      setIsNavbarActive(false);
    }
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solution" },
    { name: "Process", path: "/process" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className={`relative w-full tracking-wider leading-loose shadow-[0_-20px_20px_-10px_rgba(0,0,0,0.5)] ${pathname === "/" ? "h-screen" : ""}`}>

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
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`px-6 md:px-32 fixed z-40 top-0 left-0 w-full flex justify-between items-center p-6 text-white uppercase transition-all duration-500 
          ${isNavbarActive || isMenuOpen ? "bg-gray-500" : "bg-gradient-to-b from-black/50 to-transparent"}`}
      >
       <Link href="/">
  <motion.img 
    src="/assets/logo-vjc.png"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120 }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.9 }}
    className="h-12 w-24 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"  // Added stronger glow
    alt="Logo" 
  />
</Link>

        <ul className="hidden lg:flex space-x-6 text-white font-bold text-sm drop-shadow-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`hover:text-orange-600 ${pathname === link.path ? "text-orange-600 pointer-events-none" : ""}`} // ✅ Highlight active page
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: isMenuOpen ? 1.1 : 1, rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isMenuOpen ? (
            <motion.span
              initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 90, scale: 1 }}
              exit={{ opacity: 0, rotate: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <X size={28} />
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Menu size={28} />
            </motion.span>
          )}
        </motion.button>

        {isMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-gray-500 bg-opacity-90 flex flex-col text-center p-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`py-5 text-white hover:text-orange-600 ${pathname === link.path ? "text-orange-600 pointer-events-none" : ""}`} // ✅ Highlight and disable active page
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Contact Us Link */}
            <Link
              href="/contact"
              className={`py-6 text-white font-bold text-sm hover:text-orange-600 ${pathname === "/contact" ? "text-orange-600 pointer-events-none" : ""}`} // ✅ Highlight and disable
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}

        <Link
          href="/contact"
          className={`py-2 text-white hidden font-bold text-sm lg:flex hover:text-orange-600 ${pathname === "/contact" ? "text-orange-600 pointer-events-none" : ""}`} // ✅ Highlight and disable
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </motion.nav>
    </div>
  );
}
