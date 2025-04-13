import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const userName = "Samar Abbas"; // You can fetch from context or props
  const onlineUsers = ["Ali", "Zara", "Fatima", "Ahmed", "Bilal"];
  const offlineUsers = ["Tariq", "Hina", "Usman", "Iqra", "Nida"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 p-6 text-white">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 drop-shadow-lg"
      >
        Hello, {userName}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Online Users Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-4 text-white">
            🟢 Online Users
          </h2>
          <div className="h-64 overflow-y-auto custom-scroll">
            {onlineUsers.map((user, idx) => (
              <div
                key={idx}
                className="p-3 mb-2 bg-white/30 rounded-lg flex justify-between items-center hover:bg-green-300 hover:text-black transition"
              >
                <span>{user}</span>
                <button className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-green-600 transition">
                  Call
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Offline Users Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-4 text-white">
            🔴 Offline Users
          </h2>
          <div className="h-64 overflow-y-auto custom-scroll">
            {offlineUsers.map((user, idx) => (
              <div
                key={idx}
                className="p-3 mb-2 bg-white/20 rounded-lg flex items-center justify-start text-gray-300"
              >
                <span>{user}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Scroll CSS */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
