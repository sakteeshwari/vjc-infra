"use client";
import React from "react";
import { motion } from "framer-motion";
import Contactpositioncont from "../Contactpositioncont/Contactpositioncont"


const Solutionimg = () => {
  return (
    <div  className="relative mt-10  w-full px-4 md:px-10 lg:px-20">
      {/* Background Image */}
      <div className="w-full">
        <img
          src="/assets/contactsposition.png"
          className="lg:h-96 w-full object-cover"
          alt="VJC Infra Banner"
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative -top-20  lg:-top-28 bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.jpg')" }} // Replace with actual background image path
      >
        {/* White Box Overlay with Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white w-[90%] text-left tracking-wider px-6 md:px-12 py-10 max-w-3xl mx-auto shadow-md"
        >
          <p className="text-orange-600 uppercase font-semibold text-sm mb-2">
            Open position
          </p>

          {/* Description */}
          <p className="text-gray-500 mt-5 font-semibold text-sm md:text-base leading-relaxed">
            Please remember that all offers of employment at VJC INFRA are
            subject to the successful completion and verification of
            pre-employment drug screen test, clear MVR, background screen which
            may include education verification where applicable, E-Verify
            authorization, & I-9 documentation.
          </p>
          <p className="text-gray-500 mt-5 font-semibold text-sm md:text-base leading-relaxed">
            No Agencies Please. Unsolicited Resumes from third party agencies
            will not be accepted.
          </p>

         
        </motion.div>
        
      </motion.section>
      <Contactpositioncont></Contactpositioncont>
    </div>
  );
};

export default Solutionimg;
