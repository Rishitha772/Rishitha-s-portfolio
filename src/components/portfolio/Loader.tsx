import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#351E2B]"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Elegant Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 rounded-full border border-[#624451] flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border-t border-[#E8D5C4] animate-spin" />
              <span className="font-serif text-lg font-normal text-[#FAF5EF]">
                RK
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] tracking-[0.25em] text-[#B77983] uppercase"
            >
              Rishitha Khandesh
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
