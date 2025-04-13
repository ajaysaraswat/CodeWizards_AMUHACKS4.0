import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo, replace with actual login state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#6a0dad] to-[#9b4de0] p-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white font-bold text-xl flex items-center">
          <Link to={isLoggedIn ? "/dashboard" : "/"} className="text-white">
            VideoConnect
          </Link>
        </div>

        {/* User Icon or Login/Register Buttons */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link to="/dashboard">
              <FaUserCircle size={28} className="text-white cursor-pointer" />
            </Link>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login">
                <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                  Register
                </button>
              </Link>
            </div>
          )}
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
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="hover:text-yellow-300 transition duration-300"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
