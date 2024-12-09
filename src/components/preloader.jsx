import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Apple } from 'lucide-react';

const PreLoader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const totalTime = 2500;
    const interval = 50;
    const steps = totalTime / interval;

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

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { delay: 2.6, duration: 0.5, when: 'afterChildren' } }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1B4D3E] via-[#297373] to-[#40A8C4] flex flex-col justify-center items-center space-y-8 text-white"
    >
      <div className="flex space-x-6">
        <motion.div
          animate={{ scale: [0.5, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Apple className="w-16 h-16 text-[#FF8C00]" />
        </motion.div>
        <motion.div
          animate={{ scale: [0.5, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          <Apple className="w-16 h-16 text-[#FFCC00]" />
        </motion.div>
        <motion.div
          animate={{ scale: [0.5, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <ChevronDown className="w-16 h-16 text-[#00B2B2]" />
        </motion.div>
      </div>

      <h1 className="text-4xl font-serif tracking-wider">Joya Foods</h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: loadingProgress / 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
      >
        <div className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FFCC00] origin-left" />
      </motion.div>

      <p className="text-xl font-light">Loading... {Math.round(loadingProgress)}%</p>
    </motion.div>
  );
};

export default PreLoader;