'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer/Footer';
import Solutionimg from '../components/Solutionimg/Solutionimg';
import Solutioncontent from '../components/Solutioncontent/Solutioncontent';
import Solutionimgdown from '../components/Solutionimgdown/Solutionimgdown';
import Solutionredbg from '../components/Solutionredbg/Solutionredbg';
import Solutionindus from '../components/Solutionindus/Solutionindus';
import Solutionlast from '../components/Solutionlast/Solutionslast';

const page = () => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
      >
        <Solutionimg />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        viewport={{ once: true }}
      >
        <Solutioncontent />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.4 }} 
        viewport={{ once: true }}
      >
        <Solutionimgdown />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.6 }} 
        viewport={{ once: true }}
      >
        <Solutionredbg />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.8 }} 
        viewport={{ once: true }}
      >
        <Solutionindus />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1 }} 
        viewport={{ once: true }}
      >
        <Solutionlast />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1.2 }} 
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default page;
