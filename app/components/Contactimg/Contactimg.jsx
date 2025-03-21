"use client";
import React from "react";
import { motion } from "framer-motion";

const Solutionimg = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/assets/contactimg.png"
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
        <h1 className="md:text-xl tracking-widest font-bold text-red-500 drop-shadow-lg">
          We Value
        </h1>
        <p className="text-xl tracking-widest md:text-2xl mt-1 lg:text-5xl lg:leading-normal font-semibold drop-shadow-lg">
        Quality is Our Stand
        </p>
      </motion.div>


      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center -top-20 lg:-top-28 bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background.jpg')" }} // Replace with actual background image path
    >
      {/* White Box Overlay with Animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white w-[90%]  tracking-wider px-6 md:px-12 py-10 max-w-3xl mx-auto text-center "
      >
        <p className="text-red-500 uppercase tracking-wider font-semibold text-sm mb-2">
          Say Hello !
        </p>

        {/* Heading */}
        <h2 className="text-2xl tracking-wider mt-5 md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          For a <span className="text-black">project,</span> as a <br />
          <span className="text-black">partner</span> or as a <span className="text-black">team.</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 tracking-wider mt-5 font-semibold text-sm md:text-base leading-relaxed">
          We are blending physical building structures from concepts and ideas to link 
          people and space to the solution they need to be more efficient and productive. 
          If you’re a potential employee or want to become a vendor or have a project, 
          we can discuss our journey together begins here.
        </p>
      </motion.div>
    </motion.section>
    </div>
  );
};

export default Solutionimg;
