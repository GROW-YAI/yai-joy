import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="font-heading text-lg mb-4 font-bold">JOY'S BEADS & ACCESSORIES</h2>
          <p className="text-gray-300">
            Handcrafted beads and accessories that bring beauty and joy to your life. Discover unique, one-of-a-kind pieces.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-accent transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="font-heading text-lg mb-4 font-bold">Menu</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Shop</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Journal</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="font-heading text-lg mb-4 font-bold">Help</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Shipping Information</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Returns & Exchange</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-heading text-lg mb-4 font-bold">Have a Question?</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              203 Fake St. Mountain View
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              +2 392 3929 210
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-300">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span className="text-accent">♥</span> by JOY'S BEADS & ACCESSORIES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
