import React, { useState } from "react";
import { motion } from "framer-motion";


const slides = [
    { id: 1, content: "Slide 1 Content" },
    { id: 2, content: "Slide 2 Content" },
    { id: 3, content: "Slide 3 Content" },
    { id: 4, content: "Slide 4 Content" },
    { id: 5, content: "Slide 5 Content" },
    { id: 6, content: "Slide 6 Content" },
    { id: 7, content: "Slide 7 Content" },
];

const Content = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleScroll = () => {
        setShowContent(true);
        setCurrentSlide(0); // Start from the first slide
    };
    

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };


    return (
        <div className="w-full  flex flex-col items-center justify-center relative">
            {/* Existing Maman Corp Content */}
            {!showContent ? (
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 w-full flex flex-col md:flex-row"
                >
                    {/* Left Section */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scale: [0.9, 1] }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-red-500 pl-6 md:pl-32 text-white w-full md:w-[40%] p-10"
                    >
                        <motion.p className="text-xs uppercase text-gray-300">Experts Since 1997</motion.p>
                        <motion.h1 className="text-2xl font-bold mt-2">
                            VJC Infra is a comprehensive construction management team and general contractor.
                        </motion.h1>
                    </motion.div>

                    {/* Middle Section */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scale: [0.95, 1] }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-red-500 text-white w-full md:w-[30%] p-10"
                    >
                        <motion.p className="mt-4 text-sm text-gray-300">
                            We create environments for your team to do its best work. We do it through expertise, creativity,
                            and attention to every detail—our ingredients for over 20 years of success.
                        </motion.p>
                    </motion.div>

                    {/* Scroll to Discover Button */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="flex text-red-600 items-center bg-white cursor-pointer w-full md:w-[20%] justify-center 
                        hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out"
                        onClick={handleScroll}
                    >
                        <p className="font-bold">Scroll to discover</p>
                    </motion.div>

                    {/* Down Arrow */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scale: [0.8, 1.2, 1] }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group cursor-pointer flex items-center justify-center w-full md:w-[10%] p-4"
                        onClick={handleScroll}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ y: 0 }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                            className="h-12 w-12 group-hover:stroke-red-500 transition-colors duration-300"
                        >
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </motion.svg>
                    </motion.div>
                </motion.div>





            ) : (



                <motion.div
                    className="absolute -top-[665px] left-0 w-full h-[665px] text-white flex justify-center items-center overflow-hidden"
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/videocontentone.mp4" type="video/mp4" />
                        </video>
                    </div>
                    
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
                            className="lg:text-5xl text-3xl font-bold leading-tight"
                        >
                            {slides[currentSlide].content}
                        </motion.h1>
                    </div>
                    
                    <div className="absolute right-10 bottom-10 cursor-pointer" onClick={nextSlide}>
                        <p className="text-white text-sm uppercase">Next</p>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Content