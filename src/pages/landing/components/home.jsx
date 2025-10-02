import React, { useState, useEffect } from 'react';
import K from '../../../constants';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-advance the slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % K.HERO_IMAGES.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-0">
      <div className="flex flex-col md:flex-row h-screen">
        
        {/* Left Side - Image Carousel */}
        <div 
          className="relative w-full md:w-1/2 h-96 md:h-full overflow-hidden"  >

          {/* Main Image */}
          <img
            src={K.HERO_IMAGES[currentSlide].src}
            alt="Slide Image"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
          
          {/* Carousel Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {K.HERO_IMAGES.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => setCurrentSlide(index)} // Optional: allow manual navigation
              />
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div 
          className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-8" 
        >
  
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-center text-gray-900">
            {K.BRAND_INFO.name}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-center text-gray-600 max-w-lg">
            {K.BRAND_INFO.description}
          </p>
         {/* <button className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 font-semibold uppercase tracking-wider">
             Discover More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Home;