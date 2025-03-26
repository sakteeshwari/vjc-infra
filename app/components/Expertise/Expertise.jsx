"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const OurStory = () => {
    return (
        <section className="flex pt-20 justify-center leading-20 items-center min-h-screen bg-white px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl">
                <h2 className="text-black font-bold text-lg  tracking-widest">
                    Our expertise
                </h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-orange-600 tracking-wider font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mt-2"
                >
                  A higher level of satisfaction inside and out.
                </motion.h1>
                <p className="text-gray-700 tracking-widest lg:text-lg mt-4 leading-relaxed">
                As you might expect of a company that began as a high-end interiors contractor, we pay strict attention to the smallest details. As we've grown and evolved into a general contractor, our commitment to exceptional quality has never wavered. Maman Corp. today ranks as one of the most highly-regarded construction management firms in the healthcare, retail, and commercial and industrial markets. And while we're proud of our reputation for quality work, we're prouder still that first and foremost in everything we do is an unwavering commitment to client satisfaction.
                </p>
                <div className="mt-6 flex items-center space-x-2">
                    <Link href="/about" passHref>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 bg-red-600 text-xs md:text-sm lg:text-md text-white font-bold uppercase rounded-lg 
                                       hover:bg-red-700 transition-all duration-300 cursor-pointer"
                        >
                            Discover More About Our Expertise
                        </motion.button>
                    </Link>
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
