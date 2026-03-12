import { motion } from 'framer-motion';

export default function Background({ children }) {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Deep OLED Black Base */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* Subtle Spatial Gradient (Apple-style subtle glow) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(20, 20, 25, 0.8) 0%, rgba(0, 0, 0, 1) 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      
      {/* Extremely subtle minimal grid lines (optional, adds texture) */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)'
        }}
      />

      {/* Presentation Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
