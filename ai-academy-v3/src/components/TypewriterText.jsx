import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({
  text,
  speed = 60,
  delay = 0,
  className,
  style,
  cursor = true,
}) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayed("");
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  useEffect(() => {
    if (!cursor) return;
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, [cursor]);

  return (
    <span className={className} style={style}>
      {displayed}
      {cursor && (
        <span
          style={{
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.1s",
            color: "#10B981",
          }}
        >
          ▌
        </span>
      )}
    </span>
  );
}
