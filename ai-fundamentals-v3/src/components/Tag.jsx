const ACCENT_COLORS = {
  emerald: "#10B981",
  cyan: "#06B6D4",
  magenta: "#EC4899",
  orange: "#FF6B35",
  violet: "#B66DFF",
  lime: "#E8FF47",
};

export function resolveAccent(accent) {
  return ACCENT_COLORS[accent] || accent || "#10B981";
}

export default function Tag({ children, color }) {
  const c = resolveAccent(color);
  return (
    <div
      className="inline-block font-mono text-[10px] tracking-[0.22em] uppercase mb-6"
      style={{
        color: c,
        border: `1px solid ${c}55`,
        padding: "5px 14px",
      }}
    >
      {children}
    </div>
  );
}
