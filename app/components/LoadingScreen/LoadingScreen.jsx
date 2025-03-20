"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0); // Start counting from 0

  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      let count = 1;
      const interval = setInterval(() => {
        count += 1;
        setCount(count);
        if (count >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small delay before exit animation
        }
      }, 30);
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Animated Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: "-100%", opacity: 0 }} // Exit animation (Bottom to Top)
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[url('/assets/loadingbg.png')] bg-cover opacity-10"></div>

            {/* Animated Company Name */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="lg:text-5xl text-3xl font-extrabold text-red-500"
            >
              VJC INFRA
            </motion.div>

            {/* Subtitle */}
            <p className="text-sm tracking-widest uppercase text-gray-600 mt-2">
              Construction Solutions
            </p>

            {/* Counting Number (1 to 100) */}
            <p className="absolute bottom-16 text-2xl font-bold text-gray-400">
              {count}
            </p>

            {/* Tagline */}
            <p className="absolute bottom-8 text-sm uppercase italic text-gray-900 tracking-widest">
              Quality is our standard
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children after loading is done */}
      {!loading && children}
    </div>
  );
}
