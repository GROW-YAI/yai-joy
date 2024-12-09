import React from 'react';
import { motion } from 'framer-motion';
import K from '../constants';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-white py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 mb-4"
          >
            <K.BRAND_INFO.icon className="w-8 h-8 text-accent" />
            <h2 className="text-2xl font-bold font-serif text-accent">
              {K.BRAND_INFO.name}
            </h2>
          </motion.div>
          
          <p className="text-gray-300 mb-4">
            {K.BRAND_INFO.description}
          </p>
          
          <div className="flex space-x-4">
            {K.SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-all`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        {K.MENU_SECTIONS.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-lg font-bold mb-4 text-accent">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <motion.li
                  key={linkIndex}
                  whileHover={{ translateX: 5 }}
                  className="transition-transform"
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">
            Connect With Us
          </h3>
          <ul className="space-y-3">
            {K.CONTACT_INFO.map((contact, index) => (
              <li 
                key={index} 
                className="flex items-center text-gray-300 space-x-3 break-words"
              >
                <contact.icon className="w-5 h-5 text-accent" />
                <span className="text-ellipsis overflow-hidden">{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400">
          © 2024 JoyaCoco. 
          Crafted with <span className="text-accent">♥</span> 
          {" "} | All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
