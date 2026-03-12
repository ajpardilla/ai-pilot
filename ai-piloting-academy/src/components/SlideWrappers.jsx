import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars

export const SlideContainer = ({ children, direction = 1 }) => {
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
        scale: 0.98,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4, ease: "easeOut" }
      }
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
        scale: 0.98,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
          scale: { duration: 0.3 }
        }
      };
    }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 md:p-16 lg:p-24"
    >
      {children}
    </motion.div>
  );
};

export const StaggeredReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};
