import React from 'react';
import { motion } from 'framer-motion';
import cocoImg from '../../../assets/cocotree.jpeg';
import coco1Img from '../../../assets/cocowater1.jpeg';

const Services = () => {
  return (
    <section id="products" className="bg-neutral py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Service 1 */}
        <div className="flex items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1"
          >
            <img src={cocoImg} alt="Coconut Sourcing" className="w-full h-full object-cover rounded-lg border-4 border-success" />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1 pl-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Sustainable Sourcing</h2>
            <p className="text-secondary mb-6">
              At Joya Foods, we believe in sustainability from the ground up. Our coconuts are ethically sourced to preserve the environment and support local farmers, ensuring quality you can trust.
            </p>
          </motion.div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-row-reverse items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1"
          >
            <img src={coco1Img} alt="Coconut Processing" className="w-full h-full object-cover rounded-lg border-4 border-success" />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1 pr-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Eco-Friendly Processing</h2>
            <p className="text-secondary mb-6">
              Our eco-friendly processing methods retain the natural integrity of coconuts while minimizing waste. Joya Foods is committed to delivering products that are good for you and the planet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
