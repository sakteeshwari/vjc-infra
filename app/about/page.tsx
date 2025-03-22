'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Aboutimg from '../components/Aboutimg/Aboutimg';
import Footer from '../components/Footer/Footer';
import Aboutpossibility from '../components/Aboutpossibility/Aboutpossibility';
import Aboutvideo from '../components/Aboutvideo/Aboutvideo';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
};

const page = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Image Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Aboutimg />
      </motion.div>

      {/* Possibility Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Aboutpossibility />
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Aboutvideo />
      </motion.div>

      {/* Footer with Subtle Fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default page;
