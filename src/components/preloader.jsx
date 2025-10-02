import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Leaf } from 'lucide-react';

const PreLoader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const brandName = 'NAGIO LOVE ';

  useEffect(() => {
    const totalTime = 2500;
    const interval = 50;
    const steps = totalTime / interval;

    // Typing effect for brand name
    const typeText = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < brandName.length) {
          setDisplayText(() => brandName);
          index += 1;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    };

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + (100 / steps);
        if (newProgress >= 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        return newProgress;
      });
    }, interval);

    typeText();

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#2C5F2D] via-[#609C6B] to-[#97BC62] flex flex-col justify-center items-center p-4"
    >
      <div className="relative w-full max-w-md px-4">
        {/* Animated Coconut Water Droplet */}
        <motion.div
          className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Droplet 
            className="w-16 h-16 md:w-24 md:h-24 text-white/80 stroke-[1.5]" 
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Leaf Element */}
        <motion.div
          className="absolute -bottom-16 md:-bottom-20 right-1/2 translate-x-1/2"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Leaf 
            className="w-14 h-14 md:w-20 md:h-20 text-white/60 stroke-[1.5]" 
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Brand Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-center text-white mb-6 md:mb-8 px-2">
          {displayText}
        </h1>

        {/* Loading Bar */}
        <div className="w-full bg-white/20 rounded-full h-1.5 md:h-2 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: loadingProgress / 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full bg-white origin-left"
          />
        </div>

        {/* Loading Percentage */}
        <p className="text-center text-white/80 mt-3 md:mt-4 text-sm sm:text-base md:text-lg px-2">
          Preparing Nature's Goodness... {Math.round(loadingProgress)}%
        </p>
      </div>
    </motion.div>
  );
};

export default PreLoader;