"use client"
import React from "react";



const Aboutvideo = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Video Section */}
        <div className="w-full md:w-1/2">
        <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/assets/Thanks for watching.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Testimonial Content */}
        <div className="w-full md:w-1/2 tracking-wider leading-8 text-center md:text-left">
          <p className="text-gray-500 text-sm">VJC INFRA</p>
          <blockquote className="text-xl text-gray-800 font-semibold mt-2">
            “...VJC INFRA is highly responsive and delivers a consistent, high level
            of customer service. They provided an honest approach and
            demonstrate a high level of knowledge and competence.”
          </blockquote>
          <hr className="my-4 w-16 border-gray-400" />
          <p className="text-gray-400 text-sm">VJC INFRA Client</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutvideo;
