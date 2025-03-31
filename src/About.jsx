import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaGamepad, FaCloud, FaCode, FaFootballBall, FaCamera, FaInstagram, FaEnvelope, FaCar } from "react-icons/fa";
import gif4 from "./assets/gif4.gif";

function About({ onBackToHome }) {
  const aboutTiles = [
    {
      id: 1,
      icon: <FaGamepad className="text-3xl" />,
      title: "Gaming Enthusiast",
      content: "I love video games, computers and tech...",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      icon: <FaCloud className="text-3xl" />,
      title: "Tech Interests",
      content: "Enthusiasm for Cloud Computing, Machine Learning and a little bit of this and that...",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <FaCode className="text-3xl" />,
      title: "Collaboration",
      content: "Looking to collaborate on anything that brings interest to me and excites me...",
      gradient: "from-pink-500 to-red-500"
    },
    {
      id: 4,
      icon: <FaFootballBall className="text-3xl" />,
      title: "Hobbies",
      content: "Football, Formula 1, Photography, Gaming...",
      gradient: "from-red-500 to-yellow-500"
    },
    {
      id: 5,
      icon: <FaCar className="text-3xl" />,
      title: "Let's Talk",
      content: "Ask me about games, game dev, football, bits of cloud and tech...",
      gradient: "from-yellow-500 to-green-500"
    },
    {
      id: 6,
      icon: <FaEnvelope className="text-3xl" />,
      title: "Contact",
      content: "Easy mate, reach me in instagram or email me...",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <img 
            src={gif4} 
            alt="Background Animation"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/80 to-purple-900/30"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
          <motion.button
            onClick={onBackToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group order-2 sm:order-1"
          >
            <MdKeyboardDoubleArrowLeft className="text-xl sm:text-2xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </motion.button>
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient order-1 sm:order-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-3 sm:mb-4">
            Hi, I'm <span className="text-blue-400 font-bold">Satadru Jati</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4 sm:px-0">
            A part-time computer science engineering student and full-time learner
          </p>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {aboutTiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gray-900/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800/50 h-full
                             group-hover:border-blue-500/50 transition-all duration-300 
                             shadow-lg group-hover:shadow-blue-500/20">
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${tile.gradient} 
                                opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${tile.gradient} 
                                 flex items-center justify-center mb-3 sm:mb-4 transform 
                                 group-hover:scale-110 transition-transform duration-300`}>
                    {tile.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-transparent 
                                group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 
                                group-hover:to-purple-400 transition-all duration-300">
                    {tile.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                    {tile.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-gray-400 italic px-4 sm:px-0">
            ⚡ Fun fact: I put my cereal first then milk...
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 sm:mt-8 flex justify-center gap-6"
        >
          <motion.a
            href="https://www.instagram.com/shit.satadru/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-xl sm:text-2xl text-gray-400 hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="mailto:satadrujati3317@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-xl sm:text-2xl text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default About; 