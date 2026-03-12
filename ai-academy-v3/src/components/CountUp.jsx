import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CountUp({
  target,
  duration = 2000,
  separator = ",",
  className,
  style,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  const numericTarget =
    typeof target === "string" ? parseInt(target.replace(/[^0-9]/g, ""), 10) : target;

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, numericTarget, duration]);

  const formatted = value.toLocaleString("en-US");

  return (
    <span ref={ref} className={className} style={style}>
      {formatted}
    </span>
  );
}
