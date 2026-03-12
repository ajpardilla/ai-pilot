import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: (staggerDelay = 0.04) => ({
    transition: { staggerChildren: staggerDelay },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const lineVariants = {
  hidden: (fromLeft) => ({
    opacity: 0,
    x: fromLeft ? -40 : 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function WordReveal({ text, className, style, delay = 0, stagger = 0.04 }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      style={{ ...style, display: "inline-flex", flexWrap: "wrap", gap: "0 0.3em" }}
      variants={containerVariants}
      custom={stagger}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariants} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function LineReveal({ children, className, style, delay = 0, fromLeft = true }) {
  return (
    <motion.div
      className={className}
      style={style}
      custom={fromLeft}
      variants={lineVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, style, delay = 0, y = 18 }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
