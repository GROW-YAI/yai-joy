import React from 'react';
import { motion } from 'framer-motion';
import coco2Img from '../../../assets/cocooil2.jpeg';

const Service1 = () => {
  return (
    <section className="bg-base-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="w-full order-1 lg:order-2" 
        >
          <img
            src={coco2Img}
            alt="Virgin Coconut Oil"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </motion.div>
        
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="flex flex-col justify-center items-start py-6 px-4 sm:py-8 sm:px-6 md:px-12 lg:py-12 space-y-4 sm:space-y-6 order-2 lg:order-1" 
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center lg:text-left w-full">
            Virgin Coconut Oil
          </h2>
          <p className="text-secondary text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left">
            Experience the purest form of nourishment with Joya Foods' cold-pressed virgin coconut oil. Perfect for cooking, skincare, haircare and many more. Our oil retains all its natural goodness to enrich your lifestyle.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Service1;