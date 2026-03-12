import { useState, useEffect } from "react";

export function useReveal(key) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(false);
    const t = setTimeout(() => setOn(true), 80);
    return () => clearTimeout(t);
  }, [key]);
  return on;
}
