"use client";
import React from "react";
import { motion } from "framer-motion";

const Solutionimg = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/assets/processimg.gif"
        className="lg:h-screen w-full h-96 object-cover"
        alt="VJC Infra Banner"
      />

      {/* Overlay Text with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start hidden and slightly left
        animate={{ opacity: 1, x: 0 }} // Fade in and move to position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        className="absolute top-30 left-7 w-80 md:w-96 text-left lg:top-60  lg:w-[50%]  text-white bg-black/40 p-4 rounded-lg"
      >
        <h1 className="md:text-xl tracking-wider font-bold text-orange-500 drop-shadow-lg">
          We Process
        </h1>
        <p className="text-xl tracking-wider md:text-2xl mt-1 lg:text-5xl lg:leading-normal font-semibold drop-shadow-lg">
        Success comes from the process
        </p>
      </motion.div>
    </div>
  );
};

export default Solutionimg;
