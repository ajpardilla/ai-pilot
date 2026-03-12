import { useState, useCallback, useEffect, useRef } from "react";

export function useSlideNav(total) {
  const [cur, setCur] = useState(0);
  const touchRef = useRef(null);

  const go = useCallback(
    (dir) => setCur((c) => Math.max(0, Math.min(total - 1, c + dir))),
    [total]
  );

  const goTo = useCallback(
    (i) => setCur(Math.max(0, Math.min(total - 1, i))),
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
      // Number keys 1-9 for quick jump
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9 && num <= total) {
        goTo(num - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, goTo, total]);

  // Touch/swipe
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

  return { cur, go, goTo, onTouchStart, onTouchEnd };
}
