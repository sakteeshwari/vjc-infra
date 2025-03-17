"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setCount(count);
        if (count >= 100) clearInterval(interval);
      }, 30);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Animated Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-[url('/assets/loadingbg.png')] bg-cover bg-center flex flex-col items-center justify-center text-red-500 text-4xl font-bold"
          >
            VJC INFRA
            <div className="mt-4 border-4 border-gray-400 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
            <p className="mt-4 text-xl">{count}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children after loading is done */}
      {!loading && children}
    </div>
  );
}
