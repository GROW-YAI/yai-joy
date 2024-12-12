// src/pages/landing/components/service1.jsx
import React from 'react';
import { motion } from 'framer-motion';
import coco2Img from '../../../assets/cocowater.jpeg';

const Service4 = () => {
  return (
    <section className="bg-base-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="w-full"
        >
          <img
            src={coco2Img}
            alt="Quality Innovation"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="flex flex-col justify-center items-start py-8 px-4 md:px-12 space-y-6"
        >
          <h2 className="text-3xl font-bold text-primary">
            Quality innovation
          </h2>
          <p className="text-secondary">
            Stay nourished with our innovative coconut offerings. We provide tailored products that meet your specific needs, empowering you to embrace a healthier lifestyle with ease.
          </p>
          {/* <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition-colors">
            Contact
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Service4;
