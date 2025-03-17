import React from 'react'
import { motion } from 'framer-motion'
const Content = () => {
  return (
    <>
      {/* Content Section */}
      <motion.div
      initial={{ x: -100, opacity: 0 }} // Start from left with 0 opacity
      whileInView={{ x: 0, opacity: 1 }} // Animate when in viewport
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Animation triggers only once
      className="absolute bottom-0 w-full flex flex-col md:flex-row"
    >
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-red-500 pl-6 md:pl-32 text-white w-full md:w-[40%] p-10"
      >
        <p className="text-xs uppercase text-gray-300">Experts Since 1997</p>
        <h1 className="text-2xl font-bold mt-2">
          Maman Corp. is a comprehensive construction management team and general contractor.
        </h1>
      </motion.div>

      {/* Middle Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-red-500 text-white w-full md:w-[30%] p-10"
      >
        <p className="mt-4 text-sm text-gray-300">
          We create environments for your team to do its best work. We do it through expertise, creativity, and
          attention to every detail—our ingredients for over 20 years of success.
        </p>
      </motion.div>

      {/* Scroll to Discover Button */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex text-red-600 items-center bg-white cursor-pointer w-full md:w-[20%] justify-center 
              hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out"
      >
        <p className="font-bold">Scroll to discover</p>
      </motion.div>

      {/* Down Arrow */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center w-full md:w-[10%] p-4"
      >
        <svg
          className="h-12 w-12 text-white animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Content
