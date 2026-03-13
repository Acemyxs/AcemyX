import { motion } from "motion/react";

const scrollToSection = (id: string) => {
    console.log('scrollToSection called with id:', id);
    const element = document.getElementById(id);
    console.log('Found element:', element);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolling to element:', id);
    } else {
        console.warn('Element not found with id:', id);
    }
};

export function NavigationButtons() {
    const handleGetStartedClick = () => {
        console.log('Get Started clicked, navigating to pricing');
        scrollToSection('pricing');
    };

    const handleJoinClassClick = () => {
        console.log('Join the Class clicked, navigating to pricing');
        scrollToSection('pricing');
    };

    return (
        <div className="flex gap-4 items-center justify-center py-8 pointer-events-auto">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStartedClick}
                className="bg-[#ffdb51] px-8 py-4 rounded-full cursor-pointer font-['Figtree',sans-serif] font-medium text-[#0d114d] text-[14px] pointer-events-auto shadow-lg hover:shadow-xl transition-shadow"
            >
                Get Started
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleJoinClassClick}
                className="border-2 border-white px-8 py-4 rounded-full cursor-pointer font-['Figtree',sans-serif] font-medium text-white text-[14px] pointer-events-auto hover:bg-white/10 transition-colors"
            >
                Join the Class
            </motion.button>
        </div>
    );
}
