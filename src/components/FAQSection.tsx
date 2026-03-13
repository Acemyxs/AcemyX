import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        console.log('FAQ clicked:', question);
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#f7f5f1] flex flex-col overflow-hidden rounded-[16px] w-full mb-4 pointer-events-auto">
            <button
                className="h-[72px] w-full cursor-pointer flex items-center justify-between px-6 text-left pointer-events-auto hover:bg-[#f0ebe1] transition-colors"
                onClick={handleClick}
                type="button"
            >
                <div className="flex-1 font-['Figtree',sans-serif] font-medium text-[#0d114d] text-[16px] pr-4">
                    {question}
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2V12M2 7H12" stroke="#0d114d" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-[#4a4a4a] text-[14px] leading-[1.6] font-['Figtree',sans-serif]">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const faqData = [
    {
        question: "How do I sign up for AcemyX?",
        answer: "You can sign up by clicking the 'Get Started' button at the top of the page. Follow the prompts to create your account and start your learning journey."
    },
    {
        question: "What subjects are available on the platform?",
        answer: "We offer a wide range of subjects including Mathematics, English, Physics, Chemistry, Biology, and many more tailored specifically for JAMB, WAEC, and Post-UTME exams."
    },
    {
        question: "How do practice tests work?",
        answer: "Our practice tests are designed to mimic real exam environments. You can take them anytime, anywhere, and get instant feedback and detailed explanations for every answer."
    },
    {
        question: "What unique services does AcemyX offer?",
        answer: "We provide AI-powered personalized learning paths, interactive mock exams, a progress leaderboard, and access to a community of dedicated mentors."
    },
    {
        question: "Can organizations use AcemyX for their members?",
        answer: "Absolutely! We offer bulk subscription plans and dedicated monitoring dashboards for schools, tutoring centers, and other educational organizations."
    }
];

export function FAQSection() {
    return (
        <motion.div
            id="faq"
            className="w-full py-16 px-6 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-[400px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[#0d114d] text-[32px] font-['Figtree',sans-serif] font-normal mb-3">
                        FAQs
                    </h2>
                    <p className="text-[#0d114d] text-[16px] font-['Figtree',sans-serif]">
                        We're here to help you every step of the way.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
