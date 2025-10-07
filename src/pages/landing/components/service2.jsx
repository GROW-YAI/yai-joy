import React from 'react';
import { motion } from 'framer-motion';
import coco1Img from '../../../assets/cocoflakes.jpeg';

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
          className="flex flex-col justify-center items-start py-8 px-4 md:px-8 lg:px-12 space-y-4 md:space-y-6 order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center lg:text-left w-full">
            Wholesome Coconut Flakes
          </h2>
          <p className="text-secondary text-base sm:text-lg md:text-xl text-center lg:text-left w-full">
            Enjoy the goodness of Joya Foods' coconut flakes—crafted to perfection. Available in sweetened and unsweetened varieties, our flakes are free from preservatives, gluten-free, and vegan-friendly, ensuring a truly nutritious treat for everyone.
          </p>
        </motion.div>
        
        {/* Right Image */}
        <motion.div
         initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover order-1 lg:order-2"
        >
          <img
            src={coco1Img}
            alt="Coconut Flakes"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Service2;