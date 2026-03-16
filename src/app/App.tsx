import { motion, useScroll } from "motion/react";
import UnifiedApp from "../components/UnifiedApp";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#fd4d26] origin-left z-[100] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      <UnifiedApp />

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#fd4d26] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg z-50 cursor-pointer pointer-events-auto flex items-center justify-center text-base sm:text-lg font-bold"
      >
        ↑
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
        body { margin: 0; padding: 0; overflow-x: hidden; }
        img, video, svg { max-width: 100%; }
      `}} />
    </div>
  );
}
