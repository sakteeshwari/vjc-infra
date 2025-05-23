"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const slides = [
    { id: 1, topic: "Our story", content: "Quality is not only our standard. It's also an attitude instilled in our company.", video: "/assets/videocontent7.mp4", link: "/our-story" },
    { id: 2, topic: "Our client commitment", content: "Quality construction begins with a quality relationship.", video: "/assets/videocontent2.mp4", link: "/client-commitment" },
    { id: 3, topic: "Our Vision", content: "We go beyond the expected to find the best possible solution.", video: "/assets/videocontent3.mp4", link: "/vision" },
    { id: 4, topic: "Our expertise", content: "A higher level of satisfaction inside and out.", video: "/assets/videocontent4.mp4", link: "/expertise" },
    { id: 5, topic: "Who we are", content: "Our highly skilled team is always at your service.", video: "/assets/videocontent5.mp4", link: "/who-we-are" },
    { id: 6, topic: "Our safety services", content: "Building a safer workplace.", video: "/assets/videocontent6.mp4", link: "/safety-services" },
    { id: 7, topic: "Our personal commitment", content: "At its heart, construction isn't about structures. It's about people.", video: "/assets/videocontentone.mp4", link: "/personal-commitment" },
];


const Content = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [isSlideOpen, setIsSlideOpen] = useState(true);


    const closeSlide = () => {
        setIsSlideOpen(false); // Close the slide
        setTimeout(() => {
            setShowContent(false); // Reset to initial content
            setCurrentSlide(0); // Ensure the first slide is shown when reopened
        }, 300);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsSlideOpen(true);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsSlideOpen(true);
    };

   

    useEffect(() => {
        const handleWheel = (event) => {
            if (!showContent) {
                setShowContent(true);
                setIsSlideOpen(true);
                return;
            }
    
            if (event.deltaY > 50) {
                nextSlide();
            } else if (event.deltaY < -50) {
                prevSlide();
            }
        };
    
        window.addEventListener("wheel", handleWheel);
    
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [showContent, currentSlide]); // Dependencies ensure it updates when state changes
    

    const handleScroll = () => {
        setShowContent(true);
        setCurrentSlide(0); // Start from the first slide
        setIsSlideOpen(true); // Ensure the slides open again
    };

    

    const handleDrag = (event, info) => {
        console.log("Drag event detected:", info.delta.y); // Debugging
        const dragThreshold = 30; // Reduce threshold for better sensitivity

        if (info.delta.y < -dragThreshold) {
            console.log("Next slide triggered");
            nextSlide(); // Swipe Up → Next Slide
        } else if (info.delta.y > dragThreshold) {
            console.log("Previous slide triggered");
            prevSlide(); // Swipe Down → Previous Slide
        }
    };

   

    return (
        <div className="w-full flex  flex-col items-center justify-center relative">
            {!showContent ? (
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute  bottom-0 w-full flex flex-col md:flex-row"
                >
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scale: [0.9, 1] }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-orange-600 pl-6 tracking-wider md:pl-32 text-white w-full md:w-[40%] p-10"
                    >
                        <motion.p className="text-xs uppercase text-gray-300">Experts Since 1997</motion.p>
                        <motion.h1 className="text-2xl tracking-wider font-bold mt-2">
                            VJC Infra is a comprehensive construction management team and general contractor.
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scale: [0.95, 1] }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-orange-600 text-white w-full md:w-[30%] p-10"
                    >
                        <motion.p className="mt-4 text-sm text-gray-300">
                            We create environments for your team to do its best work. We do it through expertise, creativity,
                            and attention to every detail—our ingredients for over 20 years of success.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="flex text-orange-600 items-center bg-white cursor-pointer w-full md:w-[20%] justify-center 
                        hover:bg-orange-600 hover:text-white transition-all duration-500 ease-in-out"
                        onClick={handleScroll}
                    >
                        <p className="font-bold tracking-wider">Scroll to discover</p>
                    </motion.div>

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
                            className="h-12 w-12 group-hover:stroke-orange-600 shadow-2xl transition-colors duration-300"
                        >
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </motion.svg>
                    </motion.div>
                </motion.div>
            ) : (

                <AnimatePresence mode="">
                    {isSlideOpen && currentSlide !== null && (
                      <motion.div
                      key={slides[currentSlide].id}
                      className="absolute -top-[740px] left-0 w-full h-[740px] text-white flex justify-center items-center overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                          duration: 1.2,
                          ease: "easeInOut",
                      }}
                      drag="y"
                      dragConstraints={{ top: -100, bottom: 100 }}
                      dragElastic={0.5}
                      onDragEnd={handleDrag}
                  >
                  
                   
                            <div className="absolute top-0 left-0 w-full h-full">
                                {/* Video Background */}
                                <video
                                    key={slides[currentSlide].id}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={slides[currentSlide].video} type="video/mp4" />
                                </video>

                                {/* Dark Overlay */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            </div>

                            <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-8">
                                <motion.p
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className="text-sm lg:text-2xl uppercase text-red-500 font-bold tracking-wider leading-loose"
                                >
                                    {slides[currentSlide].topic}
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="lg:text-5xl text-3xl lg:w-[80%] mt-3 font-bold tracking-wide"
                                >
                                    {slides[currentSlide].content}
                                </motion.h1>

                                <Link href={slides[currentSlide].link || "#"}>
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0px 10px 20px rgba(255, 0, 0, 0.5)",
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="mt-6 px-6 py-3 cursor-pointer bg-orange-600 text-white font-bold uppercase rounded-lg hover:bg-orange-600 transition-all"
                                >
                                    Know More
                                </motion.button>
                            </Link>
                            </div>

                            {/* ❌ Close Slide Button */}
                            <button
                                className="absolute top-32 right-14 bg-white/10 backdrop-blur-md p-3 rounded-full text-white shadow-lg hover:bg-white/20 transition-all duration-300"
                                onClick={closeSlide}
                            >
                                <X size={30} className="text-white" />
                            </button>

                            {/* ⬇️ Down Arrow for Next Slide */}
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 right-10 cursor-pointer"
                                onClick={nextSlide}
                            >
                                <div className="relative w-20 h-20">
                                    <img
                                        src="/assets/downarrow.png"
                                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 hover:opacity-0"
                                        alt="White Down Arrow"
                                    />
                                    <img
                                        src="/assets/downarrow-red.png"
                                        className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100"
                                        alt="Red Down Arrow"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}

                </AnimatePresence>

            )}
        </div>
    );
};

export default Content;