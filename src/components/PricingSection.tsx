import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ACADEMY_URL = "https://academy.acemyx.com/";

const checkIcon = (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.48599 3.24431C4.14984 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71761 10.009 2.03112 11.5851C2.34462 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z" fill="#404040" />
    </svg>
);

const features = [
    'Unlimited Practice Questions, Quizzes, & Mock Exams',
    'Self-Paced Study Notes & Collaborative Peer Forum',
    'Socratic AI Tutor & Progress Leaderboard',
];

function PricingCard({ title, subtitle, price, period, cta, ctaHref }: {
    title: string; subtitle: string; price: string; period: string; cta: string; ctaHref?: string;
}) {
    return (
        <div className="bg-[#fafafa] rounded-[20px] p-5 sm:p-6 lg:p-8 flex flex-col justify-between gap-6 h-full">
            <div className="space-y-5 sm:space-y-6">
                <div className="space-y-1">
                    <h3 className="text-[#0d114d] text-xl sm:text-2xl font-ui font-semibold">{title}</h3>
                    <p className="text-[#7c7c7c] text-xs sm:text-sm font-ui font-normal">{subtitle}</p>
                </div>
                <div className="h-px bg-[#D2D2D2]" />
                <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-[#0d114d] text-[34px] sm:text-[40px] font-ui font-medium leading-none">{price}</span>
                    <span className="text-[#7c7c7c] text-sm sm:text-base font-ui font-normal">{period}</span>
                </div>
                <div className="space-y-3">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                            {checkIcon}
                            <span className="text-[#7c7c7c] text-xs sm:text-sm lg:text-base font-ui font-normal">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
            {ctaHref ? (
                <motion.a
                    href={ctaHref}
                    target={ctaHref.startsWith("mailto") ? undefined : "_blank"}
                    rel={ctaHref.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="mt-2 w-full bg-[#222] text-white py-3 sm:py-4 rounded-full font-ui font-medium text-sm sm:text-base text-center block"
                >
                    {cta}
                </motion.a>
            ) : (
                <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(ACADEMY_URL, "_blank")}
                    className="mt-2 w-full bg-[#222] text-white py-3 sm:py-4 rounded-full font-ui font-medium text-sm sm:text-base"
                >
                    {cta}
                </motion.button>
            )}
        </div>
    );
}

export function PricingSection() {
    const [isIndividual, setIsIndividual] = useState(true);

    return (
        <section id="pricing" className="bg-white py-12 sm:py-16 lg:py-24">
            <div className="safe-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6"
                >
                    <h2 className="text-[#0d114d] text-[28px] sm:text-[34px] lg:text-[40px] leading-tight font-body font-normal">
                        Plans and Pricing
                    </h2>
                    <p className="text-[#0d114d] text-sm sm:text-base lg:text-lg font-body font-normal">
                        Flexible plans and solutions for business of all sizes
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex bg-[#f5f5f5] rounded-full p-1">
                        <button
                            onClick={() => setIsIndividual(true)}
                            className={`px-5 sm:px-6 py-2 rounded-full text-sm font-ui font-medium transition-colors ${isIndividual ? "bg-[#232323] text-white" : "text-black"}`}
                        >
                            Individual
                        </button>
                        <button
                            onClick={() => setIsIndividual(false)}
                            className={`px-5 sm:px-6 py-2 rounded-full text-sm font-ui font-medium transition-colors ${!isIndividual ? "bg-[#232323] text-white" : "text-black"}`}
                        >
                            Enterprise
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {isIndividual ? (
                        <motion.div
                            key="individual"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto"
                        >
                            <PricingCard title="Basic" subtitle="Access All Course Materials and Features" price="N500" period="/user per month" cta="Get started" />
                            <PricingCard title="Standard" subtitle="Enjoy the same full access with a 20% discount when paid upfront." price="N1,200" period="/user per 3 months" cta="Get started" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="enterprise"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-sm mx-auto w-full"
                        >
                            <div className="bg-[#fafafa] rounded-[20px] p-5 sm:p-6 lg:p-8 flex flex-col justify-between gap-6">
                                <div className="space-y-5 sm:space-y-6">
                                    <div className="space-y-1">
                                        <h3 className="text-[#0d114d] text-xl sm:text-2xl font-ui font-semibold">Enterprise Plan</h3>
                                        <p className="text-[#7c7c7c] text-xs sm:text-sm font-ui font-normal">Tailored Solutions for Institutions</p>
                                    </div>
                                    <div className="h-px bg-[#D2D2D2]" />
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="text-[#0d114d] text-[34px] sm:text-[40px] font-ui font-medium leading-none">Custom</span>
                                        <span className="text-[#7c7c7c] text-sm sm:text-base font-ui font-normal">Pricing</span>
                                    </div>
                                    <div className="space-y-3">
                                        {["Every feature on Standard Plan and more.", "Scaled access for students", "Dedicated sales team support"].map((f, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-[#7c7c7c] text-xs sm:text-sm lg:text-base font-ui font-normal">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <motion.a
                                    href="mailto:contact@acemyx.com"
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="mt-2 w-full bg-[#222] text-white py-3 sm:py-4 rounded-full font-ui font-medium text-sm sm:text-base text-center block"
                                >
                                    Contact Sales for Details
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
