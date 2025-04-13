import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaVideo } from "react-icons/fa";

const Dashboard = () => {
  const userName = "Samar Abbas";
  const onlineUsers = ["Ali", "Zara", "Fatima", "Ahmed", "Bilal"];
  const offlineUsers = ["Tariq", "Hina", "Usman", "Iqra", "Nida"];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3e1e68] via-[#9b4de0] to-[#f2a65a] p-8 text-white font-sans">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-12 drop-shadow-xl"
      >
        Hello, <span className="text-yellow-300">{userName}</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Online Users */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/20"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-200 flex items-center gap-2">
            🟢 Online Users
          </h2>
          <div className="h-64 overflow-y-auto custom-scroll space-y-3">
            {onlineUsers.map((user, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white/20 text-white rounded-xl p-4 flex justify-between items-center shadow-md hover:bg-green-400/80 hover:text-black transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaUserCircle size={28} />
                  <span className="font-medium text-lg">{user}</span>
                </div>
                <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full transition duration-300">
                  <FaVideo />
                  Call
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Offline Users */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/20"
        >
          <h2 className="text-2xl font-semibold mb-4 text-red-200 flex items-center gap-2">
            🔴 Offline Users
          </h2>
          <div className="h-64 overflow-y-auto custom-scroll space-y-3">
            {offlineUsers.map((user, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 text-gray-300 rounded-xl p-4 flex items-center gap-3 shadow-sm"
              >
                <FaUserCircle size={26} />
                <span>{user}</span>
              </motion.div>
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
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
