import React from "react";
import { motion } from "framer-motion";
import K from "../constants";
import joyaLogo from "../assets/joya-logo-new.png"; 

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-white py-8 sm:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="xs:col-span-2 md:col-span-2 lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4"
            >
              {/* <K.BRAND_INFO.icon className="w-8 h-8 text-accent" /> */}
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-accent">
                Joya Foods
              </h2>
            </motion.div>

            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Transforming coconuts into innovative, nutritious products. From
              refreshing coconut water to versatile coconut flakes, we're
              dedicated to bringing nature's finest to your table with quality and
              sustainability.
            </p>

            <div className="flex space-x-4">
              {K.SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-all`}
                  aria-label={social.name || "Social link"}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Menu Sections */}
          {K.MENU_SECTIONS.map((section, sectionIndex) => (
            <div key={sectionIndex} className="xs:col-span-1">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">
                {section.title}
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ translateX: 5 }}
                    className="transition-transform"
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="xs:col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">
              Connect With Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {K.CONTACT_INFO.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-300 space-x-2 sm:space-x-3 break-words"
                >
                  <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-ellipsis overflow-hidden text-sm sm:text-base leading-tight">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Section */}
          <div className="xs:col-span-2 md:col-span-2 lg:col-span-1 flex justify-center md:justify-start lg:justify-center items-start">
            <img 
              src={joyaLogo} 
              alt="Joya Foods Logo" 
              className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto max-w-full"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 text-center border-t border-gray-700 pt-4 sm:pt-6">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Joya Foods. Crafting Coconut Excellence{" "}
            <span className="text-accent">♥</span> | Sustainable. Delicious.
            Natural.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;