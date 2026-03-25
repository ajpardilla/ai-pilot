import { motion as Motion } from "framer-motion";

function seeded(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 36 }, (_, index) => ({
  id: index,
  x: seeded(index + 1) * 100,
  y: seeded(index + 2) * 100,
  size: seeded(index + 3) * 3 + 1,
  delay: seeded(index + 4) * 8,
  duration: seeded(index + 5) * 18 + 10,
}));

export default function AnimatedBackground({ slideId }) {
  return (
    <div className="bg-wrap" aria-hidden>
      <div className="bg-grid" />
      <div className="bg-vignette" />
      <div className="bg-scanline" key={slideId} />

      <Motion.div
        className="bg-orb orb-a"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="bg-orb orb-b"
        animate={{ x: [0, -35, 24, 0], y: [0, 26, -18, 0], scale: [1, 0.9, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="bg-orb orb-c"
        animate={{ x: [0, 24, -45, 0], y: [0, -20, 30, 0], scale: [1, 1.05, 0.92, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="bg-particles">
        {particles.map((particle) => (
          <Motion.span
            key={particle.id}
            className="bg-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 12, 0],
              x: [0, 10, -8, 0],
              opacity: [0.2, 0.9, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
