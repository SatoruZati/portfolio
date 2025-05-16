import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaUsers, FaLink, FaCode, FaCodeBranch, FaChartLine } from "react-icons/fa";
import gif4 from "./assets/gif4.gif";

function Experience({ onBackToHome }) {
  const experienceData = [
    {
      id: 1,
      title: "Machine Learning Intern",
      company: "Shell",
      location: "Remote",
      period: "Apr–May 2025",
      link: "https://github.com/SatoruZati/Wind-Power-Generation-Forecasting.git",
      achievements: [
        { text: "Developed Wind Power Generation Forecasting model using TensorFlow/Python", icon: <FaCode className="text-blue-400" /> },
        { text: "Analyzed historical weather/turbine data to optimize energy output predictions", icon: <FaChartLine className="text-blue-400" /> },
        { text: "Collaborated with industry professionals on renewable energy solutions", icon: <FaUsers className="text-blue-400" /> }
      ]
    },
    {
      id: 2,
      title: "Web Content Writer",
      company: "TutorialsPoint",
      location: "Remote",
      period: "2022 - 2023",
      link: "https://www.tutorialspoint.com/authors/satadru-jati",
      achievements: [
        { text: "Created comprehensive technical articles covering various programming topics", icon: <FaCode className="text-blue-400" /> },
        { text: "Developed high-quality content for multiple programming languages and frameworks", icon: <FaCodeBranch className="text-blue-400" /> },
        { text: "Maintained consistent engagement through well-structured and informative content", icon: <FaChartLine className="text-blue-400" /> }
      ]
    }
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <img src={gif4} alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/80 to-purple-900/30" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
          <motion.button
            onClick={onBackToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
          >
            <MdKeyboardDoubleArrowLeft className="text-xl sm:text-2xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </motion.button>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Professional Experience
          </motion.h1>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {experienceData.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gray-900/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-800/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20">
                {/* Card Content */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {experience.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400">
                      {experience.company} • {experience.location}
                    </p>
                    <p className="text-sm sm:text-base text-blue-400">{experience.period}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 sm:space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 group/item"
                    >
                      <div className="mt-1 p-1.5 sm:p-2 rounded-lg bg-gray-800/50 group-hover/item:bg-blue-500/10 transition-colors">
                        {achievement.icon}
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 group-hover/item:text-white transition-colors">
                        {achievement.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Link Button */}
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={() => handleLinkClick(experience.link)}
                    className="px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 cursor-pointer w-fit hover:scale-105 active:scale-95"
                  >
                    <FaLink className="transition-transform group-hover/link:rotate-45" />
                    <span className="font-medium">
                      {experience.company === 'Shell' ? 'View Project' : 'View Author Page'}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;