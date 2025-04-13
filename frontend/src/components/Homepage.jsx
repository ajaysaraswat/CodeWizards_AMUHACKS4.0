import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Replace with the image you want
import videoCallImage from "../assets/video-call-image.jpg";
import Navbar from "./common/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#6a0dad] to-[#9b4de0] flex items-center justify-center p-6">
        {/* Split layout container */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Text & Welcome */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center text-white text-center md:text-left"
          >
            <h1 className="text-4xl font-extrabold mb-4">
              Welcome to VideoConnect
            </h1>
            <p className="text-lg mb-6">
              A place where you can connect with friends and colleagues through
              seamless video calls.
            </p>
            <Link to="/dashboard">
              <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg shadow-lg text-lg hover:bg-yellow-500 transition duration-300">
                Go to Dashboard
              </button>
            </Link>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            <img
              src={videoCallImage} // Ensure the image path is correct
              alt="Video Call"
              className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
