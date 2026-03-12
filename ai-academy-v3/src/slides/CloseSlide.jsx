import { motion } from "framer-motion";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function CloseSlide({ slide }) {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-[10vw]">
      <FadeIn delay={0.1}>
        <h2 className="font-display font-light italic text-[clamp(40px,7vw,96px)] text-white m-0 mb-7 leading-tight">
          {slide.headline}
        </h2>
      </FadeIn>

      {slide.sub && (
        <FadeIn delay={0.3}>
          <motion.div
            className="font-display font-bold text-[clamp(32px,5vw,64px)] text-emerald tracking-[0.08em]"
            animate={{
              textShadow: [
                "0 0 20px rgba(16,185,129,0.0)",
                "0 0 40px rgba(16,185,129,0.3)",
                "0 0 20px rgba(16,185,129,0.0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {slide.sub}
          </motion.div>
        </FadeIn>
      )}

      <FadeIn delay={0.5}>
        <motion.div
          className="absolute bottom-10 font-mono text-[10px] text-text-ghost tracking-[0.18em]"
          animate={{ opacity: [0.18, 0.4, 0.18] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          UNICITY · AI ACADEMY · SESSION 01
        </motion.div>
      </FadeIn>
    </div>
  );
}
