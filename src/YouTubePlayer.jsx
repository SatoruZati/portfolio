import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

const YouTubePlayer = () => {
  const videoId = 'GkSHE6wOzX0'; // Extracted from the URL

  const opts = {
    height: '100%', // Use container height
    width: '100%',  // Use container width
    playerVars: {
      // Removed autoplay: 1
      // Removed controls: 0 (defaults to 1)
      // Removed loop: 1
      // Removed playlist: videoId
      // Removed mute: 1 (defaults to 0 - sound on)
      modestbranding: 1, // Reduce YouTube logo
      showinfo: 0, // Hide video title, uploader
      rel: 0,      // Do not show related videos at the end
    },
  };

  // Removed the onReady function that forced mute

  return (
    <motion.div 
      className="py-16 sm:py-20 px-4 sm:px-8 bg-black/80 backdrop-blur-sm relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Changed from whileInView to animate for permanent visibility after load
          transition={{ duration: 0.6 }} // Added transition for the animate prop
        >
          Here enjoy some Music now, Take a Break and Relax.
        </motion.h2>
        {/* Changed aspect ratio to square, centered it, and added relative positioning */}
        <div className="w-full max-w-xl mx-auto aspect-square rounded-lg overflow-hidden relative"> 
          <YouTube
            videoId={videoId}
            opts={opts}
            // Removed onReady={onReady} 
            className="absolute top-0 left-0 w-full h-full" // Ensure YouTube iframe fills the container
          />
        </div>
      </div>
    </motion.div>
  );
};

export default YouTubePlayer;
