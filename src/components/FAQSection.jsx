import { useState } from "react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState("signup");
  const [isExpanded, setIsExpanded] = useState(false);

  // Move the faqs object here, before using it in displayCount
  const faqs = {
    services: [
      {
        id: "what-is",
        question: "What is AcemyX?",
        answer:
          "AcemyX is an online platform that helps learners prepare for university admission exams and other academic or professional assessments using personalized tools, curated resources, and self-paced learning.",
      },
      {
        id: "how-works",
        question: "How does AcemyX work?",
        answer:
          "AcemyX provides access to a vast question bank, study materials, mock exams, an AI tutor, a peer forum, and a leaderboard to enhance learning and engagement.",
      },
      {
        id: "unique-services",
        question: "What unique services does AcemyX offer?",
        answer:
          "• 50,000+ practice questions tailored to exam needs\n• AI-powered Socratic tutor to develop critical thinking\n• Mock exams that simulate real test conditions\n• A collaborative peer forum for support and insights",
      },
      {
        id: "ace-myx",
        question: "How can I sign up for AcemyX?",
        answer:
          "Signing up is simple. Visit the website, click 'Sign Up,' and follow the instructions to create your account.",
      },
      {
        id: "pricing",
        question: "Is AcemyX free?",
        answer:
          "You can sign up for free and access limited resources. Full access starts at ₦500/month or ₦1,200 for three months (20% discount).",
      },
      {
        id: "subjects",
        question: "What subjects are covered on AcemyX?",
        answer:
          "AcemyX offers resources for major university admission exam subjects, including Mathematics, English, Sciences, and more.",
      },
      {
        id: "devices",
        question: "Can I access AcemyX on any device?",
        answer:
          "Yes, AcemyX is compatible with mobile devices, tablets, and desktops for seamless access.",
      },
      {
        id: "ai-tutor",
        question: "What is the AI tutor, and how does it help?",
        answer:
          "The AI tutor uses the Socratic method to ask guiding questions, helping users arrive at answers on their own and fostering critical thinking.",
      },
      {
        id: "updates",
        question: "How often is the content updated?",
        answer:
          "Content and question banks are regularly reviewed and updated to ensure alignment with current trends and standards.",
      },
      {
        id: "community",
        question: "Does AcemyX provide a community for users?",
        answer:
          "Yes, AcemyX offers a peer forum where users can collaborate, share insights, and support each other.",
      },
      {
        id: "enterprise",
        question: "Can organizations use AcemyX for their members?",
        answer:
          "Absolutely! AcemyX offers an enterprise plan tailored to institutions and organizations. Contact our sales team for details.",
      },
      {
        id: "difference",
        question: "What makes AcemyX different from traditional study methods?",
        answer:
          "AcemyX combines AI-driven personalization, interactive tools, and self-paced learning to make exam preparation more effective and engaging.",
      },
      {
        id: "Quality",
        question: "How does AcemyX ensure the quality of its content?",
        answer:
          "All content is carefully curated by experts and regularly updated to maintain high standards.",
      },
      {
        id: "trial",
        question: "Is there a trial period for the paid plans?",
        answer:
          "While there’s no trial for paid plans, the free plan allows you to explore the platform and its features.",
      },
      {
        id: "support",
        question: "What kind of support does AcemyX provide?",
        answer:
          "Our dedicated support team is available via email or chat to assist with technical or platform-related issues.",
      },
      {
        id: "feedback",
        question: "How can I provide feedback about AcemyX?",
        answer:
          "We value your input! Share feedback directly through the platform or by contacting our support team.",
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
      {
        id: "Retake",
        question: "Can I retake the exam if I don’t perform well?",
        answer:
          "Absolutely! You can retake UTME, WAEC, or NECO in the next scheduled session to improve your scores.",
      },
      {
        id: "Compulsory",
        question: "What subjects are compulsory for WAEC, and NECO?",
        answer:
          "English Language and Mathematics are compulsory, along with other subjects relevant to your chosen field of study.",
      },
      {
        id: "required",
        question:
          "How many subjects are students required to take in WAEC and NECO?",
        answer:
          "Students are required to take a minimum of eight subjects, which must include core subjects like Mathematics and English Language, along with other subjects relevant to their chosen field of study.",
      },
      {
        id: "Preparation",
        question: "What is the best way to prepare for UTME, WAEC, and NECO?",
        answer:
          "The key to success is consistent study, understanding the exam format, practicing past questions, and staying updated with the syllabus. AcemyX provides a comprehensive suite of resources tailored for these exams.",
      },
      {
        id: "Utmme-score",
        question: "How can I check my UTME score?",
        answer:
          " You can check your UTME score by visiting the official JAMB website and logging in with your registration details. Alternatively, you can use the JAMB mobile app for quick access to your results.",
      },
      {
        id: "Waec result",
        question: "How can i check my WAEC or NECO result?",
        answer:
          "Results can be checked online through the official websites of WAEC or NECO using your registration details.",
      },
    ],
  };

  // Use the faqs object here
  const displayCount = isExpanded ? faqs[activeTab].length : 4;

  return (
    <section className='w-[80%] md:w-[60%] mx-auto py-24'>
      <h2 className='text-3xl font-semibold text-center mb-8'>
        Frequently Asked Questions
      </h2>

      {/* Tabs */}
      <div className='mx-auto bg-neutral-white-40 w-fit p-2 rounded-full mb-12'>
        <button
          onClick={() => {
            setActiveTab("services");
            setIsExpanded(false);
            setOpenQuestion("");
          }}
          className={`px-6 py-3 rounded-full font-semibold transition-colors ${
            activeTab === "services"
              ? "bg-neutral-white-10 text-primary"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Services
        </button>
        <button
          onClick={() => {
            setActiveTab("general");
            setIsExpanded(false);
            setOpenQuestion("");
          }}
          className={`px-6 py-3 rounded-full font-semibold transition-colors ${
            activeTab === "general"
              ? "bg-neutral-white-10 text-primary"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          General
        </button>
      </div>

      <div className='space-y-4'>
        {faqs[activeTab].slice(0, displayCount).map((faq) => (
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

      {faqs[activeTab].length > 4 && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black h-11 px-8 flex items-center bg-primary text-white rounded-full'
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
