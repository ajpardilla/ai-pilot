export function fade(on, delay = 0, dy = 18) {
  return {
    opacity: on ? 1 : 0,
    transform: `translateY(${on ? 0 : dy}px)`,
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  };
}

export default function Animate({ on, delay = 0, dy = 18, children, className = "", as: Component = "div", style = {} }) {
  return (
    <Component
      className={className}
      style={{
        ...fade(on, delay, dy),
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
