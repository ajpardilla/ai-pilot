import { motion as Motion } from "framer-motion";

function seeded(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  x: seeded(index + 1) * 100,
  y: seeded(index + 2) * 100,
  size: seeded(index + 3) * 3.5 + 1,
  delay: seeded(index + 4) * 8,
  duration: seeded(index + 5) * 18 + 12,
  driftX: (seeded(index + 6) - 0.5) * 22,
  driftY: (seeded(index + 7) - 0.5) * 28,
}));

function getScene(slideId) {
  if (slideId < 4) {
    return {
      key: "launch",
      a: "#ff7b48",
      b: "#ffd049",
      c: "#ff4d8d",
    };
  }

  if (slideId < 8) {
    return {
      key: "landscape",
      a: "#15d9c1",
      b: "#6aa2ff",
      c: "#8a7dff",
    };
  }

  if (slideId < 12) {
    return {
      key: "prompting",
      a: "#19d18e",
      b: "#0fb7ff",
      c: "#f5cf51",
    };
  }

  if (slideId < 15) {
    return {
      key: "memory",
      a: "#64f1d6",
      b: "#8c7cff",
      c: "#ff9e57",
    };
  }

  if (slideId < 20) {
    return {
      key: "workflow",
      a: "#22e1ff",
      b: "#ff7a59",
      c: "#ffee56",
    };
  }

  return {
    key: "closing",
    a: "#51d9a4",
    b: "#f29cff",
    c: "#6f92ff",
  };
}

export default function AnimatedBackground({ slideId, theme = "dark" }) {
  const scene = getScene(slideId);
  const baseTone = theme === "light" ? "#f7f4ee" : "#05060f";
  const gridTone = theme === "light" ? "rgba(23, 36, 70, 0.08)" : "rgba(222, 232, 255, 0.08)";
  const hazeTone = theme === "light" ? "rgba(255, 255, 255, 0.78)" : "rgba(2, 6, 16, 0.55)";
  const strokeTone = theme === "light" ? "rgba(16, 30, 62, 0.34)" : "rgba(214, 230, 255, 0.22)";

  const style = {
    "--scene-base": baseTone,
    "--scene-grid": gridTone,
    "--scene-haze": hazeTone,
    "--scene-stroke": strokeTone,
    "--scene-a": scene.a,
    "--scene-b": scene.b,
    "--scene-c": scene.c,
  };

  return (
    <div className={`bg-wrap scene-${scene.key}`} style={style} aria-hidden>
      <div className="bg-noise" />
      <div className="bg-radial bg-radial-a" />
      <div className="bg-radial bg-radial-b" />
      <div className="bg-radial bg-radial-c" />
      <div className="bg-grid" />

      <Motion.div
        className="bg-orb orb-a"
        animate={{ x: [0, 48, -32, 0], y: [0, -28, 24, 0], scale: [1, 1.15, 0.94, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="bg-orb orb-b"
        animate={{ x: [0, -42, 26, 0], y: [0, 24, -22, 0], scale: [1, 0.88, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="bg-orb orb-c"
        animate={{ x: [0, 26, -44, 0], y: [0, -18, 32, 0], scale: [1, 1.03, 0.9, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg className="bg-spline" viewBox="0 0 100 100" preserveAspectRatio="none">
        <Motion.path
          d="M-5 70 C 15 48, 28 82, 45 60 S 74 24, 105 50"
          fill="none"
          stroke="var(--scene-stroke)"
          strokeWidth="0.45"
          initial={{ pathLength: 0.15, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.path
          d="M-5 42 C 12 30, 26 58, 48 36 S 82 18, 105 30"
          fill="none"
          stroke="var(--scene-b)"
          strokeWidth="0.28"
          strokeLinecap="round"
          initial={{ pathLength: 0.1, opacity: 0.1 }}
          animate={{ pathLength: 1, opacity: [0.08, 0.22, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      <div className="bg-rings">
        {[0, 1, 2].map((ring) => (
          <Motion.span
            key={ring}
            className={`bg-ring ring-${ring}`}
            animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 9 + ring * 2.5, repeat: Infinity, ease: "easeInOut", delay: ring * 0.8 }}
          />
        ))}
      </div>

      <Motion.div
        className="bg-scanline"
        key={`${theme}-${scene.key}-${slideId}`}
        initial={{ opacity: 0.04, y: "-110%" }}
        animate={{ opacity: 0.14, y: "140%" }}
        transition={{ duration: 8.8, ease: "linear", repeat: Infinity }}
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
              y: [0, particle.driftY, particle.driftY * -0.4, 0],
              x: [0, particle.driftX, particle.driftX * -0.45, 0],
              opacity: [0.18, 0.72, 0.4, 0.18],
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

      <div className="bg-vignette" />
    </div>
  );
}
