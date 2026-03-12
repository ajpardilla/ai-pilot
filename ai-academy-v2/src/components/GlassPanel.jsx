export default function GlassPanel({
  children,
  className = "",
  borderColor,
  topAccent,
  ...props
}) {
  return (
    <div
      className={`rounded-lg backdrop-blur-sm ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${borderColor || "rgba(255,255,255,0.08)"}`,
        borderTop: topAccent ? `3px solid ${topAccent}` : undefined,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
