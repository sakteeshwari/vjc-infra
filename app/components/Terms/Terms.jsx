"use client";
import React from "react";
import { motion } from "framer-motion";

const Solutionimg = () => {
  return (
    <div className="relative w-full ">
      {/* Background Image */}
      <img
        src="/assets/terms-conditions.png"
        className="lg:h-screen w-full h-96 object-cover"
        alt="VJC Infra Banner"
      />

      {/* Overlay Text with Animation */}
     


      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative text-center -top-20 lg:-top-28 bg-cover bg-center min-h-[600px]  flex items-center justify-center"
  style={{ backgroundImage: "url('/assets/background.jpg')" }}

    >
      {/* White Box Overlay with Animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
       
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white w-[90%] text-sm lg:text-[15px] tracking-widest leading-8 px-6 md:px-12 pt-10 lg:pt-14 max-w-3xl mx-auto text-left hover:scale-105 transition-transform duration-400 ease-in-out"
      >
        <h1 className="md:text-4xl text-3xl font-bold text-gray-900 ">Terms & Conditions</h1>
        <p className="mt-4 text-gray-600 ">
          Welcome to www.vjcinfra.com. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
        </p>
        <h2 className="mt-6 text-xl  font-semibold text-red-600">Your Agreement</h2>
        <p className="mt-2 text-gray-600">
          By using this Site, you agree to be bound by and to comply with these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
        </p>
        <p className=" text-gray-600 mt-2"><b>PLEASE NOTE:</b> We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.</p>

             {/* Sections */}
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-xl font-semibold text-red-600">Privacy</h2>
          <p className="text-gray-600 mt-2">
            Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
          </p>
        </div>
        
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-xl font-semibold text-red-600">Linked Sites</h2>
          <p className="text-gray-600 mt-2">
            Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
          </p>
        </div>
        
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-xl font-semibold text-red-600">Forward Looking Statements</h2>
          <p className="text-gray-600 mt-2">
            All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing.
            We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.
          </p>
        </div>
      



      </motion.div>

     
        
       
    </motion.section>
    </div>
  );
};

export default Solutionimg;
