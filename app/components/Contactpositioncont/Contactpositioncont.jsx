"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";


const Solutionimg = () => {

    

    const scrollToContactForm = () => {
        const contactSection = document.getElementById("contact-us");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className="relative tracking-widest w-full mb-20 px-4 md:px-10 lg:px-20">
            {/* Job Listings */}
            <div className=" space-y-10">
                {/* Job Item */}
                <div className="border-t border-gray-300 tracking-wider pt-10">
                    <h2 className="text-red-600 font-bold text-lg tracking-widest">Construction Project Assistant</h2>

                    <p className="text-gray-500 mt-4 text-sm leading-7 tracking-wider">
                        MAMAN CORP. IS AN ESTABLISHED, SUCCESSFUL AND
                        GROWING COMMERCIAL GENERAL CONTRACTOR SERVING
                        CHICAGOLAND AND NATIONAL CLIENTELE. WE ARE SEEKING TO
                        ADD TO OUR TEAM A CONSTRUCTION PROJECT
                        ADMINISTRATOR WITH A PROVEN TRACK RECORD OF SUCCESS...<span><button className="text-black font-semibold tracking-widest text-sm cursor-pointer"> More info</button></span>
                    </p>
                    <div className="mt-6 flex justify-start items-center">
                        <p className="font-bold uppercase text-xs pr-4 cursor-pointer tracking-widest">Apply Now</p>
                        <div className="border-b border-gray-400 w-1/3 lg:w-[10%]"></div>

                    </div>
                </div>

                {/* Job Item */}
                <div className="border-t border-gray-300 pt-10">
                    <h2 className="text-red-600 font-bold text-lg tracking-widest">Carpenters</h2>
                    <p className="text-gray-500 mt-4 tracking-wider text-sm leading-7">
                        Maman Corp. is always accepting Carpenter applications & we are
                        signatory to the Chicago Regional Council of Carpenters. Please
                        submit your resume and work history so when we have a specific
                        need we can find the right candidate. Be sure to include any
                        knowledge or certifications regarding use of... <span><button className="text-black tracking-widest font-semibold text-sm cursor-pointer"> More info</button></span>
                    </p>

                    <div className="mt-6 flex justify-start items-center">
                        <button
                            onClick={scrollToContactForm}
                            className="font-bold uppercase text-xs pr-4 cursor-pointer tracking-widest"
                        >
                            Apply Now
                        </button>
                        <div className="border-b border-gray-400 w-1/3 lg:w-[10%]"></div>

                    </div>
                </div>
            </div>

             
      
        </div>
    );
};

export default Solutionimg;
