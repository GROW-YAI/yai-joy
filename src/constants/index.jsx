// src/constants/index.jsx
import React from "react";
import {  Flower, Sparkle, Feather, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
// import { Leaf, Heart, Droplet, ShieldCheck } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import cocoImg from "../assets/coconut1.jpg";
import cocoflakesImg from "../assets/cocoflakes.jpeg";
import cocoflakes1Img from "../assets/cocoflakes1.jpeg";
import cocoflakes2Img from "../assets/cocoflakes2.jpeg";
import cocooilImg from "../assets/cocooil.jpeg";
import cocooil1Img from "../assets/cocooil1.jpeg";
import cocomilkImg from "../assets/cocomilk.jpeg";
import cocotreeImg from "../assets/cocotree.jpeg";
import cocowaterImg from "../assets/cocowater.jpeg";
import cocowater1Img from "../assets/cocowater1.jpeg";
import cocoflakes5Img from "../assets/cocoflakes3-2.jpeg";
import cocoflakes3Img from "../assets/cocoflakes3.jpeg";
import cocoflakes4Img from "../assets/cocoflakes3-1.jpeg";

const K = {
  NAVLINKS: [
    {
      id: "home",
      name: "Home",
      icon: <Flower className="w-6 h-6" />,
      color: "text-rose-500",
    },
    {
      id: "about",
      name: "Our Story",
      icon: <Feather className="w-6 h-6" />,
      color: "text-emerald-500",
    },
    {
      id: "products",
      name: "Products",
      icon: <Sparkle className="w-6 h-6" />,
      color: "text-amber-500",
    },
    {
      id: "contact",
      name: "Contact",
      icon: <MapPin className="w-6 h-6" />,
      color: "text-emerald-500",
    },
  ],

  SOCIAL_LINKS: [
    {
      icon: Twitter,
      href: "https://x.com/Joya_coc?s=09",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100063503170902&mibextid=ZbWKwL",
      color: "hover:text-indigo-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/joyacoco?igsh=OGQ5ZDc2ODk2ZA==",
      color: "hover:text-pink-500",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@joyafoods_gh?_t=8sEoZs8WfOH&_r=1",
      color: "hover:text-white",
    }
  ],

  MENU_SECTIONS: [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "#home" },
        { name: "Products", href: "#products" },
        { name: "About", href: "#about" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    // {
    //   title: "Support",
    //   links: [
    //     { name: "Shipping", href: "#" },
    //     { name: "Returns", href: "#" },
    //     { name: "FAQs", href: "#" },
    //     { name: "Policies", href: "#" },
    //   ],
    // },
  ],

  CONTACT_INFO: [
    // {
    //   icon: MapPin,
    //   text: "123 Coconut Grove, Tropical Business Park",
    // },
    {
      icon: Phone,
      text: "+233 55 469 2468",
    },
    {
      icon: Mail,
      text: "Nagiolove.ent@gmail.com",
    },
  ],

  HERO_IMAGES: [
    { src: cocoImg },
    { src: cocoflakesImg },
    { src: cocoflakes1Img },
    { src: cocoflakes2Img },
    { src: cocooilImg },
    { src: cocooil1Img },
    { src: cocomilkImg },
    { src: cocotreeImg },
    { src: cocowaterImg },
    { src: cocowater1Img },
    { src: cocoflakes5Img },
    { src: cocoflakes3Img },
    { src: cocoflakes4Img },
  ],

  TESTIMONIALS: [
    {
      text: "Nagio Love has been a game-changer in our approach to coconut products. Their commitment to quality and innovation is unmatched. Every product feels like a fresh, natural experience that truly enhances our daily nutrition.",
      author: "John Perry",
    },
    {
      text: "The sustainability and ethical practices of Nagio Love set them apart. From sourcing to processing, their dedication to environmental responsibility is truly impressive. Their coconut products are not just delicious, but also conscientious.",
      author: "Sarah Williams",
    },
    {
      text: "Nagio Love' coconut range has become a staple in our household. The purity, taste, and nutritional value of their products are exceptional. It's refreshing to find a brand that prioritizes both health and flavor.",
      author: "Michael Chen",
    },
    {
      text: "Working with Nagio Love has transformed our product lineup. Their innovative coconut solutions and unwavering support have allowed us to offer our customers truly unique and high-quality offerings.",
      author: "Olivia Gonzalez",
    },
  ],

  BRAND_INFO: {
    name: "Nagio Love",
    description: "Bringing you the richness of coconuts in every sip and bite. Explore our premium coconut-based products, crafted to nourish your body and delight your senses.",
    icon: Flower,
    TEXT: {
      title: "Welcome to Nagio Love!",
      subtitle: "'Nature's bounty, crafted with precision.",
      buttonText: "Discover Our Products",
    },
  },

  ABOUT_SECTION: {
    title: "Our Coconut Journey",
    subtitle: "Transforming coconuts into exceptional nutritional experiences.",
    story: {
      title: "Our Story: Rooted in Natural Innovation",
      description:
        "Nagio Love was born from a passion for coconuts and a commitment to bringing the highest quality coconut products to your table. We've overcome challenges through innovative processing techniques that preserve the natural goodness of coconuts, ensuring every product delivers maximum nutrition and flavor.",
    },
    mission: {
      title: "Our Mission: Nourishing Lives Naturally",
      description:
        "At Nagio Love, we're dedicated to transforming coconuts into nutritious, delicious products that support your health and well-being. Our team works tirelessly to develop innovative coconut solutions that are pure, preservative-free, and aligned with your lifestyle, bringing the best of nature directly to you.",
    },
  },
};

export default K;
