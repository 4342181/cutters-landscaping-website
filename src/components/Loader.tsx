import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#222323] flex flex-col items-center justify-center"
          role="status"
          aria-label="Loading Cutters Landscaping"
        >
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="w-20 h-20 rounded-full border border-[#b8982a]/30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/cutters-logo-black.svg" alt="" className="h-12 w-12 invert brightness-200" aria-hidden="true" />
            </div>
          </div>
          <h1 className="font-display text-2xl text-white font-semibold mb-1 tracking-wide">Cutters Landscaping</h1>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-mono mb-10">Austin &amp; Dallas, Texas</p>
          <div className="w-40 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-[#b8982a]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
