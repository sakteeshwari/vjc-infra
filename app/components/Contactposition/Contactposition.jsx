"use client";
import React from "react";

const Careers = () => {
    return (
        <div className="relative text-center mb-96 my-20 lg:mx-20">
            {/* Image Section with Cutout Effect */}
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
                <img 
                    src="/assets/contactsposition.png" 
                    alt="section_image" 
                    className="w-full h-full object-cover"
                />
                {/* White cutout effect at bottom */}
                <div className="absolute bottom-0 w-full h-16 bg-white clip-path-custom"></div>
            </div>

            {/* Wrapper to prevent overlapping */}
            <div className="flex absolute top-80 lg:top-96 justify-center">
                <div className="px-6 mt-[-40px] mx-10 md:mx-5 lg:mx-32 py-10 lg:px-20 shadow-2xl bg-white text-black">
                    <h2 className="text-3xl font-bold">Open Position</h2>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Please remember that all offers of employment at Maman Corp. are subject 
                        to the successful completion and verification of pre-employment drug 
                        screen test, clear MVR, background screen which may include education 
                        verification where applicable, E-Verify authorization, & I-9 documentation. 
                        No Agencies Please. Unsolicited Resumes from third party agencies will not 
                        be accepted.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Careers;
