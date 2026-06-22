import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ width: 8, height: 8, background: "white", zIndex: 9999 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border-2 hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hover ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ width: 40, height: 40, borderColor: "oklch(0.7 0.25 300)", zIndex: 9999 }}
      />
    </>
  );
}