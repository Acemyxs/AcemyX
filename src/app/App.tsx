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

      {/* Unified responsive component */}
      <UnifiedApp />

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-6 right-6 bg-[#fd4d26] text-white p-4 rounded-full shadow-lg z-50 cursor-pointer pointer-events-auto"
      >
        ↑
      </motion.button>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          overflow-x: hidden;
          width: 100vw;
          margin: 0;
          padding: 0;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}} />
    </div>
  );
}