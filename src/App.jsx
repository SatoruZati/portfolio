import "./App.css"
import pfp from "./assets/pfp.jpg"
import resume from "./assets/Resume01.pdf"
import heroGif from "./assets/be54b82ccd4221f086185076f525e0c2.gif"
import backgroundGif from "./assets/landscape-1c.gif"
import gif2 from "./assets/gif2.gif"
import { GoSun } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { FaGithub, FaLinkedin, FaAws, FaPython, FaJava, FaHtml5, FaCode, FaChartLine, FaCodeBranch } from "react-icons/fa";
import { SiGooglecloud, SiSalesforce, SiUnrealengine, SiTailwindcss } from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './Experience';
import About from './About';

function App(){
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContact, setShowContact] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getGradientPosition = (bounds) => {
    if (!bounds) return "50% 50%";
    const x = ((mousePosition.x - bounds.left) / bounds.width) * 100;
    const y = ((mousePosition.y - bounds.top) / bounds.height) * 100;
    return `${x}% ${y}%`;
  };

  return (
    <div ref={containerRef} className="flex flex-col m-0 p-0 w-screen min-h-screen bg-black text-white overflow-x-hidden">
      {showContact ? (
        <Contact onBackToHome={() => setShowContact(false)} />
      ) : showExperience ? (
        <Experience onBackToHome={() => setShowExperience(false)} />
      ) : showAbout ? (
        <About onBackToHome={() => setShowAbout(false)} />
      ) : (
        <>
          {/* Background Particles */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
          </div>

    {/* Nav-Bar */}
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-8 py-4 sm:h-20 font-medium">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative mb-4 sm:mb-0 sm:w-1/4"
              >
                <h1 className="text-2xl sm:text-3xl text-white font-bold cyber-text matrix-text tracking-wider">
                  <span className="text-blue-400 hover:text-blue-300">S</span>
                  <span className="text-purple-400 hover:text-purple-300">4</span>
                  <span className="text-blue-300 hover:text-blue-200">t</span>
                  <span className="text-gray-300 hover:text-white">0</span>
                  <span className="text-blue-400 hover:text-blue-300">r</span>
                  <span className="text-purple-400 hover:text-purple-300">U</span>
                  <span className="text-blue-300 hover:text-blue-200">Z</span>
                  <span className="text-gray-300 hover:text-white">a</span>
                  <span className="text-blue-400 hover:text-blue-300">t</span>
                  <span className="text-purple-400 hover:text-purple-300">i</span>
                </h1>
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Center Navigation */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:w-2/4 justify-center">
                <div className="flex gap-4 sm:gap-12">
                  <motion.button 
                    onClick={() => setShowAbout(true)}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm sm:text-base text-gray-300 hover:text-white cursor-pointer relative group tracking-wide"
                  >
                    About
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  <motion.a 
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-sm sm:text-base text-gray-300 hover:text-white cursor-pointer relative group tracking-wide"
                  >
                    Resume
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>

              {/* Right Section - Contact Button */}
              <div className="sm:w-1/4 flex justify-end">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm sm:text-base text-white py-2 px-4 sm:px-6 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 tracking-wide"
                  onClick={() => setShowContact(true)}
                >
                  Get in Touch
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-8">
            <motion.div 
              style={{ y, opacity }}
              className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50 z-0"
            />
            <div className="absolute inset-0 z-0">
              <img 
                src={heroGif} 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                alt="Hero Animation"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center z-10 mt-16 sm:mt-0"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.img 
                  src={pfp} 
                  className="w-32 sm:w-40 h-32 sm:h-40 rounded-full mx-auto mb-6 sm:mb-8 border-4 border-blue-500/30 shadow-lg shadow-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Satadru Jati
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8 tracking-wide px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Your Friendly Neighborhood Computer Science Engineer
              </motion.p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a href="https://github.com/SatoruZati?tab=repositories" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-400 hover:text-blue-300 text-base sm:text-lg flex items-center gap-2 group justify-center"
                >
                  View My Work 
                  <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div 
            className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 relative z-10 bg-black/80 backdrop-blur-sm"
            ref={(el) => {
              if (el) {
                const bounds = el.getBoundingClientRect();
                el.style.setProperty('--mouse-x', getGradientPosition(bounds));
              }
            }}
          >
            <motion.div 
              className="absolute inset-0 z-0 overflow-hidden"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 0.8 }}
              style={{
                background: `radial-gradient(circle at var(--mouse-x), rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
              }}
            >
              <motion.div
                className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {/* Resume Card */}
              <motion.a 
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex flex-col h-full">
                  <SiGoogledocs className="text-5xl text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"/>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">Resume</h2>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">View my professional journey</p>
                  <div className="mt-auto pt-4">
                    <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                      Open Resume <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a 
                href="https://github.com/SatoruZati"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex flex-col h-full">
                  <FaGithub className="text-5xl text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"/>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">GitHub</h2>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Explore my code repositories</p>
                  <div className="mt-auto pt-4">
                    <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                      View Profile <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a 
                href="https://www.linkedin.com/in/satadru-jati-40615b275/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex flex-col h-full">
                  <FaLinkedin className="text-5xl text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"/>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">LinkedIn</h2>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Connect with me professionally</p>
                  <div className="mt-auto pt-4">
                    <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                      View Profile <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1 transition-transform"/>
                    </span>
      </div>
      </div>
              </motion.a>
      </div>
    </div>

          {/* Skills Section */}
          <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 bg-black/80 backdrop-blur-sm relative z-10">
            <motion.div 
              className="absolute inset-0 z-0 overflow-hidden"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 0.8 }}
            >
              <motion.div
                className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2"
                animate={{
                  background: [
                    "radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2 
                className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Technologies I Work With
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
                {[
                  { icon: <FaAws />, name: "AWS" },
                  { icon: <FaPython />, name: "Python" },
                  { icon: <FaJava />, name: "Java" },
                  { icon: <SiGooglecloud />, name: "Google Cloud" },
                  { icon: <SiSalesforce />, name: "Salesforce" },
                  { icon: <SiUnrealengine  />, name: "Unreal Engine" },
                  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                  { icon: <FaHtml5 />, name: "HTML5" },

                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors">{tech.icon}</div>
                    <span className="text-gray-300 text-sm tracking-wide">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline Section */}
          <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 bg-black/80 backdrop-blur-sm relative z-10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black/80 to-purple-900/10"></div>
              <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2 
                className="text-3xl sm:text-5xl font-bold text-center mb-16 sm:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Education Timeline
              </motion.h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent transform -translate-x-1/2"></div>

                {/* Timeline Items */}
                <div className="space-y-24">
                  {/* AISSE Item */}
                  <motion.div 
                    className="relative flex flex-col sm:flex-row items-center sm:even:flex-row-reverse gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="w-3 h-3 absolute left-0 sm:left-1/2 top-8 transform -translate-x-1/2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.5)] z-10"></div>
                    <div className="sm:w-1/2 ml-12 sm:ml-0">
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-500 group overflow-hidden">
                        <div className="border-b border-gray-700/30 px-4 py-2 flex items-center gap-2 bg-gray-900/50">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <span className="text-sm text-gray-400">secondary.js</span>
                        </div>
                        <div className="p-6 font-mono">
                          <div className="space-y-2">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">degree</span> <span className="text-white">=</span> <span className="text-emerald-400">"AISSE (Class X)"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">school</span> <span className="text-white">=</span> <span className="text-emerald-400">"Techno India Group Public School"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">location</span> <span className="text-white">=</span> <span className="text-emerald-400">"Chinsurah"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">year</span> <span className="text-white">=</span> <span className="text-emerald-400">"2020"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">score</span> <span className="text-white">=</span> <span className="text-orange-400">96.4</span>;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* AISSCE Item */}
                  <motion.div 
                    className="relative flex flex-col sm:flex-row items-center sm:even:flex-row-reverse gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="w-3 h-3 absolute left-0 sm:left-1/2 top-8 transform -translate-x-1/2 bg-purple-400 rounded-full shadow-[0_0_12px_rgba(167,139,250,0.5)] z-10"></div>
                    <div className="sm:w-1/2 ml-12 sm:ml-0">
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/30 hover:border-purple-500/30 transition-all duration-500 group overflow-hidden">
                        <div className="border-b border-gray-700/30 px-4 py-2 flex items-center gap-2 bg-gray-900/50">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <span className="text-sm text-gray-400">highSchool.js</span>
                        </div>
                        <div className="p-6 font-mono">
                          <div className="space-y-2">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">degree</span> <span className="text-white">=</span> <span className="text-emerald-400">"AISSCE (Class XII)"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">school</span> <span className="text-white">=</span> <span className="text-emerald-400">"Techno India Group Public School"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">location</span> <span className="text-white">=</span> <span className="text-emerald-400">"Chinsurah"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">year</span> <span className="text-white">=</span> <span className="text-emerald-400">"2022"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">score</span> <span className="text-white">=</span> <span className="text-orange-400">84.6</span>;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* BTech Item */}
                  <motion.div 
                    className="relative flex flex-col sm:flex-row items-center sm:even:flex-row-reverse gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="w-3 h-3 absolute left-0 sm:left-1/2 top-8 transform -translate-x-1/2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.5)] z-10"></div>
                    <div className="sm:w-1/2 ml-12 sm:ml-0">
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-500 group overflow-hidden">
                        <div className="border-b border-gray-700/30 px-4 py-2 flex items-center gap-2 bg-gray-900/50">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <span className="text-sm text-gray-400">education.js</span>
                        </div>
                        <div className="p-6 font-mono">
                          <div className="space-y-2">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">degree</span> <span className="text-white">=</span> <span className="text-emerald-400">"Bachelor of Technology"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">major</span> <span className="text-white">=</span> <span className="text-emerald-400">"Computer Science and Engineering"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">university</span> <span className="text-white">=</span> <span className="text-emerald-400">"University of Engineering & Management, Kolkata"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">duration</span> <span className="text-white">=</span> <span className="text-emerald-400">"2022 - 2026"</span>;</p>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">gpa</span> <span className="text-white">=</span> <span className="text-orange-400">8.47</span>;</p>
                            <p className="mt-4"><span className="text-purple-400">const</span> <span className="text-blue-400">coursework</span> <span className="text-white">=</span> <span className="text-white">[</span></p>
                            <div className="pl-4">
                              <p><span className="text-emerald-400">"Data Structures & Algorithms"</span><span className="text-white">,</span></p>
                              <p><span className="text-emerald-400">"Machine Learning & AI"</span><span className="text-white">,</span></p>
                              <p><span className="text-emerald-400">"Cloud Computing"</span><span className="text-white">,</span></p>
                              <p><span className="text-emerald-400">"DBMS"</span><span className="text-white">,</span></p>
                              <p><span className="text-emerald-400">"OOP"</span></p>
                            </div>
                            <p><span className="text-white">];</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 bg-black/80 backdrop-blur-sm relative z-10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black/80 to-purple-900/10"></div>
              <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2 
                className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                GitHub Highlights
              </motion.h2>
              
              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
                {/* Large Featured Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="md:col-span-2 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 
                           hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20
                           group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))'
                       }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <FaGithub className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                      <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-200 transition-colors">Featured Repository</h3>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl text-white group-hover:text-emerald-200 transition-colors">Portfolio Website</h4>
                      <p className="text-gray-300 group-hover:text-emerald-100/80 transition-colors">A modern, responsive portfolio built with React and Tailwind CSS, featuring smooth animations and interactive elements.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">React</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">Tailwind</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">Framer Motion</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 
                           hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20
                           group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))'
                       }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <FaChartLine className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-200 transition-colors">GitHub Stats</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300 group-hover:text-emerald-100/80 transition-colors">• 100+ Contributions</p>
                      <p className="text-gray-300 group-hover:text-emerald-100/80 transition-colors">• 15+ Repositories</p>
                      <p className="text-gray-300 group-hover:text-emerald-100/80 transition-colors">• 5+ Stars Earned</p>
                    </div>
                  </div>
                </motion.div>

                {/* Code Snippet Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="md:col-span-2 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 
                           hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20
                           group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))'
                       }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <FaCode className="text-3xl text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">Featured Code</h3>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{`// Animation component with Framer Motion
const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
};`}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>

                {/* Recent Activity Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 
                           hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20
                           group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))'
                       }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <FaCodeBranch className="text-3xl text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">• Portfolio Website Update</p>
                      <p className="text-gray-300">• New Project Contributions</p>
                      <p className="text-gray-300">• Code Reviews</p>
                    </div>
                  </div>
                </motion.div>

                {/* Contribution Graph Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="md:col-span-2 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 
                           hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20
                           group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))'
                       }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <FaChartLine className="text-3xl text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">Contribution Activity</h3>
                    </div>
                    <div className="h-32 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-7 gap-1">
                        {[
                          0, 0, 1, 2, 0, 1, 0,
                          1, 0, 0, 3, 0, 0, 1,
                          0, 2, 0, 1, 0, 1, 0,
                          1, 0, 1, 0, 2, 0, 1,
                          0, 1, 0, 2, 1, 0, 0
                        ].map((contributions, i) => (
                          <div 
                            key={i}
                            className={`w-3 h-3 rounded-sm ${
                              contributions === 0 ? 'bg-emerald-500/10' :
                              contributions === 1 ? 'bg-emerald-500/30' :
                              contributions === 2 ? 'bg-emerald-500/50' :
                              'bg-emerald-500/70'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* GitHub Skills Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 
                           hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20
                           group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))'
                       }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <FaCode className="text-3xl text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">GitHub Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">Git Flow</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">CI/CD</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">Actions</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">Pages</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 rounded-full text-sm transition-colors">Projects</span>
                    </div>
                  </div>
                </motion.div>
        </div>
      </div>
    </div>

          {/* Experience Section */}
          <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 bg-black/80 backdrop-blur-sm relative z-10">
            <div className="absolute inset-0 z-0">
              <img 
                src={gif2} 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                alt="Experience Background"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <motion.h2 
                className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Experience
              </motion.h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 text-base text-white py-2 px-6 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20 tracking-wide"
                onClick={() => setShowExperience(true)}
              >
                Explore My Experience
              </motion.button>
            </div>
          </div>

          {/* Interactive Spacer */}
          <div className="relative h-40 overflow-hidden">
            <motion.div 
              className="absolute inset-0"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.6 }}
            >
              <motion.div
                className="w-full h-full"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

    {/* Footer */}
          <footer className="py-6 sm:py-8 px-4 sm:px-8 border-t border-gray-800 relative z-10 bg-black/90">
            <div className="max-w-7xl mx-auto text-center text-gray-400">
              <p className="mb-2 tracking-wide text-sm sm:text-base">
                Made with ❤️ by 
                <span className="ml-2 cyber-text matrix-text">
                  <span className="text-blue-400 hover:text-blue-300">S</span>
                  <span className="text-purple-400 hover:text-purple-300">4</span>
                  <span className="text-blue-300 hover:text-blue-200">t</span>
                  <span className="text-gray-300 hover:text-white">0</span>
                  <span className="text-blue-400 hover:text-blue-300">r</span>
                  <span className="text-purple-400 hover:text-purple-300">U</span>
                  <span className="text-blue-300 hover:text-blue-200">Z</span>
                  <span className="text-gray-300 hover:text-white">a</span>
                  <span className="text-blue-400 hover:text-blue-300">t</span>
                  <span className="text-purple-400 hover:text-purple-300">i</span>
                </span>
              </p>
              <p className="text-xs sm:text-sm tracking-wide">© 2024 All rights reserved</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;