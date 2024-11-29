import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower, Sparkle, Feather } from 'lucide-react';

const PreLoader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const totalTime = 2500; // Total loading time
    const interval = 50; // Update interval
    const steps = totalTime / interval;

    const loadingTimer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / steps);
        if (newProgress >= 100) {
          clearInterval(loadingTimer);
          onLoadingComplete();
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(loadingTimer);
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 0,
      transition: { 
        delay: 2.6, 
        duration: 0.5,
        when: "afterChildren" 
      }
    }
  };

  const iconVariants = {
    initial: { 
      scale: 0.5, 
      rotate: 0 
    },
    animate: { 
      scale: [0.5, 1.2, 1],
      rotate: [0, 360, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressBarVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: loadingProgress / 100,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] 
      flex flex-col justify-center items-center space-y-8 text-white"
    >
      {/* Animated Icons */}
      <div className="flex space-x-6">
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          <Flower className="w-16 h-16 text-rose-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants} 
          initial="initial" 
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <Sparkle className="w-16 h-16 text-amber-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants} 
          initial="initial" 
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <Feather className="w-16 h-16 text-emerald-400" />
        </motion.div>
      </div>

      {/* Brand Text */}
      <h1 className="text-4xl font-serif tracking-wider text-white">
        Ethereal Adornments
      </h1>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          variants={progressBarVariants}
          initial="initial"
          animate="animate"
          className="h-full bg-gradient-to-r from-rose-500 to-amber-500 origin-left"
        />
      </div>

      {/* Loading Percentage */}
      <p className="text-xl font-light">
        Loading... {Math.round(loadingProgress)}%
      </p>
    </motion.div>
  );
};

export default PreLoader;