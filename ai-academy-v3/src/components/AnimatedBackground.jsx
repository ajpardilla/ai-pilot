import { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion.js";

const ACCENT_HUES = {
  emerald: 160,
  cyan: 190,
  magenta: 330,
  orange: 20,
  violet: 270,
};

function getHue(accent) {
  return ACCENT_HUES[accent] || 160;
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      const dpr = 0.5;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 20000));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.5 ? 160 : 190,
    }));

    let lastTime = 0;
    const interval = 1000 / 30;

    const animate = (time) => {
      raf = requestAnimationFrame(animate);
      if (time - lastTime < interval) return;
      lastTime = time;

      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.06 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

function NoiseBG() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    c.width = 256;
    c.height = 256;
    const img = ctx.createImageData(256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 20;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.02, imageRendering: "pixelated", zIndex: 2 }}
    />
  );
}

function AnimatedBackground({ accent = "emerald" }) {
  const reduced = useReducedMotion();
  const hue = getHue(accent);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Mesh gradient orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "15%",
          left: "10%",
          width: "55vw",
          height: "55vw",
          filter: "blur(120px)",
          opacity: 0.12,
          mixBlendMode: "screen",
        }}
        animate={
          reduced
            ? { backgroundColor: `hsl(${hue}, 70%, 25%)` }
            : {
                x: [0, 60, -40, 0],
                y: [0, -40, 50, 0],
                scale: [1, 1.08, 0.94, 1],
                backgroundColor: `hsl(${hue}, 70%, 25%)`,
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          backgroundColor: { duration: 1.2, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          bottom: "10%",
          right: "5%",
          width: "50vw",
          height: "50vw",
          filter: "blur(140px)",
          opacity: 0.08,
          mixBlendMode: "screen",
        }}
        animate={
          reduced
            ? { backgroundColor: `hsl(${(hue + 120) % 360}, 60%, 20%)` }
            : {
                x: [0, -70, 50, 0],
                y: [0, 60, -60, 0],
                scale: [1, 1.15, 0.85, 1],
                backgroundColor: `hsl(${(hue + 120) % 360}, 60%, 20%)`,
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          backgroundColor: { duration: 1.2, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "60%",
          left: "50%",
          width: "40vw",
          height: "40vw",
          filter: "blur(100px)",
          opacity: 0.06,
          mixBlendMode: "screen",
        }}
        animate={
          reduced
            ? { backgroundColor: `hsl(${(hue + 240) % 360}, 50%, 18%)` }
            : {
                x: [0, 40, -60, 0],
                y: [0, -30, 40, 0],
                scale: [1, 0.9, 1.1, 1],
                backgroundColor: `hsl(${(hue + 240) % 360}, 50%, 18%)`,
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          backgroundColor: { duration: 1.2, ease: "easeInOut" },
        }}
      />

      {/* Particle canvas */}
      {!reduced && <ParticleCanvas />}

      {/* Noise + grid */}
      <NoiseBG />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default memo(AnimatedBackground);
