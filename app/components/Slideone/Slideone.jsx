import React, { useState } from "react";
import { motion } from "framer-motion";

const Content = () => {
    const [showContent, setShowContent] = useState(false);

    const handleScroll = () => {
        setShowContent(true);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/your-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay Dark Layer for Better Text Visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-8">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-sm uppercase text-red-500 tracking-wide"
                >
                    Our story
                </motion.p>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl font-bold leading-tight"
                >
                    Quality is not only our <br />
                    standard. <br />
                    It's also an attitude <br />
                    instilled in our company.
                </motion.h1>
            </div>

            {/* Left Progress Indicator */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white">
                <p className="text-sm font-semibold rotate-90">1/07</p>
                <div className="h-20 flex flex-col justify-between mt-2">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'border border-white'}`}></div>
                    ))}
                </div>
            </div>

            {/* Scroll to Explore (Right Side) */}
            <div className="absolute right-6 bottom-10 flex flex-col items-center text-white">
                <p className="text-xs uppercase tracking-wide rotate-90">
                    Scroll to explore
                </p>
                <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default Content;
