'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Contactimg from '../components/Contactimg/Contactimg';
import Footer from '../components/Footer/Footer';
import Contactform from '../components/Contactform/Contactform';
import Contactrequest from '../components/Contactrequest/Contactrequest';
import Contactposition from '../components/Contactposition/Contactposition';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
};

const page = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Contactimg />
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Contactform />
      </motion.div>

      {/* Contact Request Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Contactrequest />
      </motion.div>

      {/* Contact Position Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Contactposition />
      </motion.div>

      {/* Footer with Subtle Fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default page;
