import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower, Menu } from 'lucide-react';
import K from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const menuRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-darkBg via-darkBgAccent to-darkestBg text-white"
    >
      <div
        className="container mx-auto px-4 py-3 flex justify-between items-center relative"
        ref={menuRef}
      >
        {/* Brand with Animated Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <Flower className="w-8 h-8 text-roseAccent animate-pulse" />
          <h1 className="text-2xl font-bold font-serif tracking-wider text-roseAccent">
            Ethereal Adornments
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {K.NAVLINKS.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center space-x-2 transition-all duration-300 
                ${activeSection === link.id ? `${link.color} font-bold scale-110` : 'text-gray-300 hover:text-white'}
              `}
            >
              {link.icon}
              <span>{link.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <Menu
            className={`w-8 h-8 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
          />
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-darkBgAccent md:hidden"
            >
              {K.NAVLINKS.map((link) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: K.NAVLINKS.indexOf(link) * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    w-full text-left p-4 flex items-center space-x-3
                    hover:bg-darkestBg transition-colors
                    ${activeSection === link.id ? 'bg-darkestBg' : ''}
                  `}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
