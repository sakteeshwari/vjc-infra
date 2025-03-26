"use client";
import React from "react";
import { motion } from "framer-motion";

const Solutionimg = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/assets/solutionimg.gif"
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
        <h1 className="md:text-xl tracking-widest font-bold text-orange-500 drop-shadow-lg">
          We Provide
        </h1>
        <p className="text-xl tracking-widest md:text-2xl mt-1 lg:text-5xl lg:leading-normal font-semibold drop-shadow-lg">
          Complete Construction Solutions
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
          className="bg-gray-900  w-[90%] hover:scale-105 transition-transform duration-400 ease-in-out  tracking-wider px-8 md:px-12 py-10 max-w-3xl mx-auto text-left "
        >


          {/* Heading */}
          <h2 className="text-lg md:text-2xl tracking-wider mt-5 font-bold text-white leading-tight mb-4">

            We don’t just build spaces. We create environments.
          </h2>

          {/* Description */}
          <p className="text-gray-400 tracking-wider mt-5 font-semibold text-sm md:text-base leading-relaxed">
            We offer customized construction services and capabilities for commercial and industrial clients to help them refresh and reimagine their spaces. Whether yours is new construction, an addition, or a renovation, we’ll bring our expertise and innovation to the challenge.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Solutionimg;
