import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #fde047, #facc15, #f59e0b, #d97706)",
        boxShadow: "0 0 10px rgba(250, 204, 21, 0.6)",
      }}
    />
  );
}