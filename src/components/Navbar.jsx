import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/70 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide cursor-pointer">
          Kevin<span className="text-blue-600">.Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            About Me
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("vision")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Vision
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
        >
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6 text-gray-700 font-medium">
          <p
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600 cursor-pointer"
          >
            About Me
          </p>
          <p
            onClick={() => scrollToSection("projects")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Projects
          </p>
          <p
            onClick={() => scrollToSection("vision")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Vision
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;