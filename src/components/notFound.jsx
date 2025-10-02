import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import notFoundImg from '../assets/joya-logo.jpeg';  

const NotFound = () => {
  return (
    <section className="bg-neutral min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="container max-w-screen-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          className="w-full"
        >
          {/* Responsive image container */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 sm:mb-8">
            <img
              src={notFoundImg}
              alt="Page Not Found"
              className="w-full h-auto rounded-lg border-4 border-success"
            />
          </div>
          
          {/* Responsive typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-secondary text-base sm:text-lg mb-4 sm:mb-6 px-2 sm:px-0">
            It seems like the page you're looking for doesn't exist. Let's get you back on track!
          </p>
          
          {/* Responsive button */}
          <Link
            to="/"
            className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 text-white bg-success hover:bg-success-dark rounded-lg font-medium text-sm sm:text-base shadow-md transition-all transform hover:scale-105 active:scale-95"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;