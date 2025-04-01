import React, { useState } from 'react';
import { motion } from 'framer-motion';
import thankYouImage from './assets/thankyou.jpg'; // Import the image

const HomeContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent default form submission if needed, though mailto handles it
    // e.preventDefault(); 
    // Construct mailto link - basic encoding for subject/body
    const subject = encodeURIComponent(`Feedback from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:satadrujati257@gmail.com?subject=${subject}&body=${body}`;
  };

  // Basic approximation of the glitch effect for the button hover/focus
  const glitchHover = {
    textShadow: `
      1px 1px 0px rgba(0, 255, 255, 0.7), 
      -1px -1px 0px rgba(255, 0, 0, 0.7)
    `,
    clipPath: 'inset(10% 0 15% 0)',
    transition: 'text-shadow 0.05s ease-in-out, clip-path 0.05s ease-in-out',
  };

  const glitchFocus = {
    ...glitchHover,
    clipPath: 'inset(30% 0 40% 0)',
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 bg-black/80 backdrop-blur-sm relative z-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-400 text-white py-2 px-1 outline-none transition-colors duration-300 placeholder-gray-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-400 text-white py-2 px-1 outline-none transition-colors duration-300 placeholder-gray-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Share your thoughts
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-400 text-white py-2 px-1 outline-none transition-colors duration-300 placeholder-gray-500 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              {/* Using an 'a' tag styled as a button for mailto */}
              <motion.a
                href={`mailto:satadrujati257@gmail.com?subject=${encodeURIComponent(`Feedback from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                className="inline-block w-full sm:w-auto text-center px-8 py-3 border border-gray-600 text-white font-semibold tracking-wider uppercase text-sm relative overflow-hidden transition-all duration-300 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500"
                whileHover={glitchHover}
                whileFocus={glitchFocus}
                style={{
                  // Base style to prevent layout shift on hover/focus
                  textShadow: 'none',
                  clipPath: 'inset(0 0 0 0)',
                }}
              >
                Share Your Feedback
              </motion.a>
            </div>
          </form>
        </motion.div>

        {/* Contact Me Text Section */}
        <motion.div
          className="text-center md:text-left relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative shape with image */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-50 hidden md:block overflow-hidden border-2 border-gray-700">
            <img 
              src={thankYouImage} 
              alt="Thank you decorative element" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-white relative inline-block">
              <span style={{ textShadow: '2px 2px 0px rgba(0, 255, 255, 0.6), -2px -2px 0px rgba(255, 0, 0, 0.6)' }}>
                Contact
              </span>
              <span className="block text-4xl sm:text-5xl mt-1">Me</span> {/* Reverted text */}
              {/* Underline */}
              <span className="absolute left-0 -bottom-2 w-20 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              It is very important for me to keep in touch with you, so I am always ready to answer any question that interests you. Shoot! {/* Reverted text */}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeContactForm;
