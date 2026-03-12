import { useState, useEffect } from "react";

const SYNTAX_COLORS = {
  heading: "#10B981",
  comment: "rgba(255,255,255,0.3)",
  keyword: "#06B6D4",
  string: "#EC4899",
  default: "rgba(255,255,255,0.55)",
};

function colorLine(line, accentColor) {
  if (line.startsWith("#")) return accentColor || SYNTAX_COLORS.heading;
  if (line.startsWith("//") || line.startsWith("--")) return SYNTAX_COLORS.comment;
  if (line.startsWith("-") || line.match(/^\d\./)) return "rgba(255,255,255,0.6)";
  if (line.startsWith("  ")) return "rgba(16,185,129,0.7)";
  if (line === "") return "transparent";
  return SYNTAX_COLORS.default;
}

export default function CodeBlock({
  lines,
  typingSpeed = 30,
  delay = 0,
  accentColor,
  className,
  style,
}) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisibleLines(i);
        if (i >= lines.length) clearInterval(interval);
      }, typingSpeed * 3);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [lines, typingSpeed, delay]);

  return (
    <div className={className} style={style}>
      {lines.map((line, i) => (
        <div
          key={i}
          className="font-mono text-[10.5px] leading-relaxed"
          style={{
            color: colorLine(line, accentColor),
            fontWeight: line.startsWith("#") ? 700 : 400,
            opacity: i < visibleLines ? 1 : 0,
            transform: i < visibleLines ? "none" : "translateY(4px)",
            transition: "opacity 0.2s, transform 0.2s",
          }}
        >
          {line || "\u00A0"}
        </div>
      ))}
    </div>
  );
}
