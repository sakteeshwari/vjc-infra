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
                <div className="w-[80%] md:w-[50%] lg:w-[40%] xl:w-[35%]  absolute top-0 left-1/2 md:-top-16 md:left-64 transform -translate-x-1/2 bg-orange-600 text-white shadow-lg p-6 hover:scale-105 transition-transform duration-400 ease-in-out">
                    {/* Header */}
                    <div className="bg-orange-700 py-4 px-6 bg-opacity-80">
                        <h2 className="text-lg font-bold">Any request ?</h2>
                    </div>

                    {/* Contact Information */}
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">Get in touch !</h3>
                        <p>VJC Infra Projects Private Limited.</p>
                        <p>62/A, Sundari Reddy Bhavan, Ground Floor,</p>
                        <p>Vengalrao Nagar, S.R.Nagar,</p>
                        <p>Hyderabad-500038 Telangana, India.</p>
                        <p className="font-semibold mt-3 text-white">Phone:</p>
                        <p>
                            <a href="tel:9440467000" className="text-[#E0E0E0] hover:underline">
                                9440467000
                            </a>
                        </p>

                        <p className="font-semibold mt-3 text-white">Email:</p>
                        <p>
                            <a href="mailto:info@vjcinfra.com" className="text-[#E0E0E0] hover:underline">
                                info@vjcinfra.com
                            </a>
                        </p>

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
