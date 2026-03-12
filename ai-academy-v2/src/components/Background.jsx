import { useRef, useEffect } from "react";

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
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.03, imageRendering: "pixelated" }}
    />
  );
}

export default function Background() {
  return (
    <>
      <NoiseBG />
      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Gradient glow top-left */}
      <div
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
