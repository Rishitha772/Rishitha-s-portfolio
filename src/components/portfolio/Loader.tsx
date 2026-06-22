import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: "oklch(0.7 0.25 300)",
                borderRightColor: "oklch(0.82 0.16 200)",
                boxShadow: "0 0 40px oklch(0.7 0.25 300 / 0.5)",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center font-[Orbitron] font-bold text-gradient text-xl"
            >
              RK
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}