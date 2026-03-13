import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgQuestionNumber1040X1040Png from "../assets/ef1f475576721bddd2cb43425e79de367b1384c8.svg";
import imgQuestionNumber1040X1040Png1 from "../assets/77db115599b1183ec5ffbd3cc3d2284c1c414c58.svg";
import imgImage104 from "../assets/109897e9c97c07f132ed32490a484bfc393bb113.svg";
import imgTablerIconNotebook128X128Png1 from "../assets/e53fa8e9ea560f5d2dd4b0f77146cdc1f18b7e98.png";
import imgTablerIconNotebook128X128Png2 from "../assets/081636671c000b15b3e54db08698348613e1d8c3.png";
import imgTablerIconNotebook128X128Png3 from "../assets/6891ac1cd14e760654fbb6e6e529390744931c6a.png";
import imgFrame1 from "../assets/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png";
import { PricingSection } from "./PricingSection";



// Scroll helper function
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const ACADEMY_URL = "https://academy.acemyx.com/";

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const menuItems = [
        { label: "About", id: "about" },
        { label: "Services", id: "services" },
        { label: "Pricing", id: "pricing" },
        { label: "FAQs", id: "faq" },
        { label: "Contact", id: "contact" }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="fixed inset-0 bg-[#0d114d] z-[9999] flex flex-col items-center justify-center gap-12 text-white font-['Figtree:SemiBold',sans-serif] text-3xl"
                >
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white p-2"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </motion.button>

                    <div className="flex flex-col items-center gap-8">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                                className="cursor-pointer hover:text-[#ffdb51] transition-colors"
                                onClick={() => {
                                    scrollToSection(item.id);
                                    onClose();
                                }}
                            >
                                {item.label}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-12 flex flex-col items-center gap-4 px-6 text-center"
                    >
                        <div className="bg-[#ffdb51] text-[#0d114d] px-8 py-4 rounded-full text-lg cursor-pointer" onClick={() => { window.open(ACADEMY_URL, '_blank'); onClose(); }}>
                            Get Started Now
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#f7f5f1] rounded-2xl overflow-hidden mb-4">
            <div
                className="px-6 py-5 md:px-8 md:py-6 cursor-pointer flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-[#0d114d] font-['Figtree:Medium',sans-serif] font-medium text-base md:text-lg flex-1 pr-4">
                    {question}
                </p>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M1 7H13" stroke="#0d114d" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 text-[#4a4a4a] text-sm md:text-base leading-relaxed font-['Figtree:Regular',sans-serif]">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Header/Navigation Component
function Header({ onMenuClick }: { onMenuClick?: () => void }) {
    return (
        <header className="bg-[#fd4d26] w-full">
            <div className="container mx-auto px-6 md:px-[120px] py-5 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <svg className="w-[100px] h-[26px] md:w-[136px] md:h-[35px]" viewBox="0 0 135.56 34.5705" fill="none">
                            <path d="M9.82121 0C11.183 0 12.4532 0.261907 13.6317 0.785696C14.8364 1.2833 15.8841 1.97733 16.7745 2.86778C17.665 3.75823 18.3591 4.80584 18.8566 6.01055C19.3804 7.1891 19.6423 8.45931 19.6423 9.82119V24.7493H14.6139V19.7994H5.02838V24.7493H0V9.82119C0 8.45931 0.248834 7.1891 0.746375 6.01055C1.27021 4.80584 1.97727 3.75823 2.86778 2.86778C3.75817 1.97733 4.7927 1.2833 5.97124 0.785696C7.17596 0.261907 8.45933 0 9.82121 0ZM14.6139 9.82119C14.6139 9.16636 14.4829 8.55098 14.2211 7.97479C13.9854 7.37243 13.6449 6.86174 13.1997 6.44272C12.7805 5.9974 12.2698 5.65703 11.6675 5.42134C11.0913 5.15936 10.4759 5.0285 9.82121 5.0285C9.16638 5.0285 8.53784 5.15936 7.93548 5.42134C7.3593 5.65703 6.84861 5.9974 6.40341 6.44272C5.98439 6.86174 5.64389 7.37243 5.38204 7.97479C5.14623 8.55098 5.02838 9.16636 5.02838 9.82119V14.7711H14.6139V9.82119ZM40.8483 15.5174C40.7697 16.8007 40.4555 18.0054 39.9055 19.1316C39.3816 20.2578 38.6746 21.2398 37.7841 22.078C36.8937 22.8899 35.8723 23.5446 34.7199 24.0421C33.5675 24.5136 32.3367 24.7493 31.0271 24.7493C29.6652 24.7493 28.382 24.5005 27.1773 24.0029C25.9987 23.4791 24.9642 22.772 24.0738 21.8815C23.1833 20.9911 22.4763 19.9566 21.9524 18.7781C21.4548 17.5733 21.206 16.29 21.206 14.9281C21.206 13.5663 21.4548 12.2961 21.9524 11.1176C22.4763 9.91286 23.1833 8.86518 24.0738 7.97479C24.9642 7.08428 25.9987 6.39025 27.1773 5.89271C28.382 5.36887 29.6652 5.10701 31.0271 5.10701C32.3367 5.10701 33.5675 5.35585 34.7199 5.85339C35.8723 6.32488 36.8937 6.97959 37.7841 7.81763C38.6746 8.6295 39.3816 9.59853 39.9055 10.7247C40.4555 11.8508 40.7697 13.0556 40.8483 14.3389H35.7806C35.702 13.7627 35.5186 13.2127 35.2306 12.689C34.9688 12.1651 34.6283 11.7199 34.2092 11.3533C33.7902 10.9866 33.3057 10.6986 32.7557 10.489C32.2057 10.2532 31.6295 10.1354 31.0271 10.1354C30.3724 10.1354 29.7439 10.2664 29.1415 10.5282C28.5653 10.7639 28.0547 11.1044 27.6095 11.5496C27.1903 11.9688 26.8499 12.4795 26.588 13.0818C26.3523 13.658 26.2344 14.2734 26.2344 14.9281C26.2344 15.5829 26.3523 16.2115 26.588 16.8138C26.8499 17.39 27.1903 17.9007 27.6095 18.3459C28.0547 18.7649 28.5653 19.1054 29.1415 19.3673C29.7439 19.6031 30.3724 19.7209 31.0271 19.7209C31.6295 19.7209 32.2057 19.6161 32.7557 19.4066C33.3057 19.1709 33.7902 18.8697 34.2092 18.5031C34.6283 18.1364 34.9688 17.7042 35.2306 17.2067C35.5186 16.6828 35.702 16.1198 35.7806 15.5174H40.8483ZM58.2437 22.7065C57.4057 23.3612 56.4758 23.8719 55.4545 24.2386C54.4331 24.5791 53.3594 24.7493 52.2332 24.7493C50.8713 24.7493 49.588 24.5005 48.3833 24.0029C47.2048 23.4791 46.1703 22.772 45.2797 21.8815C44.3894 20.9911 43.6822 19.9566 43.1585 18.7781C42.6608 17.5733 42.412 16.29 42.412 14.9281C42.412 13.5663 42.6608 12.2961 43.1585 11.1176C43.6822 9.91286 44.3894 8.86518 45.2797 7.97479C46.1703 7.08428 47.2048 6.39025 48.3833 5.89271C49.588 5.36887 50.8713 5.10701 52.2332 5.10701C53.595 5.10701 54.8653 5.36887 56.0438 5.89271C57.2485 6.39025 58.2961 7.08428 59.1866 7.97479C60.077 8.86518 60.771 9.91286 61.2687 11.1176C61.7924 12.2961 62.0544 13.5663 62.0544 14.9281C62.0544 15.3472 62.0281 15.7531 61.9757 16.146C61.9234 16.5388 61.8579 16.9185 61.7794 17.2852H48.069C48.488 18.0185 49.0642 18.6079 49.7976 19.0531C50.5308 19.4983 51.3428 19.7209 52.2332 19.7209C52.757 19.7209 53.2545 19.6423 53.726 19.4851C54.1974 19.3281 54.6296 19.1054 55.0224 18.8174L58.2437 22.7065ZM52.2332 10.1354C51.3951 10.1354 50.6356 10.3319 49.9547 10.7247C49.2737 11.1176 48.7107 11.6283 48.2655 12.2568H56.201C55.7556 11.6283 55.1926 11.1176 54.5117 10.7247C53.8307 10.3319 53.0712 10.1354 52.2332 10.1354ZM84.8312 12.4532C84.7009 11.7723 84.3728 11.2092 83.8494 10.7639C83.3522 10.3187 82.7498 10.0962 82.0423 10.0962C81.3097 10.0962 80.6673 10.3449 80.1175 10.8426C79.594 11.3401 79.3056 11.9556 79.2533 12.689V24.7493H74.2249V12.846C74.1987 12.0866 73.9106 11.4449 73.3606 10.9211C72.8368 10.3711 72.1952 10.0962 71.4356 10.0962C70.7286 10.0962 70.1131 10.3187 69.5892 10.7639C69.0655 11.2092 68.7512 11.7723 68.6465 12.4532V24.7493H63.618V12.846C63.618 11.7723 63.8275 10.7639 64.2465 9.82119C64.6657 8.87833 65.2287 8.06646 65.9358 7.38546C66.6429 6.67841 67.468 6.1284 68.4107 5.73555C69.3536 5.31653 70.3619 5.10701 71.4356 5.10701C72.457 5.10701 73.413 5.30338 74.3034 5.69622C75.2201 6.0629 76.032 6.57359 76.739 7.22842C77.42 6.57359 78.2188 6.0629 79.1354 5.69622C80.0524 5.30338 81.0217 5.10701 82.0423 5.10701C83.1168 5.10701 84.1249 5.31653 85.0679 5.73555C86.0108 6.1284 86.8349 6.67841 87.5424 7.38546C88.25 8.06646 88.8123 8.87833 89.2318 9.82119C89.65 10.7639 89.8604 11.7723 89.8604 12.846V24.7493H84.8312V12.4532ZM91.4221 5.10701H96.4513V14.9281C96.4513 15.5829 96.569 16.2115 96.8045 16.8138C97.0662 17.39 97.4068 17.9007 97.8264 18.3459C98.2709 18.7649 98.7819 19.1054 99.3579 19.3673C99.9603 19.6031 100.589 19.7209 101.244 19.7209C101.899 19.7209 102.514 19.6031 103.09 19.3673C103.692 19.1054 104.203 18.7649 104.623 18.3459C105.067 17.9007 105.408 17.39 105.643 16.8138C105.905 16.2115 106.036 15.5829 106.036 14.9281V5.10701H111.064V24.7493C111.064 26.1112 110.803 27.3814 110.279 28.5599C109.782 29.7647 109.087 30.8122 108.197 31.7027C107.306 32.5931 106.259 33.2871 105.055 33.7848C103.876 34.3085 102.605 34.5705 101.244 34.5705C99.8814 34.5705 98.599 34.3085 97.3943 33.7848C96.2159 33.2871 95.1802 32.5931 94.2898 31.7027C93.3994 30.8122 92.6931 29.7647 92.1684 28.5599C91.6713 27.3814 91.4221 26.1112 91.4221 24.7493H96.4513C96.4513 25.404 96.569 26.0195 96.8045 26.5957C97.0662 27.1981 97.4068 27.7087 97.8264 28.1278C98.2709 28.573 98.7819 28.9135 99.3579 29.1492C99.9603 29.4111 100.589 29.542 101.244 29.542C101.899 29.542 102.514 29.4111 103.09 29.1492C103.692 28.9135 104.203 28.573 104.623 28.1278C105.067 27.7087 105.408 27.1981 105.643 26.5957C105.905 26.0195 106.036 25.404 106.036 24.7493V23.5314C104.57 24.3433 102.972 24.7493 101.244 24.7493C99.8814 24.7493 98.599 24.5005 97.3943 24.0029C96.2159 23.4791 95.1802 22.772 94.2898 21.8815C93.3994 20.9911 92.6931 19.9566 92.1684 18.7781C91.6713 17.5733 91.4221 16.29 91.4221 14.9281V5.10701Z" fill="#F7F9FC" />
                            <path d="M130.688 12.5318C132.128 13.6317 133.28 14.9936 134.144 16.6173C135.01 18.2412 135.481 20.0221 135.56 21.96V24.7493H130.413V22.3922C130.413 21.6327 130.295 20.9125 130.059 20.2316C129.85 19.5244 129.536 18.8828 129.116 18.3067C128.723 17.7042 128.239 17.1805 127.663 16.7353C127.113 16.29 126.51 15.9365 125.855 15.6746C124.521 16.1983 123.42 17.0626 122.556 18.2674C121.692 19.4721 121.26 20.847 121.26 22.3922V24.7493H116.153V22.3922C116.153 20.4018 116.585 18.5554 117.449 16.8531C118.313 15.1508 119.479 13.7365 120.945 12.6103C119.452 11.458 118.274 10.0437 117.41 8.36764C116.546 6.66526 116.1 4.80583 116.074 2.78921V0H121.221V2.74993C121.221 3.50944 121.325 4.24275 121.535 4.94985C121.77 5.63085 122.085 6.27241 122.478 6.87477C122.896 7.45095 123.381 7.96165 123.931 8.40696C124.48 8.85216 125.097 9.20569 125.778 9.46754C127.113 8.94383 128.214 8.07949 129.078 6.87477C129.942 5.67005 130.374 4.29512 130.374 2.74993V0H135.481V2.74993H135.519C135.519 4.74034 135.087 6.58674 134.223 8.289C133.359 9.99138 133.359 9.99138 130.688 12.5318Z" fill="#F7F9FC" />
                        </svg>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-12">
                        <button onClick={() => scrollToSection('pricing')} className="text-white text-base font-['Figtree:Regular',sans-serif] hover:opacity-80 transition-opacity">
                            Pricing
                        </button>
                        <button onClick={() => window.open(ACADEMY_URL, '_blank')} className="text-white text-base font-['Figtree:Regular',sans-serif] hover:opacity-80 transition-opacity">
                            Features
                        </button>
                        <button onClick={() => window.open(ACADEMY_URL, '_blank')} className="text-white text-base font-['Figtree:Regular',sans-serif] hover:opacity-80 transition-opacity">
                            Reviews
                        </button>
                        <button onClick={() => window.open(ACADEMY_URL, '_blank')} className="text-white text-base font-['Figtree:Regular',sans-serif] hover:opacity-80 transition-opacity">
                            Resources
                        </button>
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-5">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(ACADEMY_URL, '_blank')}
                            className="px-6 py-4 border border-white rounded-full text-white font-['Figtree:Medium',sans-serif] text-base"
                        >
                            Login
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(ACADEMY_URL, '_blank')}
                            className="px-6 py-4 bg-[#ffdb51] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-base hover:shadow-lg hover:shadow-[#ffdb51]/30 transition-shadow"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button and Get Started */}
                    <div className="flex md:hidden items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(ACADEMY_URL, '_blank')}
                            className="px-4 py-3 bg-[#ffdb51] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-xs"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={onMenuClick}
                            className="w-6 h-10 relative flex flex-col justify-center gap-1.5"
                        >
                            <div className="w-full h-0.5 bg-white" />
                            <div className="w-full h-0.5 bg-white" />
                            <div className="w-full h-0.5 bg-white" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Hero Section
function HeroSection() {
    return (
        <section id="hero" className="bg-[#fd4d26] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-[120px] py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 md:space-y-10 z-10"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-white text-[40px] md:text-[52px] leading-[1.1] font-['Inter_Tight:Regular',sans-serif]">
                                Dream Big. We'll help you get there.
                            </h1>
                            <p className="text-white text-base md:text-lg font-['Figtree:Regular',sans-serif] leading-relaxed opacity-90">
                                Get the top-quality study materials and personal guidance you need to ace your exams with confidence.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open(ACADEMY_URL, '_blank')}
                                className="px-6 py-4 md:px-8 md:py-5 bg-[#ffdb51] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-sm md:text-base hover:shadow-lg hover:shadow-[#ffdb51]/30 transition-shadow"
                            >
                                Explore for Free
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open(ACADEMY_URL, '_blank')}
                                className="px-6 py-4 md:px-8 md:py-5 border border-white rounded-full text-white font-['Figtree:Medium',sans-serif] text-sm md:text-base"
                            >
                                Join the Class
                            </motion.button>
                        </div>

                        <div className="flex items-center gap-2 text-white/70">
                            <svg className="w-7 h-7" viewBox="0 0 15 15" fill="none">
                                <path d="M9.60103 11.7H5.40098M7.50101 3.3V1.5M11.401 5.1L12.701 3.8M3.60098 5.1L2.30098 3.8" stroke="white" strokeOpacity="0.7" />
                            </svg>
                            <span className="text-sm md:text-base font-['Figtree:Regular',sans-serif]">High-quality prep.</span>
                        </div>
                    </motion.div>

                    {/* Hero Image/Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl md:rounded-[24px] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 md:p-12">
                            {/* Question Cards */}
                            <div className="relative aspect-square max-w-md mx-auto">
                                <img
                                    src={imgQuestionNumber1040X1040Png}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-90"
                                />

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// About Section
function AboutSection() {
    return (
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-[120px]">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center gap-8">
            {/* Text — always first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-[#0d114d] text-[32px] md:text-[40px] leading-tight font-['Inter_Tight:Regular',sans-serif]">
                Navigating Entrance Exams Shouldn't Be a Barrier.
              </h2>
              <div className="space-y-4 text-[#0d114d] text-base md:text-lg font-['Figtree:Regular',sans-serif] leading-relaxed">
                <p>
                  We know that preparing for university can feel like an uphill
                  battle, especially when you're doing it on your own. AcemyX
                  was built to change that. We bring top-quality JAMB, WAEC, and
                  Post-UTME prep directly to you, so you can focus on what
                  matters: your future.
                </p>
                <p>
                  You've got the talent; we've got the tools. Let's get you into
                  your dream school together.
                </p>
              </div>
            </motion.div>

            {/* Image — below text on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={imgQuestionNumber1040X1040Png1}
                  alt="Student studying"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              {/* Caption overlay */}
              <div className="mt-3 md:hidden">
                <p className="text-[#0d114d] text-sm font-['Figtree:Regular',sans-serif] text-center">
                  Elevate your skills and achieve success!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}

// Services Section
function ServicesSection() {
    return (
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 md:text-center space-y-6"
          >
            <h2 className="text-[#0d114d] text-[32px] md:text-[40px] leading-tight font-['Figtree:Regular',sans-serif]">
              Prepare, Practice, and Succeed.
            </h2>
            <p className="text-[#0d114d] text-base md:text-lg font-['Figtree:Regular',sans-serif] leading-relaxed md:max-w-3xl md:mx-auto">
              AcemyX simplifies your prep with a personal plan built around your
              goals. We provide thousands of expert questions and full mock
              exams to help you track your progress with ease.
            </p>
            <div className="flex flex-wrap md:justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(ACADEMY_URL, "_blank")}
                className="px-6 py-4 bg-[#ffdb51] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-sm md:text-base hover:shadow-lg hover:shadow-[#ffdb51]/30 transition-shadow"
              >
                Try AcemyX for Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("pricing")}
                className="px-6 py-4 border border-[#0d114d] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-sm md:text-base"
              >
                Explore Pricing
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: imgTablerIconNotebook128X128Png1,
                title: "Study at your own pace",
                description:
                  "Share your goals with us, and AcemyX will build a custom plan that adapts as you learn.",
              },
              {
                image: imgTablerIconNotebook128X128Png2,
                title: "Smart Learning Tools",
                description:
                  "Our technology identifies your strengths and shows you exactly where to focus to gain the most points.",
              },
              {
                image: imgTablerIconNotebook128X128Png3,
                title: "Learn with Friends and Mentors",
                description:
                  "You aren't in this alone. Connect with peers and experts to solve tough problems together.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="w-16 h-16">
                  <img src={service.image} alt="" className="w-full h-full" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[#0d114d] text-xl font-['Figtree:Medium',sans-serif]">
                    {service.title}
                  </h3>
                  <p className="text-[#0d114d] text-base font-['Figtree:Regular',sans-serif] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}

// Trust Section
function TrustSection() {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3208 17.5589L17.3116 16.3265L19.3978 22.5906L12.3208 17.5589ZM23.8075 9.46272H15.021L12.3199 1.39941L9.62054 9.46272H0.833984L7.9448 14.4606L5.24281 22.5239L12.3536 17.526L16.7296 14.4606L23.8075 9.46272Z"
                  fill="#00B67A"
                />
              </svg>

              <span className="text-[#0d114d] text-lg font-['Figtree:Medium',sans-serif]">
                Trustpilot
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="35.99" height="35.99" fill="#DCDCE6" />
                    <rect width="35.99" height="35.99" fill="#00B67A" />
                    <path
                      d="M18.311 23.5589L23.3018 22.3265L25.388 28.5906L18.311 23.5589ZM29.7978 15.4627H21.0112L18.3101 7.39941L15.6108 15.4627H6.82422L13.935 20.4606L11.233 28.5239L18.3439 23.526L22.7198 20.4606L29.7978 15.4627Z"
                      fill="white"
                    />
                  </svg>
                ))}
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="35.99" height="35.99" fill="#DCDCE6" />
                  <rect width="18" height="35.99" fill="#00B67A" />
                  <path
                    d="M18.3208 23.5589L23.3116 22.3265L25.3978 28.5906L18.3208 23.5589ZM29.8075 15.4627H21.021L18.3199 7.39941L15.6205 15.4627H6.83398L13.9448 20.4606L11.2428 28.5239L18.3536 23.526L22.7296 20.4606L29.8075 15.4627Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-4 max-w-[620px]">
              <h2 className="text-[#0d114d] text-[32px] md:text-[40px] leading-tight font-['Figtree:Regular',sans-serif]">
                Trusted by Leading Educators and Foundations.
              </h2>
              <p className="text-[#0d114d] text-base md:text-lg font-['Figtree:Regular',sans-serif] leading-relaxed max-w-2xl">
                From top-rated reviews to partnerships with educational leaders,
                we're recognized for helping Nigerian students secure their
                future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
}

// Stats Section
const statsData = [
    { stat: "10,000+", label: "Students.", desc: "Actively preparing for their dream university." },
    { stat: "85% Score", label: "Increase.", desc: "Average improvement after just 4 weeks of practice." },
    { stat: "50,000+", label: "Questions.", desc: "Solved by students like you this month alone." },
    { stat: "Unlimited", label: "Support.", desc: "Expert mentors available whenever you get stuck." },
];

function StatsSection() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-6 md:px-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3">
                    {statsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#fafafa] rounded-[20px] p-6 md:p-8 flex flex-col justify-between gap-8 min-h-[180px] md:min-h-[200px]"
                        >
                            <div className="flex flex-col leading-[1.2] text-[28px] md:text-[32px] text-black tracking-[-0.05em] font-['Inter_Tight:Regular',sans-serif]">
                                <span>{item.stat}</span>
                                <span>{item.label}</span>
                            </div>
                            <p className="text-[#7c7c7c] text-[14px] md:text-[16px] font-['Figtree:Regular',sans-serif] leading-[1.5] tracking-[-0.3px]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Reviews data
const allReviews = [
    {
        id: 1,
        text: "\u201cAcemyx transformed my study habits. The resources are comprehensive, and the support is incredible. I aced my UTME!\u201d",
        name: "Amara Nzekwe",
        role: "Exemplary Student",
        image: imgFrame1,
    },
    {
        id: 2,
        text: "\u201cI was struggling with exam anxiety until I found Acemyx. The practice tests and personalized feedback helped me build confidence.\u201d",
        name: "Bello Audu",
        role: "Student, UNIBEN",
        image: imgFrame1,
    },
    {
        id: 3,
        text: "\u201cAcemyx is a game-changer! The interactive lessons and mock exams made learning fun and effective. Highly recommend for JAMB prep!\u201d",
        name: "Ngozi Okeke",
        role: "JAMB Aspirant",
        image: imgFrame1,
    },
    {
        id: 4,
        text: "\u201cThanks to Acemyx, I felt fully prepared for my WAEC exams. The detailed explanations and study guides were invaluable.\u201d",
        name: "Aisha Bello",
        role: "Student, UNILORIN",
        image: imgFrame1,
    },
    {
        id: 5,
        text: "\u201cI love how Acemyx adapts to my learning style. The platform is user-friendly, and the content is always up-to-date. A must-have for students!\u201d",
        name: "Chidi Obi",
        role: "Student, UNILORIN",
        image: imgFrame1,
    },
];

// Reviews Section
function ReviewsSection() {
    // Desktop: drag-scroll state
    const desktopTrackRef = useRef<HTMLDivElement>(null);
    const [isDraggingDesktop, setIsDraggingDesktop] = useState(false);
    const [desktopStartX, setDesktopStartX] = useState(0);
    const [desktopScrollLeft, setDesktopScrollLeft] = useState(0);

    const handleDesktopMouseDown = (e: React.MouseEvent) => {
        if (!desktopTrackRef.current) return;
        setIsDraggingDesktop(true);
        setDesktopStartX(e.pageX - desktopTrackRef.current.offsetLeft);
        setDesktopScrollLeft(desktopTrackRef.current.scrollLeft);
        desktopTrackRef.current.style.cursor = "grabbing";
        desktopTrackRef.current.style.userSelect = "none";
    };
    const handleDesktopMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingDesktop || !desktopTrackRef.current) return;
        const x = e.pageX - desktopTrackRef.current.offsetLeft;
        const walk = (x - desktopStartX) * 1.2;
        desktopTrackRef.current.scrollLeft = desktopScrollLeft - walk;
    };
    const handleDesktopMouseUp = () => {
        setIsDraggingDesktop(false);
        if (desktopTrackRef.current) {
            desktopTrackRef.current.style.cursor = "grab";
            desktopTrackRef.current.style.userSelect = "auto";
        }
    };

    // Mobile: swipe one-at-a-time state
    const [activeIndex, setActiveIndex] = useState(0);
    const mobileTrackRef = useRef<HTMLDivElement>(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isDraggingMobile, setIsDraggingMobile] = useState(false);
    const [mobileDragStartX, setMobileDragStartX] = useState(0);
    const [mobileDragDelta, setMobileDragDelta] = useState(0);

    const goTo = (idx: number) => {
        const clamped = Math.max(0, Math.min(allReviews.length - 1, idx));
        setActiveIndex(clamped);
        setMobileDragDelta(0);
    };

    const handleMobileTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };
    const handleMobileTouchEnd = (e: React.TouchEvent) => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) goTo(activeIndex + (delta > 0 ? 1 : -1));
    };

    // Also support mouse drag on mobile track
    const handleMobileMouseDown = (e: React.MouseEvent) => {
        setIsDraggingMobile(true);
        setMobileDragStartX(e.clientX);
        setMobileDragDelta(0);
    };
    const handleMobileMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingMobile) return;
        setMobileDragDelta(e.clientX - mobileDragStartX);
    };
    const handleMobileMouseUp = () => {
        if (isDraggingMobile) {
            if (Math.abs(mobileDragDelta) > 60) goTo(activeIndex + (mobileDragDelta < 0 ? 1 : -1));
            else setMobileDragDelta(0);
            setIsDraggingMobile(false);
        }
    };

    return (
        <section className="bg-white py-16 md:py-24 overflow-hidden">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 px-6 md:px-[120px]"
            >
                <h2 className="text-[#0d114d] text-[32px] md:text-[40px] leading-tight font-['Inter_Tight:Regular',sans-serif]">
                    Trusted by Students Across Nigeria.
                </h2>
            </motion.div>

            {/* ── DESKTOP: horizontal drag-scroll row ── */}
            <div className="hidden md:block">
                <div
                    ref={desktopTrackRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide px-[120px] cursor-grab select-none"
                    style={{ WebkitOverflowScrolling: "touch" }}
                    onMouseDown={handleDesktopMouseDown}
                    onMouseMove={handleDesktopMouseMove}
                    onMouseUp={handleDesktopMouseUp}
                    onMouseLeave={handleDesktopMouseUp}
                >
                    {allReviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex-shrink-0 w-[400px] bg-[#fafafa] rounded-[24px] p-8 flex flex-col justify-between gap-8 min-h-[300px]"
                            style={{ pointerEvents: isDraggingDesktop ? "none" : "auto" }}
                        >
                            <p className="text-[#5e5e5e] text-[20px] font-['Figtree:Regular',sans-serif] leading-[28px] tracking-[-0.3px]">
                                {review.text}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="relative rounded-full shrink-0 size-8 overflow-hidden bg-[#e0e0e0]">
                                    <img
                                        alt={review.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src={review.image}
                                    />
                                </div>
                                <div>
                                    <p className="text-black text-[16px] font-['Inter:Medium',sans-serif] leading-[1.5] tracking-[-0.3px] text-nowrap">
                                        {review.name}
                                    </p>
                                    <p className="text-[#7c7c7c] text-[14px] font-['Inter:Regular',sans-serif] leading-[1.5] tracking-[-0.2px]">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* trailing spacer so last card isn't flush */}
                    <div className="flex-shrink-0 w-[96px]" />
                </div>
            </div>

            {/* ── MOBILE: one card at a time, drag/swipe ── */}
            <div className="md:hidden px-6">
                <div
                    ref={mobileTrackRef}
                    className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
                    style={{ userSelect: "none" }}
                    onTouchStart={handleMobileTouchStart}
                    onTouchEnd={handleMobileTouchEnd}
                    onMouseDown={handleMobileMouseDown}
                    onMouseMove={handleMobileMouseMove}
                    onMouseUp={handleMobileMouseUp}
                    onMouseLeave={handleMobileMouseUp}
                >
                    <motion.div
                        className="flex"
                        animate={{ x: `calc(${-activeIndex * 100}% + ${mobileDragDelta}px)` }}
                        transition={isDraggingMobile
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 300, damping: 30 }
                        }
                    >
                        {allReviews.map((review) => (
                            <div
                                key={review.id}
                                className="min-w-full bg-[#fafafa] rounded-[24px] p-8 flex flex-col justify-between gap-10 min-h-[320px]"
                            >
                                <p className="text-[#5e5e5e] text-[18px] font-['Figtree:Regular',sans-serif] leading-[26px] tracking-[-0.3px]">
                                    {review.text}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="relative rounded-full shrink-0 size-8 overflow-hidden bg-[#e0e0e0]">
                                        <img
                                            alt={review.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={review.image}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-black text-[16px] font-['Inter:Medium',sans-serif] leading-[1.5] tracking-[-0.3px]">
                                            {review.name}
                                        </p>
                                        <p className="text-[#7c7c7c] text-[14px] font-['Inter:Regular',sans-serif] leading-[1.5] tracking-[-0.2px]">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {allReviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            aria-label={`Review ${idx + 1}`}
                            className="transition-all duration-300"
                        >
                            <motion.div
                                animate={{
                                    width: idx === activeIndex ? "24px" : "8px",
                                    backgroundColor: idx === activeIndex ? "#0d114d" : "#d1d5db",
                                }}
                                transition={{ duration: 0.3 }}
                                className="h-[8px] rounded-full"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

// AI Tutor Section
function AITutorSection() {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-[120px]">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center gap-8">
            {/* Text — always first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-[#0d114d] text-[32px] md:text-[40px] leading-tight font-['Inter_Tight:Regular',sans-serif]">
                Meet Your Personal 24/7 Tutor.
              </h2>
              <p className="text-[#0d114d] text-base md:text-lg font-['Figtree:Regular',sans-serif] leading-relaxed">
                Stuck on a tough question? Our Socratic AI doesn't just give you
                the answer, it helps you understand the why.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(ACADEMY_URL, "_blank")}
                  className="px-6 py-4 bg-[#ffdb51] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-sm md:text-base hover:shadow-lg hover:shadow-[#ffdb51]/30 transition-shadow"
                >
                  Get Guided Help
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(ACADEMY_URL, "_blank")}
                  className="px-6 py-4 border border-[#0d114d] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-sm md:text-base"
                >
                  See an Example
                </motion.button>
              </div>
            </motion.div>

            {/* Image — below text on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden order-2 md:order-1"
            >
              <img
                src={imgImage104}
                alt=""
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
}


// FAQ Section
function FAQSection() {
    const faqs = [
        {
            question: "What exams does AcemyX prepare students for?",
            answer: "AcemyX provides comprehensive preparation for JAMB, WAEC, and Post-UTME exams, covering all major subjects and topics."
        },
        {
            question: "How does the AI tutor work?",
            answer: "Our Socratic AI tutor uses advanced algorithms to guide you through problems step-by-step, helping you understand concepts rather than just memorizing answers."
        },
        {
            question: "Can I track my progress?",
            answer: "Yes! AcemyX includes detailed progress tracking, performance analytics, and personalized recommendations to help you improve."
        },
        {
            question: "Is there a free trial available?",
            answer: "Absolutely! We offer a free trial so you can explore our platform and see how it can help you achieve your academic goals."
        }
    ];

    return (
        <section id="faq" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-[120px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 space-y-4"
                >
                    <h2 className="text-[#0d114d] text-[32px] md:text-[40px] leading-tight font-['Figtree:Regular',sans-serif]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#0d114d] text-base md:text-lg font-['Figtree:Regular',sans-serif]">
                        Everything you need to know about AcemyX
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Still Need a Hand CTA Section
function StillNeedAHandSection() {
    return (
      <section className="bg-[#010105] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start md:items-center text-left md:text-center gap-8 md:gap-9 md:max-w-[671px] md:mx-auto"
          >
            <div className="flex flex-col gap-4 text-white font-['Figtree:Regular',sans-serif]">
              <h2 className="text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.03em]">
                Still Need a Hand?
              </h2>
              <p className="text-[16px] leading-[22px] tracking-[-0.056px]">
                Our team of mentors is ready to help you navigate your
                university admission journey. We are committed to making sure
                every student in Nigeria feels supported and ready.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://wa.me/2348122990975?text=Hello!%20I%20will%20like%20to%20know%20more%20about%20AcemyX.",
                    "_blank",
                  )
                }
                className="px-6 py-[18px] bg-[#ffdb51] rounded-full text-[#0d114d] font-['Figtree:Medium',sans-serif] text-sm md:text-base hover:shadow-lg hover:shadow-[#dcfa7f]/20 transition-shadow"
              >
                Chat with a Mentor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("mailto:contact@acemyx.com")}
                className="px-6 py-[18px] border border-white rounded-full text-white font-['Figtree:Medium',sans-serif] text-sm md:text-base"
              >
                Email Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
}

// Footer
function Footer() {
    // Link map: label → href (undefined = ACADEMY_URL)
    const footerSections: { category: string; links: { label: string; href: string }[] }[] = [
        {
            category: "About",
            links: [
                { label: "How it Works",  href: ACADEMY_URL },
                { label: "Pricing",       href: ACADEMY_URL },
                { label: "FAQs",          href: ACADEMY_URL },
                { label: "Reviews",       href: ACADEMY_URL },
                { label: "Contact Us",    href: "mailto:contact@acemyx.com" },
            ],
        },
        // {
        //     category: "Community",
        //     links: [
        //         { label: "Community Invite Link", href: ACADEMY_URL },
        //         { label: "Study Community",       href: ACADEMY_URL },
        //         { label: "Resources",             href: ACADEMY_URL },
        //     ],
        // },
        {
            category: "Account",
            links: [
                { label: "Create Account",           href: ACADEMY_URL },
                { label: "Login to Existing Account", href: ACADEMY_URL },
                { label: "Get Account Support",      href: ACADEMY_URL },
                { label: "Refer a Friend",           href: ACADEMY_URL },
            ],
        },
        {
            category: "Exams",
            links: [
                { label: "JAMB Prep",   href: ACADEMY_URL },
                { label: "WAEC Tutor",  href: ACADEMY_URL },
            ],
        },
    ];

    return (
        <footer id="contact" className="bg-[#030410] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 md:px-[120px] py-12 md:py-16">
                <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
                    {/* Logo + Social */}
                    <div className="flex flex-col gap-6">
                        {/* AcemyX Logo */}
                        <svg className="w-[100px] h-[26px] md:w-[120px] md:h-[30px]" viewBox="0 0 135.56 34.5705" fill="none">
                            <path d="M9.82121 0C11.183 0 12.4532 0.261907 13.6317 0.785696C14.8364 1.2833 15.8841 1.97733 16.7745 2.86778C17.665 3.75823 18.3591 4.80584 18.8566 6.01055C19.3804 7.1891 19.6423 8.45931 19.6423 9.82119V24.7493H14.6139V19.7994H5.02838V24.7493H0V9.82119C0 8.45931 0.248834 7.1891 0.746375 6.01055C1.27021 4.80584 1.97727 3.75823 2.86778 2.86778C3.75817 1.97733 4.7927 1.2833 5.97124 0.785696C7.17596 0.261907 8.45933 0 9.82121 0ZM14.6139 9.82119C14.6139 9.16636 14.4829 8.55098 14.2211 7.97479C13.9854 7.37243 13.6449 6.86174 13.1997 6.44272C12.7805 5.9974 12.2698 5.65703 11.6675 5.42134C11.0913 5.15936 10.4759 5.0285 9.82121 5.0285C9.16638 5.0285 8.53784 5.15936 7.93548 5.42134C7.3593 5.65703 6.84861 5.9974 6.40341 6.44272C5.98439 6.86174 5.64389 7.37243 5.38204 7.97479C5.14623 8.55098 5.02838 9.16636 5.02838 9.82119V14.7711H14.6139V9.82119ZM40.8483 15.5174C40.7697 16.8007 40.4555 18.0054 39.9055 19.1316C39.3816 20.2578 38.6746 21.2398 37.7841 22.078C36.8937 22.8899 35.8723 23.5446 34.7199 24.0421C33.5675 24.5136 32.3367 24.7493 31.0271 24.7493C29.6652 24.7493 28.382 24.5005 27.1773 24.0029C25.9987 23.4791 24.9642 22.772 24.0738 21.8815C23.1833 20.9911 22.4763 19.9566 21.9524 18.7781C21.4548 17.5733 21.206 16.29 21.206 14.9281C21.206 13.5663 21.4548 12.2961 21.9524 11.1176C22.4763 9.91286 23.1833 8.86518 24.0738 7.97479C24.9642 7.08428 25.9987 6.39025 27.1773 5.89271C28.382 5.36887 29.6652 5.10701 31.0271 5.10701C32.3367 5.10701 33.5675 5.35585 34.7199 5.85339C35.8723 6.32488 36.8937 6.97959 37.7841 7.81763C38.6746 8.6295 39.3816 9.59853 39.9055 10.7247C40.4555 11.8508 40.7697 13.0556 40.8483 14.3389H35.7806C35.702 13.7627 35.5186 13.2127 35.2306 12.689C34.9688 12.1651 34.6283 11.7199 34.2092 11.3533C33.7902 10.9866 33.3057 10.6986 32.7557 10.489C32.2057 10.2532 31.6295 10.1354 31.0271 10.1354C30.3724 10.1354 29.7439 10.2664 29.1415 10.5282C28.5653 10.7639 28.0547 11.1044 27.6095 11.5496C27.1903 11.9688 26.8499 12.4795 26.588 13.0818C26.3523 13.658 26.2344 14.2734 26.2344 14.9281C26.2344 15.5829 26.3523 16.2115 26.588 16.8138C26.8499 17.39 27.1903 17.9007 27.6095 18.3459C28.0547 18.7649 28.5653 19.1054 29.1415 19.3673C29.7439 19.6031 30.3724 19.7209 31.0271 19.7209C31.6295 19.7209 32.2057 19.6161 32.7557 19.4066C33.3057 19.1709 33.7902 18.8697 34.2092 18.5031C34.6283 18.1364 34.9688 17.7042 35.2306 17.2067C35.5186 16.6828 35.702 16.1198 35.7806 15.5174H40.8483ZM58.2437 22.7065C57.4057 23.3612 56.4758 23.8719 55.4545 24.2386C54.4331 24.5791 53.3594 24.7493 52.2332 24.7493C50.8713 24.7493 49.588 24.5005 48.3833 24.0029C47.2048 23.4791 46.1703 22.772 45.2797 21.8815C44.3894 20.9911 43.6822 19.9566 43.1585 18.7781C42.6608 17.5733 42.412 16.29 42.412 14.9281C42.412 13.5663 42.6608 12.2961 43.1585 11.1176C43.6822 9.91286 44.3894 8.86518 45.2797 7.97479C46.1703 7.08428 47.2048 6.39025 48.3833 5.89271C49.588 5.36887 50.8713 5.10701 52.2332 5.10701C53.595 5.10701 54.8653 5.36887 56.0438 5.89271C57.2485 6.39025 58.2961 7.08428 59.1866 7.97479C60.077 8.86518 60.771 9.91286 61.2687 11.1176C61.7924 12.2961 62.0544 13.5663 62.0544 14.9281C62.0544 15.3472 62.0281 15.7531 61.9757 16.146C61.9234 16.5388 61.8579 16.9185 61.7794 17.2852H48.069C48.488 18.0185 49.0642 18.6079 49.7976 19.0531C50.5308 19.4983 51.3428 19.7209 52.2332 19.7209C52.757 19.7209 53.2545 19.6423 53.726 19.4851C54.1974 19.3281 54.6296 19.1054 55.0224 18.8174L58.2437 22.7065ZM52.2332 10.1354C51.3951 10.1354 50.6356 10.3319 49.9547 10.7247C49.2737 11.1176 48.7107 11.6283 48.2655 12.2568H56.201C55.7556 11.6283 55.1926 11.1176 54.5117 10.7247C53.8307 10.3319 53.0712 10.1354 52.2332 10.1354ZM84.8312 12.4532C84.7009 11.7723 84.3728 11.2092 83.8494 10.7639C83.3522 10.3187 82.7498 10.0962 82.0423 10.0962C81.3097 10.0962 80.6673 10.3449 80.1175 10.8426C79.594 11.3401 79.3056 11.9556 79.2533 12.689V24.7493H74.2249V12.846C74.1987 12.0866 73.9106 11.4449 73.3606 10.9211C72.8368 10.3711 72.1952 10.0962 71.4356 10.0962C70.7286 10.0962 70.1131 10.3187 69.5892 10.7639C69.0655 11.2092 68.7512 11.7723 68.6465 12.4532V24.7493H63.618V12.846C63.618 11.7723 63.8275 10.7639 64.2465 9.82119C64.6657 8.87833 65.2287 8.06646 65.9358 7.38546C66.6429 6.67841 67.468 6.1284 68.4107 5.73555C69.3536 5.31653 70.3619 5.10701 71.4356 5.10701C72.457 5.10701 73.413 5.30338 74.3034 5.69622C75.2201 6.0629 76.032 6.57359 76.739 7.22842C77.42 6.57359 78.2188 6.0629 79.1354 5.69622C80.0524 5.30338 81.0217 5.10701 82.0423 5.10701C83.1168 5.10701 84.1249 5.31653 85.0679 5.73555C86.0108 6.1284 86.8349 6.67841 87.5424 7.38546C88.25 8.06646 88.8123 8.87833 89.2318 9.82119C89.65 10.7639 89.8604 11.7723 89.8604 12.846V24.7493H84.8312V12.4532ZM91.4221 5.10701H96.4513V14.9281C96.4513 15.5829 96.569 16.2115 96.8045 16.8138C97.0662 17.39 97.4068 17.9007 97.8264 18.3459C98.2709 18.7649 98.7819 19.1054 99.3579 19.3673C99.9603 19.6031 100.589 19.7209 101.244 19.7209C101.899 19.7209 102.514 19.6031 103.09 19.3673C103.692 19.1054 104.203 18.7649 104.623 18.3459C105.067 17.9007 105.408 17.39 105.643 16.8138C105.905 16.2115 106.036 15.5829 106.036 14.9281V5.10701H111.064V24.7493C111.064 26.1112 110.803 27.3814 110.279 28.5599C109.782 29.7647 109.087 30.8122 108.197 31.7027C107.306 32.5931 106.259 33.2871 105.055 33.7848C103.876 34.3085 102.605 34.5705 101.244 34.5705C99.8814 34.5705 98.599 34.3085 97.3943 33.7848C96.2159 33.2871 95.1802 32.5931 94.2898 31.7027C93.3994 30.8122 92.6931 29.7647 92.1684 28.5599C91.6713 27.3814 91.4221 26.1112 91.4221 24.7493H96.4513C96.4513 25.404 96.569 26.0195 96.8045 26.5957C97.0662 27.1981 97.4068 27.7087 97.8264 28.1278C98.2709 28.573 98.7819 28.9135 99.3579 29.1492C99.9603 29.4111 100.589 29.542 101.244 29.542C101.899 29.542 102.514 29.4111 103.09 29.1492C103.692 28.9135 104.203 28.573 104.623 28.1278C105.067 27.7087 105.408 27.1981 105.643 26.5957C105.905 26.0195 106.036 25.404 106.036 24.7493V23.5314C104.57 24.3433 102.972 24.7493 101.244 24.7493C99.8814 24.7493 98.599 24.5005 97.3943 24.0029C96.2159 23.4791 95.1802 22.772 94.2898 21.8815C93.3994 20.9911 92.6931 19.9566 92.1684 18.7781C91.6713 17.5733 91.4221 16.29 91.4221 14.9281V5.10701Z" fill="#FAFAFA" />
                            <path d="M130.688 12.5318C132.128 13.6317 133.28 14.9936 134.144 16.6173C135.01 18.2412 135.481 20.0221 135.56 21.96V24.7493H130.413V22.3922C130.413 21.6327 130.295 20.9125 130.059 20.2316C129.85 19.5244 129.536 18.8828 129.116 18.3067C128.723 17.7042 128.239 17.1805 127.663 16.7353C127.113 16.29 126.51 15.9365 125.855 15.6746C124.521 16.1983 123.42 17.0626 122.556 18.2674C121.692 19.4721 121.26 20.847 121.26 22.3922V24.7493H116.153V22.3922C116.153 20.4018 116.585 18.5554 117.449 16.8531C118.313 15.1508 119.479 13.7365 120.945 12.6103C119.452 11.458 118.274 10.0437 117.41 8.36764C116.546 6.66526 116.1 4.80583 116.074 2.78921V0H121.221V2.74993C121.221 3.50944 121.325 4.24275 121.535 4.94985C121.77 5.63085 122.085 6.27241 122.478 6.87477C122.896 7.45095 123.381 7.96165 123.931 8.40696C124.48 8.85216 125.097 9.20569 125.778 9.46754C127.113 8.94383 128.214 8.07949 129.078 6.87477C129.942 5.67005 130.374 4.29512 130.374 2.74993V0H135.481V2.74993H135.519C135.519 4.74034 135.087 6.58674 134.223 8.289C133.359 9.99138 133.359 9.99138 130.688 12.5318Z" fill="#FAFAFA" />
                        </svg>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 mt-2">
                            <a href="https://www.linkedin.com/company/acemyx/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 transition-opacity">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" fill="#FAFAFA"/>
                                    <circle cx="4" cy="4" r="2" fill="#FAFAFA"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/acemyx/?igsh=amVxejd0Y29iYXM5#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FAFAFA" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="4" stroke="#FAFAFA" strokeWidth="2"/>
                                    <circle cx="17.5" cy="6.5" r="1" fill="#FAFAFA"/>
                                </svg>
                            </a>
                            <a href="https://facebook.com/people/AcemyX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="#FAFAFA"/>
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@acemyx.com?_t=8shW7yv3sUo&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100 transition-opacity">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.8a8.18 8.18 0 004.78 1.52V6.87a4.85 4.85 0 01-1.01-.18z" fill="#FAFAFA"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {footerSections.map(({ category, links }) => (
                            <div key={category} className="flex flex-col gap-4">
                                <h4 className="text-white font-['Figtree:SemiBold',sans-serif] font-semibold text-[16px] leading-[24px]">
                                    {category}
                                </h4>
                                <ul className="flex flex-col gap-[15px]">
                                    {links.map(({ label, href }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                                className="text-white/80 font-['Figtree:Regular',sans-serif] text-[14px] leading-[20px] hover:text-white transition-colors"
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#010105] py-6">
                <div className="container mx-auto px-6 md:px-[120px] flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 text-[12px] text-[rgba(255,255,255,0.8)] font-['Figtree:Regular',sans-serif] tracking-[-0.056px]">
                    <span>Copyright © 2026 AcemyX. All rights reserved.</span>
                    <div className="flex items-center gap-0">
                        <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors px-1">Privacy Policy</a>
                        <span className="opacity-80"> | </span>
                        <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors px-1">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Main Unified App Component
export default function UnifiedApp() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <div className="w-full min-h-screen bg-white overflow-x-hidden">
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrustSection />
        <StatsSection />
        <ReviewsSection />
        <PricingSection />
        <AITutorSection />
        <FAQSection />
        <StillNeedAHandSection />
        <Footer />
      </div>
    );
}
