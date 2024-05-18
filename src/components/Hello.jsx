import { motion } from "framer-motion";
import React from "react";

const Hello = ({ onDismiss }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: [0.64, 0, 0.78, 0], duration: 2 }}
      onAnimationComplete={onDismiss}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-800 text-white md:mx-0 px-20"
    >
      <div className="text-center p-10 rounded-lg shadow-lg bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our WebSite!🙂</h1>
        <p className="text-lg mb-6">
          We're thrilled to have you here. Explore our features and enjoy your
          experience! ✨
        </p>
      </div>
    </motion.div>
  );
};

export default Hello;
