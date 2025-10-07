import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import joyaLogo from "../assets/joya-logo-new.png";

const PreLoader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    const totalTime = 2500;
    const interval = 50;
    const steps = totalTime / interval;

    const logoTimer = setTimeout(() => {
      setIsLogoVisible(true);
    }, 300);

    const progressTimer = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + (100 / steps);
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { 
          duration: 0.8,
          ease: "easeInOut"
        } 
      }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1a472a] via-[#2C5F2D] to-[#4A7C59] flex flex-col justify-center items-center p-4"
    >
      <div className="relative w-full max-w-md px-4">
        
        {/* Main Logo Container */}
        <div className="relative mb-12 flex justify-center">
          <motion.div
            initial={{ 
              scale: 0.8,
              opacity: 0
            }}
            animate={isLogoVisible ? {
              scale: 1,
              opacity: 1
            } : {}}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="relative z-10"
          >
            <img
              src={joyaLogo}
              alt="JOYA FOODS"
              className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Loading Bar Container */}
        <div className="space-y-4">
          {/* Loading Bar */}
          <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: loadingProgress / 100 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut" 
              }}
              className="h-full bg-gradient-to-r from-white to-[#97BC62] origin-left rounded-full"
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white/90 text-sm md:text-base font-light tracking-wide"
          >
            Preparing Nature's Goodness... {Math.round(loadingProgress)}%
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader;