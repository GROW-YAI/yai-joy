import React from 'react';
import { motion } from 'framer-motion';
import cocoImg from '../../../assets/coconut1.jpg';

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
            <img src={cocoImg} alt="Coconut Product" className="w-full h-full object-cover rounded-lg border-4 border-success" />
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
              Leverage our commitment to sustainability to enjoy high-quality coconut products. We prioritize
              ethical sourcing, ensuring that every product aligns with your values and supports eco-friendly
              practices.
            </p>
            <button className="bg-success text-white px-6 py-3 rounded-full hover:bg-primary transition-colors">
              Contact
            </button>
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
            <img src={cocoImg} alt="Coconut Processing" className="w-full h-full object-cover rounded-lg border-4 border-success" />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1 pr-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Ethical Processing</h2>
            <p className="text-secondary mb-6">
              Our commitment to sustainability extends to our processing methods. We ensure that every step of
              production aligns with ethical and eco-friendly practices, delivering high-quality coconut products
              that you can feel good about.
            </p>
            <button className="bg-success text-white px-6 py-3 rounded-full hover:bg-primary transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
