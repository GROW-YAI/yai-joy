// src/pages/landing/components/service2.jsx
import React from 'react';
import { motion } from 'framer-motion';
import coco1Img from '../../../assets/coconut1.jpg';

const Service2 = () => {
  return (
    <section className="bg-base-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="flex flex-col justify-center items-start py-8 px-4 md:px-12 space-y-6"
        >
          <h2 className="text-3xl font-bold text-primary">
            Business optimization
          </h2>
          <p className="text-secondary">
            Unlock your business's full potential through our optimization services. From streamlining
            processes to enhancing efficiency, we work to maximize operational performance, driving
            profitability and ensuring long-term success.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition-colors">
            Contact
          </button>
        </motion.div>
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="w-full h-[400px] object-cover"
        >
          <img
            src={coco1Img}
            alt="Business Optimization"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Service2;