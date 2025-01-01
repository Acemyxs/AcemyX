import { useState } from "react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState("signup");

  const faqs = {
    general: [
      {
        id: "signup",
        question: "How do I sign up for AcemyX",
        answer:
          'Signing up is easy! Visit our website, click on the "Sign Up" button, and fill in your details. Once registered, you can explore the platform and start your learning journey.',
      },
      {
        id: "subjects",
        question: "What subjects are available on the platform?",
        answer:
          "We offer a wide range of subjects across different disciplines.",
      },
      {
        id: "moodle",
        question: "How do practice tests on Moodle work?",
        answer:
          "Our practice tests are designed to help you assess your knowledge.",
      },
    ],
    services: [],
  };

  return (
    <section className="w-[80%] mx-auto py-24">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
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
      <div className="space-y-4">
        {faqs[activeTab].map((faq) => (
          <div key={faq.id} className="border-b border-gray-100 pb-4">
            <button
              onClick={() =>
                setOpenQuestion(openQuestion === faq.id ? "" : faq.id)
              }
              className="flex justify-between items-center w-full text-left py-2 text-gray-900"
            >
              <h4 className="font-medium max-w-[90%]">{faq.question}</h4>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openQuestion === faq.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openQuestion === faq.id && (
              <div className="mt-2 text-gray-600 text-sm max-w-[90%]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
