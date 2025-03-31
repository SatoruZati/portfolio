import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaDiscord } from 'react-icons/fa';
import gif1 from './assets/gif1.gif';

function Contact({ onBackToHome }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <img 
        src={gif1} 
        alt="Background Animation"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
      />
      <motion.h1 
        className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl z-10">
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-3xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <a href="mailto:satadrujati3317@gmail.com" className="text-gray-300">satadrujati3317@gmail.com</a>
        </motion.div>
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhone className="text-3xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-300">+91 7003559449</p>
        </motion.div>
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-3xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
          <a href="https://www.linkedin.com/in/satadru-jati-40615b275/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">View Profile</a>
        </motion.div>
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaInstagram className="text-3xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Instagram</h2>
          <a href="https://www.instagram.com/shit.satadru/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">Follow Me</a>
        </motion.div>
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaTwitter className="text-3xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Twitter</h2>
          <a href="https://x.com/HasaFeed_GG" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">Follow Me</a>
        </motion.div>
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaDiscord className="text-3xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Discord</h2>
          <p className="text-gray-300">satoruzati</p>
        </motion.div>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 text-base text-white py-2 px-6 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 tracking-wide z-10"
        onClick={onBackToHome}
      >
        Back to Home Page
      </motion.button>
    </div>
  );
}

export default Contact; 