"use client";
import React from "react";
import useInView from "../../hooks/useInView"; // Ensure this hook is implemented correctly

const Careers = () => {
    const [elementRef, inView] = useInView(0.5); // Triggers when 40% of the element is in view

    return (
        <div>
            {/* Image Section */}
            <div className="h-screen mt-10 md:mt-32 lg:w-[80%] tracking-widest lg:mt-40 relative lg:mx-auto md:mx-10">
                <img 
                    src="/assets/about.png" 
                    alt="section_image" 
                    className="w-full h-screen object-cover object-center"
                />

                {/* Red Box */}
                <div className="w-[80%] md:w-[50%] lg:w-[40%] xl:w-[35%]  absolute top-0 left-1/2 md:-top-16 md:left-64 transform -translate-x-1/2 bg-red-600 text-white shadow-lg p-6">
                    {/* Header */}
                    <div className="bg-red-700 py-4 px-6 bg-opacity-80">
                        <h2 className="text-lg font-bold">Any request ?</h2>
                    </div>

                    {/* Contact Information */}
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">Get in touch !</h3>
                        <p>Maman Corp.</p>
                        <p>1055 Arthur Ave</p>
                        <p>Elk Grove Village, IL 60007</p>
                        <p className="font-semibold mt-3">Phone:</p>
                        <p>847-358-2688</p>
                        <p className="font-semibold mt-3">Email:</p>
                        <p>maman@maman-corp.com</p>

                        {/* Divider */}
                        <hr className="my-6 border-white opacity-50" />

                        {/* Join Team Section */}
                        <h3 className="font-semibold text-lg mb-2">Want to join the team ?</h3>
                        <p>Use the form. All applicants must complete the online form.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
