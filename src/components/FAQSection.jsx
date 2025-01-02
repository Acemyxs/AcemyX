import { useState } from "react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState("signup");

  const faqs = {
    services: [
      {
        id: "signup",
        question: "What is AcemyX?",
        answer:
          "AcemyX is a digital learning platform designed to help students prepare for their WAEC, NECO, and UTME exams. We provide a comprehensive range of resources, including a question bank, video lectures, study notes, practice problems, live mentoring sessions, and AI assistance.",
      },
      {
        id: "Acemyx",
        question: "How do I sign up for AcemyX",
        answer:
          'To sign up for AcemyX, visit our website and click on the "Sign up" button. You will be guided through the registration process, where you can create an account and access all our resources.',
      },
      {
        id: "moodle",
        question: "What unique services does AcemyX offer?",
        answer:
          "AcemyX offers a personalized learning experience with AI assistance, a vast question bank with detailed explanations, and access to premium features such as one-on-one mentorship and live coaching sessions based on request.",
      },
    ],
    general: [
      {
        id: "signup",
        question: "What is UTME?",
        answer:
          "The Unified Tertiary Matriculation Examination (UTME) is an entrance examination for prospective undergraduates in Nigeria. It is conducted by the Joint Admissions and Matriculation Board (JAMB) and is required for admission into Nigerian universities.",
      },
      {
        id: "waec",
        question: "What is WAEC?",
        answer:
          "The West African Examinations Council (WAEC) is an examination board that conducts the West African Senior School Certificate Examination (WASSCE) for high school students in West African countries. The exam assesses students’ readiness for tertiary education.",
      },
      {
        id: "neco",
        question: "What is NECO?",
        answer:
          "The National Examinations Council (NECO) conducts the Senior Secondary Certificate Examination (SSCE) for secondary school students in Nigeria. It is an alternative to the WAEC exam and is recognized by Nigerian universities.",
      },
      {
        id: "gen",
        question: "How often are UTME, WAEC and NECO exams conducted?",
        answer:
          "UTME is usually conducted once a year, while WAEC and NECO have two sessions annually - the May/June session and the Nov/Dec session.",
      },
    ],
  };

  return (
    <section className='w-[80%] md:w-[60%] mx-auto py-24'>
      <h2 className='text-3xl font-semibold text-center mb-8'>
        Frequently Asked Questions
      </h2>

      {/* Tabs */}
      <div className='flex gap-4 mb-8'>
        <button
          onClick={() => setActiveTab("general")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeTab === "general"
                ? "bg-text-color text-neutral-white-10"
                : "bg-transparent border-text-color border-solid border-2 text-neutral-black-80 hover:bg-neutral-white-10"
            }`}
        >
          General
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeTab === "services"
                ? "bg-text-color text-neutral-white-10"
                : "bg-transparent border-text-color border-solid border-2 text-neutral-black-80 hover:bg-gray-50"
            }`}
        >
          Services
        </button>
      </div>

      {/* FAQ Items */}
      <div className='space-y-4'>
        {faqs[activeTab].map((faq) => (
          <div key={faq.id} className='border-b border-gray-100 pb-4'>
            <button
              onClick={() =>
                setOpenQuestion(openQuestion === faq.id ? "" : faq.id)
              }
              className='flex justify-between items-center w-full text-left py-2 text-gray-900'
            >
              <h4 className='font-medium max-w-[90%]'>{faq.question}</h4>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openQuestion === faq.id ? "rotate-180" : ""
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {openQuestion === faq.id && (
              <div className='mt-2 text-gray-600 text-sm max-w-[90%]'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
