import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import IPhone1415Pro1 from "../imports/IPhone1415Pro1";

export default function SimpleMobileApp() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="w-full min-h-screen bg-white overflow-x-hidden pointer-events-auto">
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#fd4d26] origin-left z-[100] pointer-events-none"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Use the original mobile component with all interactivity */}
            <IPhone1415Pro1 />

            {/* Back to top button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    console.log('Back to top clicked');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="fixed bottom-6 right-6 bg-[#fd4d26] text-white p-4 rounded-full shadow-lg z-50 cursor-pointer pointer-events-auto"
            >
                ↑
            </motion.button>
        </div>
    );
}
