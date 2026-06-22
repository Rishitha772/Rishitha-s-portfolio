import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{
        scaleX,
        background: "linear-gradient(90deg, oklch(0.7 0.25 300), oklch(0.65 0.22 250), oklch(0.82 0.16 200))",
      }}
    />
  );
}