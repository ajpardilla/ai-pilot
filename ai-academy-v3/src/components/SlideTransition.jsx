import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion.js";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.45 },
      scale: { duration: 0.45, ease: "easeOut" },
      filter: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function SlideTransition({ children, direction, slideKey }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      key={slideKey}
      custom={direction}
      variants={reduced ? reducedVariants : variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full"
    >
      {children}
    </motion.div>
  );
}
