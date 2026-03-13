import { motion } from "motion/react";

interface HeroSectionProps {
    onMenuClick: () => void;
}

export function HeroSection({ onMenuClick }: HeroSectionProps) {
    return (
        <motion.div
            id="hero"
            className="pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Hero content will be imported from IPhone1415Pro1 */}
            <div className="bg-[#fd4d26] h-[852px] relative w-full">
                <h1 className="text-white text-center pt-20">Hero Section</h1>
                <button
                    onClick={onMenuClick}
                    className="absolute top-4 right-4 text-white cursor-pointer p-4 bg-black/20 rounded"
                >
                    Menu
                </button>
            </div>
        </motion.div>
    );
}
