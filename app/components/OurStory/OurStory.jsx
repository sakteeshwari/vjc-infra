"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const OurStory = () => {
    return (
        <section className="flex pt-20 justify-center leading-20 items-center min-h-screen bg-white px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl">
                <h2 className="text-black font-bold text-lg  tracking-widest">
                    Our story
                </h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-orange-600 tracking-wider font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mt-2"
                >
                    Quality is not only our standard.
                    It&apos;s also an attitude instilled in our company.
                </motion.h1>
                <p className="text-gray-700 tracking-widest lg:text-lg mt-4 leading-relaxed">
                    VJC INFRA began in 1997 as an interior finishing contractor in suburban 
                    Chicago. Since then, we&apos;ve grown to become a full-service Construction 
                    Management team and General Contractor working in 15 states, and counting. 
                    Though we&apos;re considerably larger, and though our expertise has grown 
                    from high-end interior work to complete new construction and construction 
                    services, our commitment to superior quality is as strong today as ever.
                </p>
                <div className="mt-6 flex items-center space-x-2">
                    <Link href="/about" passHref>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 bg-red-600 text-xs md:text-sm lg:text-md text-white font-bold uppercase rounded-lg 
                                       hover:bg-red-700 transition-all duration-300 cursor-pointer"
                        >
                            Discover More About Our Story
                        </motion.button>
                    </Link>
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
