import React, { useState, useEffect } from 'react';
import K from '../../../constants';

const Testimonial = () => {
  const { TESTIMONIALS } = K;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [TESTIMONIALS.length]);

  return (
    <section id="testimonials" className="bg-primary py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Responsive heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6 sm:mb-8 lg:mb-10">
          What People Say About Us
        </h2>
        
        {/* Responsive testimonial container */}
        <div className="relative border-2 border-dashed border-accent bg-gray-900 text-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
          {/* Responsive testimonial text */}
          <p className="text-base sm:text-lg lg:text-lg italic text-gray-300 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
            "{TESTIMONIALS[currentIndex].text}"
          </p>
          
          {/* Responsive author */}
          <p className="text-lg sm:text-xl lg:text-xl font-semibold text-primary">
            - {TESTIMONIALS[currentIndex].author}
          </p>
          
          {/* Responsive pagination dots */}
          <div className="flex justify-center items-center mt-4 sm:mt-5 lg:mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-110' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;