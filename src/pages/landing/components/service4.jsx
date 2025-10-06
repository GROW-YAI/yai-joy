import React from 'react';
import { motion } from 'framer-motion';
import coco2Img from '../../../assets/cocowater.jpeg';

const Service4 = () => {
  return (
    <section className="bg-base-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="w-full order-2 lg:order-1"
        >
          <img
            src={coco2Img}
            alt="Coconut Water"
            className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-cover "
          />
        </motion.div>

        {/* Right Content */}
         <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                 className="flex flex-col justify-center items-start py-6 px-4 sm:py-8 sm:px-6 md:px-12 lg:py-12 space-y-4 sm:space-y-6 order-2 lg:order-1" 
               >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center lg:text-left w-full">
            Pure Hydration
          </h2>
          <p className="text-secondary text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left">
            Refresh yourself with Joya Foods' coconut water—nature's perfect hydration. Packed with electrolytes and essential nutrients, our coconut water is the ultimate drink for rejuvenation and vitality.
          </p>
          
       
        </motion.div>
      </div>
    </section>
  );
};

export default Service4;