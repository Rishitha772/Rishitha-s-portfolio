import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #B77983, #E8D5C4)",
      }}
    />
  );
}
