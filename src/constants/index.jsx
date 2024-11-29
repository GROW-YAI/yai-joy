import React from 'react';
import { Flower, Sparkle, Feather, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const K = {
  NAVLINKS: [
    { 
      id: 'home', 
      name: 'Artisan Haven', 
      icon: <Flower className="w-6 h-6" />,
      color: 'text-rose-500' 
    },
    { 
      id: 'collection', 
      name: 'Bead Symphony', 
      icon: <Sparkle className="w-6 h-6" />,
      color: 'text-amber-500' 
    },
    { 
      id: 'about', 
      name: 'Crafted Story', 
      icon: <Feather className="w-6 h-6" />,
      color: 'text-emerald-500' 
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

  BRAND_INFO: {
    name: "Ethereal Adornments",
    description: "Crafting stories through meticulously designed beads and accessories. Each piece whispers a unique tale.",
    icon: Flower
  }
};

export default K;
