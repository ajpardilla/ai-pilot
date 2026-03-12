import React from 'react';
import { motion } from 'framer-motion';

export default function Background({ slideIndex = 0 }) {
  // We can change colors or positions based on slide index for a dynamic feel.
  const hue = (slideIndex * 15) % 360;

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      {/* Deep Space Background Layer */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      
      {/* Animated Orb 1 - Primary Glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-20 filter blur-[100px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1],
          backgroundColor: `hsl(${hue}, 80%, 30%)`
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated Orb 2 - Secondary Subtle Glow */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-10 filter blur-[120px]"
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.2, 0.8, 1],
          backgroundColor: `hsl(${(hue + 180) % 360}, 80%, 20%)`
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Noise/Grain Overlay */}
      <div className="absolute inset-0 opacity-20 z-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', mixBlendMode: 'overlay' }} />
    </div>
  );
}
