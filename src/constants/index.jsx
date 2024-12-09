// src/constants/index.jsx
import React from 'react';
import { Flower, Sparkle, Feather, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
// import { Leaf, Heart, Droplet, ShieldCheck } from 'lucide-react';
import cocoImg from '../assets/coconut1.jpg';
import coco1Img from '../assets/coconut2.jpg';

const K = {
  NAVLINKS: [
    { 
      id: 'home', 
      name: 'Artisan Haven', 
      icon: <Flower className="w-6 h-6" />,
      color: 'text-rose-500' 
    },
    { 
      id: 'about', 
      name: 'Our Story', 
      icon: <Feather className="w-6 h-6" />,
      color: 'text-emerald-500' 
    },
    { 
      id: 'products', 
      name: 'Handcrafted Creations', 
      icon: <Sparkle className="w-6 h-6" />,
      color: 'text-amber-500' 
    },
    { 
      id: 'contact', 
      name: 'Whispers', 
      icon: <MapPin className="w-6 h-6" />,
      color: 'text-emerald-500' 
    }
  ],
  
  SOCIAL_LINKS: [
    { 
      icon: Twitter, 
      href: "#", 
      color: "hover:text-blue-400" 
    },
    { 
      icon: Facebook, 
      href: "#", 
      color: "hover:text-indigo-500" 
    },
    { 
      icon: Instagram, 
      href: "#", 
      color: "hover:text-pink-500" 
    }
  ],

  MENU_SECTIONS: [
    {
      title: "Explore",
      links: [
        { name: "Artisan Haven", href: "#home" },
        { name: "Bead Symphony", href: "#collection" },
        { name: "Crafted Story", href: "#about" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Policies", href: "#" }
      ]
    }
  ],

  CONTACT_INFO: [
    { 
      icon: MapPin, 
      text: "203 Ethereal Lane, Artisan Quarter" 
    },
    { 
      icon: Phone, 
      text: "+1 (555) BEADS-ART" 
    },
    { 
      icon: Mail, 
      text: "whispers@etherealadornments.com" 
    }
  ],

  HERO_IMAGES: [
    { src: cocoImg },
    { src: coco1Img }
  ],

  TESTIMONIALS: [
    {
      text: "JoyaCoco has been a transformative partner for us. Their dedication to quality not only met our expectations but exceeded them. The innovative coconut products they offer have revitalized our approach to health and wellness, making them an invaluable ally.",
      author: "John Perry"
    },
    {
      text: "The level of care and attention to detail from the JoyaCoco team has been exceptional. Their commitment to sustainable sourcing and ethical practices is truly inspiring. We're proud to partner with them.",
      author: "Sarah Williams"
    },
    {
      text: "JoyaCoco's coconut products have become an integral part of our wellness routine. The quality and effectiveness are unparalleled, and we appreciate their focus on environmental responsibility.",
      author: "Michael Chen"
    },
    {
      text: "Working with JoyaCoco has been a game-changer for our business. Their innovative offerings and unwavering support have helped us provide our customers with truly exceptional coconut-based solutions.",
      author: "Olivia Gonzalez"
    }
  ],

  BRAND_INFO: {
    name: 'Joya Foods',
    description: 'We will elevate your experience with premium coconut products.',
    icon: Flower,
    TEXT: {
      title: 'Welcome to JoyaCoco!',
      subtitle: 'Crafted with love from nature.',
      buttonText: 'Explore Now',
    },
  },

  ABOUT_SECTION: {
    title: 'Discover more about us',
    subtitle: 'Explore our journey, mission, and dedication to quality.',
    story: {
      title: 'Our story: A journey rooted in nature',
      description: 'Join us at JoyaCoco, where we take pride in being your reliable source for exceptional coconut products. Our narrative is one of dedication to purity and quality, overcoming industry challenges with innovative solutions that foster growth and sustainability.'
    },
    mission: {
      title: 'Our mission: Committed to your health and wellness',
      description: 'At the core of JoyaCoco is a passionate team devoted to promoting your health. We are committed to providing organic, preservative-free coconut products that cater to your lifestyle. Count on us to enhance your wellness journey, opening doors to a world of natural goodness.'
    }
  }
  
};

export default K;

