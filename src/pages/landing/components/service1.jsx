import React from 'react';
import { motion } from 'framer-motion';
import coco2Img from '../../../assets/cocooil2.jpeg';

const Service1 = () => {
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
            alt="Virgin Coconut Oil"
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
            Virgin Coconut Oil
          </h2>
          <p className="text-secondary">
            Experience the purest form of nourishment with Nagio Love's cold-pressed virgin coconut oil. Perfect for cooking, skincare, and haircare, our oil retains all its natural goodness to enrich your lifestyle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Service1;
