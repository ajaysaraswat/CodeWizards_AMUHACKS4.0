import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#6a0dad] to-[#9b4de0] p-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white font-bold text-xl flex items-center">
          <Link to="/" className="text-white">
            BrandLogo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white text-lg">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* User Icon / Avatar */}
        <div className="flex items-center space-x-4">
          <FaUserCircle size={28} className="text-white cursor-pointer" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes size={30} className="text-white" />
            ) : (
              <FaBars size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black p-4 absolute top-0 left-0 right-0 mt-12">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-yellow-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
