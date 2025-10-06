import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Phone } from 'lucide-react';
import K from '../../../constants';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % K.HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % K.HERO_IMAGES.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + K.HERO_IMAGES.length) % K.HERO_IMAGES.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-0">
      <div className="flex flex-col md:flex-row h-screen">
        
        {/* Left Side - Image Carousel */}
        <div className="relative w-full md:w-1/2 h-96 md:h-full overflow-hidden group">
          {/* Images with Overlay */}
          {K.HERO_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
          ))}

          {/* Navigation Arrows - Hidden on mobile, visible on hover on desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {K.HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-110 w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Content with CTAs */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-16 bg-gradient-to-br from-white to-gray-50">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6 animate-pulse">
            🌴 100% Natural & Organic
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-center text-gray-900 leading-tight">
            {K.BRAND_INFO.name}
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-center text-gray-600 max-w-lg leading-relaxed">
            {K.BRAND_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button
              onClick={scrollToProducts}
              className="flex-1 flex items-center justify-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingBag size={20} />
              View Products
            </button>
            <button
              onClick={scrollToContact}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-800 font-semibold py-4 px-6 rounded-lg border-2 border-green-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} />
              Contact Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 mt-12 w-full max-w-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">100%</div>
              <div className="text-xs text-gray-600">Natural</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl font-bold text-green-800">Fresh</div>
              <div className="text-xs text-gray-600">Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">Eco</div>
              <div className="text-xs text-gray-600">Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;