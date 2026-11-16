import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, input, textarea, [data-cursor-hover]"));
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Tiny precise center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full hidden lg:block z-[9999]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hover ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        style={{
          width: 6,
          height: 6,
          backgroundColor: "#E8D5C4",
        }}
      />

      {/* Subtle outer champagne ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border hidden lg:block z-[9998]"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: hover ? 1.4 : 1,
          borderColor: hover ? "#B77983" : "#E8D5C4",
          backgroundColor: hover ? "rgba(183, 121, 131, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          width: 32,
          height: 32,
          borderWidth: 1,
        }}
      />
    </>
  );
}
