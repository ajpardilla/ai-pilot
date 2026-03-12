import { motion } from "framer-motion";

export default function MemeSlide({ slide }) {
  return (
    <div className="flex justify-center items-center h-full p-[2vh_4vw]">
      <motion.img
        src={slide.image}
        alt=""
        className="max-h-[92vh] max-w-[90vw] object-contain rounded-lg"
        style={{ boxShadow: "0 0 60px rgba(16,185,129,0.08)" }}
        initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { type: "spring", stiffness: 200, damping: 18 },
          rotate: { type: "spring", stiffness: 200, damping: 18 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
      />
    </div>
  );
}
