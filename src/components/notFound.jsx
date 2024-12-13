import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import notFoundImg from '../assets/joya-logo.jpeg';  

const NotFound = () => {
  return (
    <section className="bg-neutral min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="container max-w-screen-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          <img
            src={notFoundImg}
            alt="Page Not Found"
            className="w-full max-w-md mx-auto rounded-lg mb-8 border-4 border-success"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">Oops! Page Not Found</h1>
          <p className="text-secondary text-lg mb-6">
            It seems like the page you're looking for doesn't exist. Let's get you back on track!
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 text-white bg-success hover:bg-success-dark rounded-lg font-medium shadow-md transition-all"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
