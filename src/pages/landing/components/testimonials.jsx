import React, { useState, useEffect } from 'react';
import K from '../../../constants';

const Testimonial = () => {
  const { TESTIMONIALS } = K; // Import testimonials from constants
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [TESTIMONIALS.length]);

  return (
    <section id="testimonials" className="bg-primary py-4 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-10">What People Say About Us</h2>
        <div className="relative border-2 border-dashed border-accent bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          {/* Testimonial Text */}
          <p className="text-lg italic text-gray-300 mb-6">
            "{TESTIMONIALS[currentIndex].text}"
          </p>
          {/* Author */}
          <p className="text-xl font-semibold text-primary">
            - {TESTIMONIALS[currentIndex].author}
          </p>
          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
