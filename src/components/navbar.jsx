import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import K from "../constants/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile hamburger menu

  // Toggle mobile menu visibility
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu for mobile after clicking
    }
  };

  return (
    <div className="bg-primary text-white p-4 shadow-lg">
      <div className="flex justify-between items-center md:justify-around">
        {/* Brand Logo */}
        <a
          href="#home"
          className="font-heading text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          JOY'S BEADS & ACCESSORIES
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <BiMenu className="text-3xl cursor-pointer" onClick={handleMenu} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex font-body text-lg gap-x-8">
          {K.NAVLINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-accent transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Links - Hamburger Menu */}
      {isMenuOpen && (
        <div className="flex flex-col mt-4 md:hidden font-body text-lg bg-primary shadow-lg p-4 rounded-lg">
          {K.NAVLINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block py-2 hover:text-accent transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
