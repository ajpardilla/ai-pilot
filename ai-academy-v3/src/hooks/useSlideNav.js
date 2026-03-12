import { useState, useCallback, useEffect, useRef } from "react";

export function useSlideNav(total) {
  const [cur, setCur] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchRef = useRef(null);

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setCur((c) => Math.max(0, Math.min(total - 1, c + dir)));
    },
    [total]
  );

  const goTo = useCallback(
    (i) => {
      const clamped = Math.max(0, Math.min(total - 1, i));
      setCur((prev) => {
        setDirection(clamped >= prev ? 1 : -1);
        return clamped;
      });
    },
    [total]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        go(1);
      }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      }
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9 && num <= total) {
        goTo(num - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, goTo, total]);

  const onTouchStart = useCallback((e) => {
    touchRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchRef.current === null) return;
      const diff = touchRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        go(diff > 0 ? 1 : -1);
      }
      touchRef.current = null;
    },
    [go]
  );

  return { cur, direction, go, goTo, onTouchStart, onTouchEnd };
}
