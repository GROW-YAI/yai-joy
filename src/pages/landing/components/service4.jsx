import React from 'react';
import { motion } from 'framer-motion';
import coco2Img from '../../../assets/cocowater.jpeg';

const Service4 = () => {
  return (
    <section className="bg-base-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
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
            alt="Coconut Water"
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary leading-snug">
            Pure Hydration
          </h2>
          <p className="text-secondary leading-relaxed">
            Refresh yourself with Nagio Love&apos;s coconut water—nature’s perfect hydration. Packed with electrolytes and essential nutrients, our coconut water is the ultimate drink for rejuvenation and vitality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Service4;
