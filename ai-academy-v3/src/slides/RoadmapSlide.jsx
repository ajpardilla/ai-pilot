import { motion } from "framer-motion";
import Tag from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function RoadmapSlide({ slide }) {
  return (
    <div className="flex flex-col justify-center h-full px-[10vw]">
      <Tag>{slide.label}</Tag>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-bold text-[clamp(32px,4vw,52px)] text-white m-0 mb-12 tracking-tight">
          {slide.headline}
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {slide.sessions.map((s, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-8 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 22,
              delay: 0.15 + i * 0.1,
            }}
          >
            <motion.div
              className="font-mono text-[11px] tracking-[0.15em] min-w-[32px]"
              style={{ color: s.color }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.2 + i * 0.1,
              }}
            >
              {s.num}
            </motion.div>
            <div className="flex-1 font-display font-bold text-[clamp(20px,2.5vw,32px)] text-white tracking-tight">
              {s.title}
            </div>
            <motion.div
              className="w-2 h-2 rounded-full opacity-60"
              style={{ background: s.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
